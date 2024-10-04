import { Ribbon as BackgroundRibbon } from './libs/background/ribbon';

export function Ribbon() {
  if ('development' === process.env.NODE_ENV) {
    console.log('development');
  }
  return BackgroundRibbon;
}
