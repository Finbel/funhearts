const createButton = document.getElementById("create");

// const color = new RgbColor(
//   Math.random() * 255,
//   Math.random() * 255,
//   Math.random() * 255
// );

const color = new HslColor(Math.random() * 360, 100, 70 + Math.random() * 20);

const colorList = document.getElementById("color-list");

let i = 0;
const interval = setInterval(() => {
  const box = new MagicBox(color);
  box.run();
  color.wander();
}, 20);
