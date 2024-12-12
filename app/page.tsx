"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex max-w-[100vw] overflow-x-hidden justify-center items-center h-[calc(100vh-108px)]">
        <section className="w-full flex flex-row items-center justify-between px-16">
          <div className="flex flex-col text-start items-start justify-center">
            <h1 className="font-bold text-[46px]">$PEKKY to the Moon</h1>
            <h2 className="font-medium leading-7 text-xl">
              Basic description whatever you
              <br /> like lorem ipsum dolor sit amet...
            </h2>
            <div className="mt-4">
              <button className="font-semibold text-lg px-5 text-white active:scale-[0.98] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 py-2.5 rounded-2xl">
                Buy now
              </button>
            </div>
          </div>
          <div>
            <img className="rounded-3xl" src="http://placehold.co/512" />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
