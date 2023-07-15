/// <reference types="vite/client" />
declare interface PaintingContext {
  paint: string;
  frame: string;
  setPaint: (paint: string) => void;
  setFrame: (frameType: string) => void;
}
