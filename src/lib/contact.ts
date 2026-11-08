// WhatsApp number that receives callback requests (country code + number, no "+").
export const WHATSAPP_NUMBER = "919217219747";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const EMAIL = "nestalivingofficial@gmail.com";
export const PHONE_DISPLAY = "+91 92172 19747";

export const INSTAGRAM_URL = "https://www.instagram.com/nestaliving.official";
export const INSTAGRAM_HANDLE = "@nestaliving.official";
