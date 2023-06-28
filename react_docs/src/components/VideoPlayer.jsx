import { useState, useEffect, useRef } from "react";

export default function VideoPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
  }, [isPlaying]);

  return (
    <>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-slate-950 text-slate-50 p-2 w-20 mb-10"
      >
        {isPlaying ? "Play" : "Pause"}
      </button>

      <video ref={ref} src={src} loop playsInline />
    </>
  );
}
