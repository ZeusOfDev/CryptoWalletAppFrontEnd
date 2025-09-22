import { useState } from "react";
import CryptoInformation from "./CryptoInformation";
function SendCrypto() {
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        🚀 Send Crypto
      </h2>

      <select
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
        className="h-10 w-full rounded-md border px-3 py-2 text-sm bg-[var(--component-bg-color)]"
      >
        
      </select>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="h-10 w-full rounded-md border px-3 py-2 text-sm"
      />

      <input
        placeholder="Destination Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="h-10 w-full rounded-md border px-3 py-2 text-sm"
      />

      <button className="w-full h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Send
      </button>
    </div>
  );
}

function ReceiveCrypto() {
  const address = "0x1234...abcd";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        📥 Receive Crypto
      </h2>
      <div className="bg-[var(--component-bg-color)] p-3 rounded-lg break-all">
        {address}
      </div>
      <button
        className="w-full h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        onClick={copyToClipboard}
      >
        Copy Address
      </button>
    </div>
  );
}

function AddCrypto() {
  const [selected, setSelected] = useState("");

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        ➕ Add Crypto
      </h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="h-10 w-full rounded-md border px-3 py-2 text-sm bg-[var(--component-bg-color)]"
      >
        <option value="">Choose a crypto</option>
        <option value="btc">Bitcoin (BTC)</option>
        <option value="eth">Ethereum (ETH)</option>
        <option value="usdt">Tether (USDT)</option>
      </select>

      <button className="w-full h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Add
      </button>
    </div>
  );
}

function ExchangeCrypto() {
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="rounded-2xl shadow-lg bg-[var(--component-bg-color)] p-6 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
        🔄 Exchange Crypto
      </h2>

      <select
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
        className="h-10 w-full rounded-md border px-3 py-2 text-sm bg-[var(--component-bg-color)]"
      >
        <option value="">Choose crypto to exchange</option>
        <option value="btc">Bitcoin (BTC)</option>
        <option value="eth">Ethereum (ETH)</option>
      </select>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="h-10 w-full rounded-md border px-3 py-2 text-sm"
      />

      <button className="w-full h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Exchange to USDT
      </button>
    </div>
  );
}
export { SendCrypto, ReceiveCrypto, AddCrypto, ExchangeCrypto };
