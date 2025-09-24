import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const wallets = [
  { id: 1, name: "Bitcoin", symbol: "BTC", balance: 2.5, icon: "₿" },
  { id: 2, name: "Ethereum", symbol: "ETH", balance: 12.8, icon: "Ξ" },
  { id: 3, name: "BNB", symbol: "BNB", balance: 20.3, icon: "🟡" },
];

export default function SendCrypto() {
  const [crypto, setCrypto] = useState(null);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        🚀 Send Crypto
      </h2>

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full h-11 px-3 flex items-center justify-between 
            rounded-lg bg-[var(--component-bg-color)] border border-gray-600/30 text-sm"
        >
          {crypto ? (
            <div className="flex items-center gap-2">
              <span className="text-lg">{crypto.icon}</span>
              <span>{crypto.name} ({crypto.symbol})</span>
            </div>
          ) : (
            <span className="text-gray-400">Select a cryptocurrency</span>
          )}
          <ChevronDown size={18} className="text-gray-400" />
        </button>

        {open && (
          <div className="absolute mt-2 w-full bg-gray-800 rounded-lg shadow-lg divide-y divide-gray-700/30 z-50">
            {wallets.map((w) => (
              <button
                key={w.id}
                onClick={() => {
                  setCrypto(w);
                  setOpen(false);
                }}
                className="w-full px-4 py-3 flex items-center justify-between 
                  hover:bg-gray-700/40 transition text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{w.icon}</span>
                  <span>{w.name} ({w.symbol})</span>
                </div>
                <span className="text-gray-400 text-xs">
                  Bal: {w.balance}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Show Balance if selected */}
      {crypto && (
        <div className="text-sm text-gray-300">
          Available: <span className="font-semibold text-white">{crypto.balance} {crypto.symbol}</span>
        </div>
      )}

      {/* Inputs */}
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="h-11 w-full rounded-md border border-gray-600/30 px-3 py-2 text-sm bg-[var(--component-bg-color)]"
      />
      <input
        placeholder="Destination Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="h-11 w-full rounded-md border border-gray-600/30 px-3 py-2 text-sm bg-[var(--component-bg-color)]"
      />

      {/* Gradient Send Button */}
      <button className="w-full h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Send
      </button>
    </div>
  );
}
