const RgbColor = class {
  red = 0;
  green = 0;
  blue = 0;
  degree = 0;
  zComposite = 0;

  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.degree = Math.random() - 0.5;
    this.zComposite = Math.random() - 0.5;
  }

  wander = () => {
    this.red += Math.sin(this.degree);
    this.green += Math.cos(this.degree);
    this.blue += Math.sin(this.zComposite);
    this.degree += Math.random() - 0.5 * 0.5;
    this.zComposite += Math.random() - 0.5 * 0.5;
  };

  getColor = () => {
    return `rgb(${this.getColorComponent(this.red).toFixed(
      2
    )},${this.getColorComponent(this.green).toFixed(
      2
    )},${this.getColorComponent(this.blue).toFixed(2)})`;
  };

  getRed = () => this.getColorComponent(this.red);
  getGreen = () => this.getColorComponent(this.green);
  getBlue = () => this.getColorComponent(this.blue);

  getColorComponent = (component) => {
    const value = Math.abs(component);
    if (Math.floor(value / 255) % 2 === 0) {
      return value % 255;
    } else {
      return 255 - (value % 255);
    }
  };
};
