"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col mt-[108px] lg:mt-0 max-w-[100vw] overflow-x-hidden justify-center items-center h-[calc(100vh-108px)]">
        <section className="w-full flex mt-[240px] md:mt-0 flex-row items-center justify-center px-16">
          <div className="flex flex-col text-center items-center justify-start">
            <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px]">
              OUR ROADMAP
            </h1>
            <h2 className="font-medium leading-7 text-lg xl:text-xl">
              This roadmap outlines our journey to exciting milestones,<br/> including listings on major exchanges. Let's pave the way for<br/> innovative developments.
            </h2>
          </div>
        </section>
        <section className="grid px-4 pb-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-full max-w-screen-md mt-8 lg:mt-10 gap-2 grid-rows-2">
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] w-full rounded-2xl">
            <div className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Chapter 1&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">#1</h2>
            </div>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <div className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Chapter 2&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">#2</h2>
            </div>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <div className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Chapter 3&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">#3</h2>
            </div>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <div className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Chapter 4&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">#4</h2>
            </div>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <div className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Chapter 5&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">#5</h2>
            </div>
            <p>Card description</p>
          </div>
          {/* Card */}
          <div className="bg-[#f6f3c9] p-[19px] rounded-2xl">
            <div className="tracking-[-0.020em] flex flex-row items-center text-lg font-medium">
              Chapter 6&nbsp;
              <h2 className="text-xl font-semibold tracking-normal">#6</h2>
            </div>
            <p>Card description</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
