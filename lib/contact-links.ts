export const CONTACT_EMAIL = "rojasgonzales2022@gmail.com";
export const CONTACT_LOCATION = "Lima, Perú";
export const CONTACT_PHONE_DISPLAY = "(+51) 900 734 479";
export const CONTACT_PHONE_HREF = "tel:+51900734479";

export function gmailComposeUrl(options: { subject?: string; body?: string } = {}) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: CONTACT_EMAIL });
  if (options.subject) params.set("su", options.subject);
  if (options.body) params.set("body", options.body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function googleMapsSearchUrl(query: string) {
  const params = new URLSearchParams({ api: "1", query });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
