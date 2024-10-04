import type { P5CanvasInstance } from '@p5-wrapper/react';

export class Point {
  x = 0;
  y = 0;
  a = 0;
  dx = 0;
  dy = 0;
  base = 180;
  hue = 0;
  color = '';
  p5: P5CanvasInstance = null;
  neighbor = {
    x: 0,
    y: 0,
  };

  constructor(p5: P5CanvasInstance) {
    this.x = p5.random(p5.width);
    this.y = p5.random(p5.height);
    this.a = p5.random(p5.PI);
    this.dx = p5.cos(this.a);
    this.dy = p5.sin(this.a);
    this.hue = (p5.random(100) + this.base) % 360;
    this.color = p5.color(this.hue, 100, 100, 0.01);
    this.p5 = p5;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x >= this.p5.width) this.dx *= -1;
    if (this.y < 0 || this.y >= this.p5.height) this.dy *= -1;
    this.p5.stroke(this.color);
    this.p5.line(this.x, this.y, this.neighbor.x, this.neighbor.y);
  }
}
