export function stringNumberToFormatBrl(string) {
  return parseFloat(string).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
