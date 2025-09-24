import { useState } from "react";
import { ChevronDown, Copy } from "lucide-react";
import React from "react";

const wallets = [
  { id: 1, name: "Bitcoin", symbol: "BTC", address: "1A1zP1eP5Q...", icon: "₿" },
  { id: 2, name: "Ethereum", symbol: "ETH", address: "0xAbC123...", icon: "Ξ" },
  { id: 3, name: "BNB", symbol: "BNB", address: "bnb1xyz...", icon: "🟡" },
];

export default function ReceiveCrypto() {
  const [crypto, setCrypto] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    if (crypto) {
      navigator.clipboard.writeText(crypto.address);
    }
  };

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        📥 Receive Crypto
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
            <span className="text-gray-400">Choose wallet to receive</span>
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
                className="w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-700/40 transition text-sm"
              >
                <span className="text-lg">{w.icon}</span>
                <span>{w.name} ({w.symbol})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Wallet Address & Copy */}
      {crypto && (
        <div className="flex items-center justify-between bg-gray-900/50 px-3 py-2 rounded-md">
          <span className="truncate text-sm">{crypto.address}</span>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-gray-700/50 transition"
          >
            <Copy size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
