/// <reference types="vite/client" />
declare interface PaintingContext {
  paint: string;
  frame: string;
  position: "up" | "down";
  setPaint: (paint: string) => void;
  setFrame: (frameType: string) => void;
  setPosition: (src: "up" | "down") => void;
}
