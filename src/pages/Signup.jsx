import React from "react";
import envirohost from "../assets/envirohost1.svg";
import eth_bubble from "../assets/singgleethicon.svg";
import { handleSubmitForm } from "../services/HandleSubmitForm";
import FlowerLogo from "../feature/FlowerLogo";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0B0B12]">
      <div className="md:w-1/3 w-full flex items-center justify-center relative overflow-hidden min-h-[400px] md:min-h-screen">
        <div className="bg-[#0B0B12]">
          <img
            src={envirohost}
            alt="crypto illustration"
            className="absolute left-0 bottom-0 right pointer-events-none select-none"
          />
        </div>

        <div className="absolute top-10 left-16 z-10 flex flex-col gap-8">
          <CoinIcon w="14" h="14" />
        </div>
        <div className="absolute top-32 left-40 z-10">
          <CoinIcon w="13.5" h="13.5" />
        </div>
        <div className="absolute top-56 left-24 z-10">
          <CoinIcon w="13" h="13" />
        </div>
        <div className="absolute bottom-50 left-10 z-10">
          <CoinIcon w="11" h="11" />
        </div>
        {/* Bottom coins */}
        <div className="absolute top-24 right-10 z-10 flex gap-4">
          <CoinIcon />
        </div>
        <div className="absolute top-60 right-15 z-10 flex gap-4">
          <CoinIcon w="12" h="12" />
        </div>
        <div className="absolute bottom-20 left-15 z-10 flex gap-4">
          <CoinIcon w="10" h="10" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center py-16 px-4 bg-transparent">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="flex items-center mb-8">
            <FlowerLogo />
            <span className="ml-3 text-3xl font-bold text-white">Crypto</span>
          </div>
          {/* Form */}
          <form
            method="post"
            className="space-y-6"
            onSubmit={(e) => handleSubmitForm(e)}
            id="signup"
          >
            <div>
              <label className="block text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                required
                className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">
                Username
              </label>
              <input
                name="username"
                id="username"
                type="text"
                autoComplete="email"
                required
                className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="password">
                Confirm password
              </label>
              <input
                name="confirm_password"
                id="confirm_password"
                type="password"
                autoComplete="current-password"
                required
                className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
              />
            </div>

            <div className="flex items-center justify-between text-[#A1A1B5] text-sm"></div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#A259FF] to-[#38CFFF] text-white font-semibold text-lg shadow-md hover:opacity-90 transition"
            >
              Sign up
            </button>
          </form>
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
        className={`w-${w} h-${h} drop-shadow-lg shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] rounded-full`}
      />
    </div>
  );
}

