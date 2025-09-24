/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import React from "react";
function Alert({ message, type = "success", duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!visible) return null;

  const baseStyle =
    "fixed top-6 right-6 w-96 px-6 py-3 rounded-md text-base flex items-center justify-between gap-3 transition-opacity backdrop-blur-md text-white";
  const typeStyles = {
    success: "bg-green-500 bg-opacity-80 shadow-[0_0_20px_rgba(34,197,94,0.8)]",
    error: "bg-red-500 bg-opacity-80 shadow-[0_0_20px_rgba(239,68,68,0.8)]",
    warning:
      "bg-yellow-400 bg-opacity-80 text-black shadow-[0_0_20px_rgba(250,204,21,0.8)]",
    info: "bg-blue-500 bg-opacity-80 shadow-[0_0_20px_rgba(59,130,246,0.8)]",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type]}`}>
      <div className="flex-1">
        <span className="font-medium">{message}</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="px-2 py-1 hover:opacity-70"
      >
        <X size={20} />
      </button>
    </div>
  );
}

export default Alert;
