import AxiosApi from "../utils/Interceptor";

export async function getPrice({ cryptoFullName }) {
  try {
    const res = await AxiosApi.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoFullName}&vs_currencies=usd`
    );
    console.log(res.data);
    return res.data[cryptoFullName].usd; 
  } catch (err) {
    console.error("Error fetching price:", err);
    return NaN;
  }
}
