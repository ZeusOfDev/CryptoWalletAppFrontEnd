import React from "react";

export default function Home() {
  return (
    <div className="grid gap-y-[10px] w-[50%]">
      <div className="grid grid-cols-[44%_52%] gap-[4%]">
        <div className="bg-[var(--component-bg-color)] h-30 rounded-2xl"></div>
        <div className="bg-[var(--component-bg-color)] h-30 rounded-2xl"></div>
      </div>

      <div className="bg-[var(--component-bg-color)] h-50 rounded-2xl mb-10"></div>
      
      <div className="bg-[var(--component-bg-color)] h-23 rounded-2xl"></div>
      <div className="bg-[var(--component-bg-color)] h-23 rounded-2xl"></div>
      <div className="bg-[var(--component-bg-color)] h-23 rounded-2xl"></div>
      <div className="bg-[var(--component-bg-color)] h-23 rounded-2xl"></div>

      <div className="bg-[var(--component-bg-color)] h-23 rounded-2xl"></div>
    </div>
  );
}

function AccountBalance() {
  return (
    <div className="w-[44%] bg-[var(--component-bg-color)] rounded-2xl"></div>
  );
}
function ActivityBar() {
  return (
    <div className="w-[52%] bg-[var(--component-bg-color)] rounded-2xl"></div>
  );
}
function WalletInfo() {
  return <div></div>;
}
