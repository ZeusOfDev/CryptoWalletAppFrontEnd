import icons from "../utils/icons.js";
import { cryptoDict } from "../utils/CryptoDict.js";

export default function CryptoInformation({ name }) {
  var iconName = name.toLowerCase() + "icon";
  return (
    <>
      <img src={icons[iconName]} alt={name} className="w-6 h-6" />
      <span>{cryptoDict[name].name + " " + cryptoDict[name].symbol}</span>
    </>
  );
}
