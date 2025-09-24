/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PortfolioPie from "../feature/PieChart";
import refreshicon from "../assets/refreshicon.svg";
import ActivityBar from "../feature/ActivityBar";
import AxiosApi from "../utils/Interceptor";
import { serverAddress } from "../utils/Reusevariable";
//import Big from "big.js";
import UpgradeBox from "../feature/UpgradeBox";
import CryptoTable from "../feature/CryptoTable";
import SupportCard from "../feature/SupportCard";
import SearchBar from "../feature/SearchBar";
import SendCrypto from "../feature/SendCrypto";
import ReceiveCrypto from "../feature/ReceiveCrypto";
import AddCrypto from "../feature/AddCrypto";
import ExchangeCrypto from "../feature/ExchangeCrypto";

export default function Home() {
  const [sendActive, setSendActive] = useState(false);
  const [receiveActive, setReceiveActive] = useState(false);
  const [addActive, setAddActive] = useState(false);
  const [exchangeActive, setExchangeActive] = useState(false);
  const [assets, setAssets] = useState([]);
  const [totalBalance, setTotalBalance] = useState(NaN);

  const getUserWallet = async () => {
    try {
      const res = await AxiosApi.get(`${serverAddress}/getuserwallets`);
      if (res.status === 200 && res.data?.userBalance && res.data?.listWallet) {
        setTotalBalance(res.data.userBalance);
        setAssets(res.data.listWallet);
      }
    } catch (error) {
      console.error("Error fetching user wallet:", error);
    }
  };

  useEffect(() => {
    getUserWallet();
    const interval = setInterval(getUserWallet, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
    <div className="grid min-w-[900px] w-[60%] gap-2">
      <div className="grid grid-cols-[44%_52%] gap-[4%] mb-5">
        <AccountBalance totalBalance={totalBalance} refreshBalance={getUserWallet} />
        <ActivityBar setters={setters} />
      </div>
      {sendActive && <SendCrypto close={setSendActive} />}
      {receiveActive && <ReceiveCrypto close={setReceiveActive} />}
      {addActive && <AddCrypto close={setAddActive} />}
      {exchangeActive && <ExchangeCrypto close={setExchangeActive} />}
      <div className="grid grid-cols-[40%_56%] gap-[4%] rounded-2xl my-4">
        <div className="rounded-2xl bg-[var(--component-bg-color)]">
          <UpgradeBox />
        </div>
        <div className="rounded-2xl bg-[var(--component-bg-color)]">
          <PortfolioPie assets={assets} height={height} />
        </div>
      </div>
      <SearchBar />
      <CryptoTable />
      <SupportCard />
    </div>
  );
}

function AccountBalance({ totalBalance, refreshBalance }) {
  return (
    <div className="bg-[var(--component-bg-color)] h-28 rounded-2xl p-6 flex flex-col justify-between text-white shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Balance</h2>
        <button
          onClick={refreshBalance}
          className="p-2 rounded-full hover:bg-white/10"
        >
          <img src={refreshicon} className="w-5 h-5" alt="Refresh" />
        </button>
      </div>
      <p className="text-2xl font-bold">{totalBalance}</p>
    </div>
  );
}