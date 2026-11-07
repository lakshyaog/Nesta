// WhatsApp number that receives callback requests (country code + number, no "+").
export const WHATSAPP_NUMBER = "918409858321";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const EMAIL = "nestalivingofficial@gmail.com";
export const PHONE_DISPLAY = "+91 84098 58321";

export const INSTAGRAM_URL = "https://www.instagram.com/nestaliving.official";
export const INSTAGRAM_HANDLE = "@nestaliving.official";
