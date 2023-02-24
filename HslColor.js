const HslColor = class {
  hue = 0;
  saturation = 100;
  lightness = 60;

  constructor(hue, saturation, lightness) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.degree = Math.random() - 0.5;
  }

  wander = () => {
    this.hue += Math.sin(this.degree) * 1.2;
    this.lightness += Math.cos(this.degree) * 0.5;
    this.degree += Math.random() - 0.5;
  };

  getColor = () => {
    return `hsl(${this.getHueComponent(this.hue).toFixed(
      2
    )},100%,${this.getLightnessComponent(this.lightness).toFixed(2)}%)`;
  };

  getHue = () => this.getHueComponent(this.hue);
  getLightness = () => this.getLightnessComponent(this.lightness);

  getHueComponent = (component) => {
    const value = Math.abs(component);
    if (Math.floor(value / 360) % 2 === 0) {
      return value % 360;
    } else {
      return 360 - (value % 360);
    }
  };

  getLightnessComponent = (component) => {
    const value = Math.abs(component);
    if (Math.floor(value / 20) % 2 === 0) {
      return 70 + (value % 20);
    } else {
      return 70 + (20 - (value % 20));
    }
  };
};
