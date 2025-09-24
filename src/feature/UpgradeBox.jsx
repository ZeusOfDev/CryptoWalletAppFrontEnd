import { ArrowUpRight } from "lucide-react";
import React from "react";
const UpgradeBox = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-fuchsia-800 to-indigo-900 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div>
        <h3 className="text-lg font-semibold mb-2">Upgrade Your Account</h3>
        <p className="text-sm text-gray-300 mb-4">
          Unlock premium features, higher transaction limits, and exclusive
          support with a SuperGrok subscription.
        </p>
        <ul className="text-sm space-y-1 mb-6">
          <li className="flex items-center gap-2">
            ✅ Increased usage quotas
          </li>
          <li className="flex items-center gap-2">
            ✅ Priority customer support
          </li>
          <li className="flex items-center gap-2">✅ Advanced analytics</li>
        </ul>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-[1.02] active:scale-95 transition">
        Upgrade Now <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default UpgradeBox;
