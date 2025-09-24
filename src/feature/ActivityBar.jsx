/* eslint-disable react/prop-types */
import { Send, Download, PlusCircle, Repeat } from "lucide-react";

import React from "react";
function ActivityBar({setters}) {
  function setAllFalse() {
    Object.values(setters).forEach(setter => setter(false));
  }
  return (
    <div className="bg-[var(--component-bg-color)] h-30 rounded-2xl flex items-center justify-evenly justify-center gap-4 text-white shadow-lg">
      <button className="flex flex-col items-center hover:text-purple-400" onClick={() => {setAllFalse(); setters.setSendActive(true);}}>
        <Send className="w-6 h-6 mb-1" />
        <span className="text-sm">Send</span>
      </button>
      <button className="flex flex-col items-center hover:text-purple-400" onClick={() => {setAllFalse(); setters.setReceiveActive(true);}}>
        <Download className="w-6 h-6 mb-1" />
        <span className="text-sm">Receive</span>
      </button>
      <button className="flex flex-col items-center hover:text-purple-400" onClick={() => {setAllFalse(); setters.setAddActive(true);}}>
        <PlusCircle className="w-6 h-6 mb-1" />
        <span className="text-sm">Add</span>
      </button>
      <button className="flex flex-col items-center hover:text-purple-400" onClick={() => {setAllFalse(); setters.setExchangeActive(true);}}>
        <Repeat className="w-6 h-6 mb-1" />
        <span className="text-sm">Exchange</span>
      </button>
    </div>
  );
}
export default ActivityBar;