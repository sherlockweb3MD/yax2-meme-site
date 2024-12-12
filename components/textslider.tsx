import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function TextScroller({ text }: { text: string }) {
  const repeatedText = Array(32).fill(text).join(" —  ");
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(-100%, 0)" },
    to: { transform: "translate(0%, 0)" },
    config: { duration: 16000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div key={key} className="w-screen overflow-hidden whitespace-nowrap">
      {/*@ts-ignore*/}
      <animated.div style={scrolling}>{repeatedText}</animated.div>
    </div>
  );
}
