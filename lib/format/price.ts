const priceFormatter = new Intl.NumberFormat("es-MX", {
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number) {
  return `$${priceFormatter.format(amount)}`;
}
