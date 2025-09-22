export default function currency(btcPrice, minimumFractionDigits = 2, maximumFractionDigits = 2) {
  return btcPrice.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: minimumFractionDigits,
  maximumFractionDigits: maximumFractionDigits,
})
}