import React, { useEffect, useState } from "react";
import PortfolioPie from "../feature/PieChart";
import BalanceGrowth from "../feature/GrowthChart";
import { RefreshCw, Send, Download, PlusCircle, Repeat } from "lucide-react";
import refreshicon from "../assets/refreshicon.svg";
import currency from "../utils/Currency";
import { getPrice } from "../services/GetPrice";
import ActivityBar from "../feature/ActivityBar";
import {
  SendCrypto,
  AddCrypto,
  ExchangeCrypto,
  ReceiveCrypto,
} from "../feature/HomeActivity";
export default function Home() {
  const [sendActive, setSendActive] = useState(false);
  const [receiveActive, setReceiveActive] = useState(false);
  const [addActive, setAddActive] = useState(false);
  const [exchangeActive, setExchangeActive] = useState(false);
  const [assets] = useState([
    { symbol: "USDT", amount: 12, price: 1 },
    { symbol: "LTC", amount: 3, price: 65 },
    { symbol: "ETH", amount: 4, price: 1600 },
    { symbol: "USDT", amount: 12, price: 1 },
    { symbol: "LTC", amount: 3, price: 65 },
    { symbol: "ETH", amount: 4, price: 1600 },
    { symbol: "USDT", amount: 12, price: 1 },
    { symbol: "LTC", amount: 3, price: 65 },
    { symbol: "ETH", amount: 4, price: 1600 },
  ]);

  const [snapshots] = useState([
    { date: "2025-08-26", value: 3200 },
    { date: "2025-08-27", value: 3300 },
    { date: "2025-08-28", value: 3450 },
    { date: "2025-08-29", value: 3500 },
    { date: "2025-08-30", value: 3720 },
    { date: "2025-08-31", value: 3800 },
  ]);

  let height = 19;
  if (assets.length >= 5) height = 21;
  else height = 23;
  const setters = {
    setSendActive,
    setReceiveActive,
    setAddActive,
    setExchangeActive,
  };
  return (
    <div className="grid min-w-[900px] gap-2">
      <div className="grid grid-cols-[44%_52%] gap-[4%] mb-5">
        <AccountBalance />
        <ActivityBar setters={setters} />
      </div>
      {sendActive && <SendCrypto />}
      {receiveActive && <ReceiveCrypto />}
      {addActive && <AddCrypto />}
      {exchangeActive && <ExchangeCrypto />}
      <div className="grid grid-cols-[52%_44%] gap-[4%] rounded-2xl bg-[var(--component-bg-color)] mt-5">
        <div className="rounded-2xl">
          <BalanceGrowth snapshots={snapshots} height={height} />
        </div>
        <div className="rounded-2xl">
          <PortfolioPie assets={assets} height={height} />
        </div>
      </div>

      <div className="grid gap-2 mt-4">
        <CryptoCard
          index={1}
          name="Bitcoin"
          symbol="btc"
          icon={refreshicon}
          amount={0.25}
          price={60000}
        />
        <CryptoCard
          index={2}
          name="Ethereum"
          symbol="eth"
          icon={refreshicon}
          amount={2}
          price={3500}
        />
      </div>
    </div>
  );
}

function AccountBalance() {
  const [balance, setBalance] = useState(NaN);
  useEffect(() => {
    async function fetchPrice() {
      const price = await getPrice();
      setBalance(price);
    }

    // Fetch immediately on mount
    fetchPrice();

    // Then update every 100s
    const intervalId = setInterval(fetchPrice, 100000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-[var(--component-bg-color)] h-30 rounded-2xl p-6 flex flex-col justify-between text-white shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Balance</h2>
        <button className="p-2 rounded-full hover:bg-white/10">
          <img src={refreshicon} className="w-5 h-5" />
        </button>
      </div>
      <p className="text-2xl font-bold">{currency(balance)}</p>
    </div>
  );
}

const CryptoCard = ({ index, name, symbol, icon, amount, price }) => {
  const usdtValue = (amount * price).toFixed(2);

  return (
    <div className="bg-[var(--component-bg-color)] text-white rounded-xl shadow-md px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-gray-400 font-bold">#{index}</span>
        <img
          src={icon}
          alt={`${name} icon`}
          className="w-8 h-8 rounded-full bg-white p-1"
        />
        <div className="flex flex-col">
          <p className="text-xs text-gray-400 font-bold">
            {symbol.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="text-sm font-medium">
          {amount} {symbol.toUpperCase()}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <p className="text-sm font-medium">
          {amount} {symbol.toUpperCase()}
        </p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="text-sm font-medium">
          {amount} {symbol.toUpperCase()}
        </p>
        <p className="text-sm">${usdtValue} USDT</p>
      </div>
    </div>
  );
};
