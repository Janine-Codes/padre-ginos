const intl = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (price) => intl.format(price);
export default function useCurrecy(price) {
  return priceConverter(price);
}
