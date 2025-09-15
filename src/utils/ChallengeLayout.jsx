import React, { useState } from "react";
import envirohost from "../assets/envirohost1.svg";
import FlowerLogo from "../feature/FlowerLogo";
import eth_bubble from "../assets/singgleethicon.svg";
import { Outlet} from "react-router-dom";
import Alert from "../feature/Alert";
export default function ChallengeLayout() {
  const [alert, setAlerted] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("failed");
  return (
    
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0B0B12]">
      {alert && <Alert message={message} type={type} />}
      <div className="md:w-1/3 w-full flex items-center justify-center relative overflow-hidden min-h-[400px] md:min-h-screen">
        <div className="bg-[#0B0B12]">
          <img
            src={envirohost}
            alt="crypto illustration"
            className="absolute left-0 bottom-0 right pointer-events-none select-none"
          />
        </div>

        <div className="absolute top-10 left-16 z-10 flex flex-col gap-8">
          <CoinIcon w="56" h="56" />
        </div>
        <div className="absolute top-32 left-40 z-10">
          <CoinIcon w="54" h="54" />
        </div>
        <div className="absolute top-56 left-24 z-10">
          <CoinIcon w="52" h="52" />
        </div>
        <div className="absolute bottom-50 left-10 z-10">
          <CoinIcon w="44" h="44" />
        </div>
        {/* Bottom coins */}
        <div className="absolute top-24 right-10 z-10 flex gap-4">
          <CoinIcon w="44" h="44" />
        </div>
        <div className="absolute top-60 right-15 z-10 flex gap-4">
          <CoinIcon w="48" h="48" />
        </div>
        <div className="absolute bottom-20 left-15 z-10 flex gap-4">
          <CoinIcon w="40" h="40" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center py-16 px-4 bg-transparent">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="flex items-center mb-8">
            <FlowerLogo />
            <span className="ml-3 text-3xl font-bold text-white">Crypto</span>
          </div>setAlerted
          <Outlet context={{ setAlerted, setMessage, setType }}/>
        </div>
      </div>
    </div>
  );
}
// Coin icon with optional count badge
function CoinIcon({ w, h }) {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={eth_bubble}
        alt="coin"
        className={`drop-shadow-lg shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] rounded-full`}
        style={{ width: `${w}px`, height: `${h}px` }}
      />
    </div>
  );
}