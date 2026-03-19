export type BuildWhatsAppUrlParams = {
  phoneNumber: string;
  message?: string;
};

export function normalizePhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/\D/g, "");
}

export function buildWhatsAppUrl({ phoneNumber, message }: BuildWhatsAppUrlParams) {
  const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
  const baseUrl = `https://wa.me/${normalizedPhoneNumber}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
