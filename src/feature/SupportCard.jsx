import { MessageCircle, HelpCircle, ChevronRight } from "lucide-react";
import React from "react";
const SupportCard = () => {
  return (
    <div className="w-full">
      {/* Heading outside card background */}
      <h2 className="text-lg font-semibold text-white mb-3">Need help?</h2>

      <div className="w-full bg-emerald-500/10 rounded-2xl shadow p-2">
        <div className="divide-y divide-emerald-500/20">
          {/* Chat with support */}
          <button className="flex items-center justify-between w-full py-3 hover:bg-emerald-500/20 rounded-xl px-3 transition">
            <div className="flex items-center gap-3">
              <MessageCircle className="text-emerald-400" size={20} />
              <span className="text-gray-100 text-sm font-medium">
                Chat with support
              </span>
            </div>
            <ChevronRight className="text-gray-300" size={18} />
          </button>

          {/* View support center */}
          <button className="flex items-center justify-between w-full py-3 hover:bg-emerald-500/20 rounded-xl px-3 transition">
            <div className="flex items-center gap-3">
              <HelpCircle className="text-emerald-400" size={20} />
              <span className="text-gray-100 text-sm font-medium">
                View support center
              </span>
            </div>
            <ChevronRight className="text-gray-300" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
