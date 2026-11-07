// Writes src/data/image-dims.json with the pixel size of every JPEG/PNG in
// /public, so images can reserve their space before they load (no layout jumps).
// Runs automatically before `npm run dev` and `npm run build`.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "public";

function size(buf) {
  // PNG: width/height in the IHDR chunk
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  }
  // JPEG: find a Start-Of-Frame marker
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
      }
      i += 2 + len;
    }
  }
  return null;
}

const out = {};
for (const name of readdirSync(dir).sort()) {
  if (!/^nestaliving-.*\.(jpe?g|png)$/i.test(name)) continue;
  const dims = size(readFileSync(join(dir, name)));
  if (dims) out["/" + name] = dims;
}
writeFileSync("src/data/image-dims.json", JSON.stringify(out, null, 1) + "\n");
console.log(`image-dims: ${Object.keys(out).length} images`);
