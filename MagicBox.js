const MILLISECOND_INTERVAL = 50;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 3;

const container = document.getElementById("container");

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

document.body.addEventListener("mouseleave", (event) => {
  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 3;
});

const getHeartSvg = () => {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconSvg.setAttribute("viewBox", "0 0 24 24");
  iconPath.setAttribute(
    "d",
    "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  );
  iconSvg.append(iconPath);
  return iconSvg;
};

const getNewPosition = (x, y, degree) => {
  return {
    x: (x += 1.7 * Math.sin(degree)),
    y: (y += 1.7 * Math.cos(degree)),
    degree: (degree += Math.random() * 0.5 - 0.25),
  };
};

const MagicBox = class {
  downwardsSpeed = 0;
  factory = null;
  startLife = 100;
  life = 100;
  x = 0;
  y = 0;
  degree = 0;
  box = null;
  heart = null;

  constructor(color) {
    this.box = document.createElement("div");
    this.box.classList.add("heart");
    this.heart = getHeartSvg();
    this.heart.setAttribute("fill", color.getColor());
    this.box.append(this.heart);
    this.life = Math.random() * 200 + 50;
    this.startLife = this.life;
    this.degree = -Math.PI / 4 + (Math.random() * Math.PI) / 2;
    this.factory = document.createElement("div");
    this.factory.classList.add("factory");
    this.factory.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    container.appendChild(this.factory);
    this.factory.appendChild(this.box);
  }

  run = () => {
    const interval = setInterval(() => {
      const { x, y, degree } = getNewPosition(this.x, this.y, this.degree);
      this.x = x;
      this.y = y - this.downwardsSpeed;
      this.downwardsSpeed += (MILLISECOND_INTERVAL / 100000) * 9.82;
      this.degree = degree;
      this.box.style.transform = `translate(${this.x}px, ${this.y}px) scale(${
        (this.life + 100) / this.startLife + 1
      })`;
      this.life -= 1;
      if (this.life < 0) {
        container.removeChild(this.factory);
        clearInterval(interval);
      }
    }, MILLISECOND_INTERVAL);
  };
};
