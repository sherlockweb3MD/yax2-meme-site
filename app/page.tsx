"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const playDuckSound = () => {
    const audio = new Audio("/sounds/duck.mp3");
    audio.play();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex max-w-[100vw] overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full min-h-[calc(100vh-108px)]">
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-between lg:px-36 px-5 xl:px-[220px]">
          <div className="lg:hidden flex mt-4 flex-col items-center justify-center">
            <img
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl active:opacity-[98%] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer size-[220px]"
              src="https://pekk-yweb-site.vercel.app/pekky.svg"
            />
          </div>
          <div className="flex flex-col mt-14 lg:mt-0 text-start items-start justify-center">
            <h1 className="font-bold leading-10 md:leading-normal text-[36px] lg:text-[42px] xl:text-[46px]">
              $PEKKY to the Moon
            </h1>
            <h2 className="font-medium leading-7 mt-1 xl:max-w-[400px] text-xl">
              $PEKKY is a funny cartoon duck mascot. Join the community now and dive into the meme magic!
            </h2>
            <div className="mt-3.5">
              <button className="font-semibold text-lg px-5 text-white active:scale-[0.98] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 py-2.5 rounded-2xl">
                Join now
              </button>
            </div>
          </div>
          <div className="lg:flex hidden flex-col mr-14 items-center justify-center">
            <img
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl active:opacity-[98%] size-[280px] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer"
              src="https://pekk-yweb-site.vercel.app/pekky.svg"
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
