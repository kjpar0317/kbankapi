import type { P5CanvasInstance } from '@p5-wrapper/react';
import { Point } from "../core/point";

export class Ribbon {
    points: any[] = [];
    tickSpeed = 10;
    base = 180;
    numPoints = 10;
    maxTicks = 3000;
    ticks = 0;
    p5: P5CanvasInstance = null;

    constructor(p5: P5CanvasInstance) {
        this.p5 = p5;
    }

    init() {
        this.points = []
        this.base = this.p5.random(360);
        this.ticks = 0;

        for (let i = 0; i < this.p5.numPoints; i++) this.points.push(new Point(this.p5));
  
        for (let i = 0; i < this.points.length; i++){
          let j = i;
          while(j == i) j = this.p5.floor(this.p5.random(this.points.length));
          this.points[i].neighbor = this.points[j];
        }
    }

    draw() {
        if (this.ticks > this.p5.maxTicks) return;
        for (let n = 0; n < this.tickSpeed; n++){
          for (let i = 0; i < this.points.length; i++){
            this.points[i].update();
          }
          this.ticks++;
        }
    }

    mouseClicked(){
        this.windowResized();
    }

    windowResized() {
        this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
        this.p5.pixelDensity(1);
        this.p5.clear();
        this.p5.background(0);
        
        this.init();
    }

    setup() {
        this.p5.createCanvas();
        this.p5.colorMode(this.p5.HSB);
        this.windowResized();
        this.p5.blendMode(this.p5.ADD);
        this.p5.strokeWeight(1.5);
    }
}