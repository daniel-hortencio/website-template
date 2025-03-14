export function maskCurrency(value: string | number) {
  const locale = "pt-BR";
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
  };

  const currency_value = parseFloat(`${value}`.replace(/[^\d]/g, "")) / 100;

  return currency_value
    ? new Intl.NumberFormat(locale, options).format(currency_value)
    : "";
}
