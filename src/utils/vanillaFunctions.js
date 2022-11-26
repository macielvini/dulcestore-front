export function numberToFormatBrl(string) {
  return parseFloat(string).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
