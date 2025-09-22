const icons = import.meta.glob("../assets/cryptoIcon/*.svg", { eager: true, import: "default" });

const cryptoIcons = {};
for (const path in icons) {
  const fileName = path.split("/").pop().replace(".svg", "").toLowerCase();
  cryptoIcons[fileName] = icons[path];
}

export default cryptoIcons;
