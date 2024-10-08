import { P5CanvasInstance } from '@p5-wrapper/react';
import { Ribbon as BackgroundRibbon } from './libs/background/ribbon';

export function Ribbon(p5: P5CanvasInstance) {
  if ('development' === process.env.NODE_ENV) {
    console.log('development');
  }
  return new BackgroundRibbon(p5);
}
