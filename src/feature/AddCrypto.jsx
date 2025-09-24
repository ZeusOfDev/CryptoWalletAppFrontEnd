import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const cryptos = [
  { id: 1, name: "Bitcoin", symbol: "BTC", icon: "₿" },
  { id: 2, name: "Ethereum", symbol: "ETH", icon: "Ξ" },
  { id: 3, name: "Tether", symbol: "USDT", icon: "💵" },
  { id: 4, name: "BNB", symbol: "BNB", icon: "🟡" },
];

export default function AddCrypto() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        ➕ Add Crypto
      </h2>

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full h-11 px-3 flex items-center justify-between 
            rounded-lg bg-[var(--component-bg-color)] border border-gray-600/30 text-sm"
        >
          {selected ? (
            <div className="flex items-center gap-2">
              <span className="text-lg">{selected.icon}</span>
              <span>{selected.name} ({selected.symbol})</span>
            </div>
          ) : (
            <span className="text-gray-400">Choose a cryptocurrency</span>
          )}
          <ChevronDown size={18} className="text-gray-400" />
        </button>

        {open && (
          <div className="absolute mt-2 w-full bg-gray-800 rounded-lg shadow-lg divide-y divide-gray-700/30 z-50">
            {cryptos.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelected(c);
                  setOpen(false);
                }}
                className="w-full px-4 py-3 flex items-center gap-2 
                  hover:bg-gray-700/40 transition text-sm"
              >
                <span className="text-lg">{c.icon}</span>
                <span>{c.name} ({c.symbol})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Gradient Add Button */}
      <button className="w-full h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Add
      </button>
    </div>
  );
}
