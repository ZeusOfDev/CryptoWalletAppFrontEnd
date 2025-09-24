import React from "react";

const data = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 112188.25, change1h: -0.36, amount: 2 },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 4172.22, change1h: -0.52, amount: 5 },
  { id: 3, name: "BNB", symbol: "BNB", price: 1018.44, change1h: 0.63, amount: 10 },
  { id: 4, name: "Solana", symbol: "SOL", price: 214.13, change1h: 1.0, amount: 20 },
];

export default function CryptoTable() {
  return (
    <div className="w-full overflow-x-auto">
      {/* Gradient using component background color */}
      <div className="rounded-2xl shadow-lg bg-gradient-to-br from-[rgba(21,21,23,0.6)] via-[rgba(21,21,23,0.4)] to-[rgba(21,21,23,0.6)] backdrop-blur-md p-2">
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="text-gray-300 text-sm bg-[rgba(255,255,255,0.05)]">
              <th className="px-5 py-3">#</th>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">1h %</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => {
              const approxValue = coin.price * coin.amount;
              return (
                <tr
                  key={coin.id}
                  className="border-b border-gray-700/40 hover:bg-[rgba(255,255,255,0.05)] transition"
                >
                  <td className="px-5 py-4 text-gray-300">{coin.id}</td>
                  <td className="px-5 py-4 font-medium text-white">
                    {coin.name} <span className="text-gray-400">{coin.symbol}</span>
                  </td>
                  <td
                    className={`px-5 py-4 font-semibold ${
                      coin.change1h < 0 ? "text-red-400" : "text-emerald-400"
                    }`}
                  >
                    {coin.change1h}%
                  </td>
                  <td className="px-5 py-4 text-gray-200">
                    ${coin.price.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 text-gray-200">
                    {coin.amount} <span className="text-gray-400">{coin.symbol}</span>
                    <div className="text-xs text-gray-400">
                      ≈ ${approxValue.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    {/* Placeholder mini chart */}
                    <div className="h-6 w-20 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg opacity-70"></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
