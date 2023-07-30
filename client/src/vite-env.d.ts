/// <reference types="vite/client" />
declare interface PaintingContext {
  paint: string;
  frame: string;
  position: "up" | "down";
  loop: boolean;
  setPaint: (paint: string) => void;
  setFrame: (frameType: string) => void;
  setPosition: (src: "up" | "down") => void;
  setLoop: (shoudLoop: boolean) => void;
}
declare interface LoadingContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

declare interface SliderContext {
  index: number;
  setIndex: (index: number) => void;
  lastIndex: boolean;
  setLastIndex: (isLastIndex: boolean) => void;
  startSliding: boolean;
  setStartSliding: (isSliding: boolean) => void;
  slidePosition: "right" | "left";
  setSlidePosition: (position: "right" | "left") => void;
}
declare interface PlayContext {
  play: boolean;
  setPlay: (isPlaying: boolean) => void;
  startAudio: boolean;
  setStartAudio: (start: boolean) => void;
  ambientLightRef: React.MutableRefObject<AmbientLight>;
}
declare interface Paint {
  _id: string;
  name: string;
  frame: string;
  position: "up" | "down";
  aiVoice: string;
  description: string;
  paint: string;
}

declare interface PaintsResponse {
  success: boolean;
  data?: Array<Paint>;
  message?: string;
}
