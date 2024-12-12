"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Tokenomics() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col max-w-[100vw] overflow-x-hidden justify-center items-center h-[calc(100vh-108px)]">
        <section className="w-full flex flex-row items-center justify-center px-16">
          <div className="flex flex-col text-center items-center justify-start">
            <h1 className="font-bold text-[40px]">Tokenomics</h1>
            <h2 className="font-medium leading-7 text-xl">Pekky tokenomics</h2>
          </div>
        </section>
        <section className="grid grid-cols-3 w-full max-w-screen-md mt-10 gap-2 grid-rows-2">
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] w-full rounded-2xl">
            <h3 className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Community Rewards&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">%20</h2>
            </h3>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <h3 className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Marketing&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">%35</h2>
            </h3>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <h3 className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Blablabla&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">%55</h2>
            </h3>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <h3 className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Bablalbal&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">%55</h2>
            </h3>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <h3 className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Bllablalba&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">%55</h2>
            </h3>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <h3 className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Bblalbla&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">%55</h2>
            </h3>
            <p>Card description</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
