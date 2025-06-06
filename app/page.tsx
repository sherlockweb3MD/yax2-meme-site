"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import config, { tokenCA, telegramLink, twitterLink } from "@/config";
import toast from "react-hot-toast";
import { FaCopy, FaTelegram, FaTwitter, FaChartLine } from "react-icons/fa";

export default function HomePage() {
  const [price, setPrice] = useState("0.00000000");
  const [marketCap, setMarketCap] = useState("$0");
  const [holders, setHolders] = useState("0");

  function playDuckSound() {
    const audio = new Audio("/sounds/duck.mp3");
    audio.play();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="flex flex-col max-w-[100vw] w-screen overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full">
        {/* Hero Section */}
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-start lg:justify-between lg:px-[111px] px-5 xl:px-[190px] min-h-[50vh] lg:min-h-[70vh] xl:min-h-[calc(100vh-108px)] bg-gradient-to-b from-yellow-50 to-white">
          <div className="lg:hidden flex mt-[52px] flex-col items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl cursor-pointer size-[220px]"
              src="https://pekky.xyz/pekky.svg"
            />
          </div>
          <div className="flex flex-col mt-[52px] md:ml-9 lg:mt-0 text-start items-start justify-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-bold leading-10 md:leading-normal text-[36px] lg:text-[42px] xl:text-[46px] bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
            >
              {config.homeMainSection.title}
            </motion.h1>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-medium leading-7 mt-1 md:max-w-[400px] text-xl text-gray-700"
            >
              {config.homeMainSection.description
                .split("\n")
                .map((line: any, index: any) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </motion.h2>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-row items-center justify-center space-x-4"
            >
              {config.homeMainSection.buttons.map(
                (button: any, index: number) => (
                  <a
                    key={index}
                    href={button.href || "about:blank"}
                    className="font-semibold px-6 border-2 border-yellow-500 shadow-[4px_4px_0_#9e782c] active:shadow-[2px_2px_0_#9e782c] active:translate-x-[2px] active:translate-y-[2px] text-white active:scale-[0.98] transition-all ease-linear duration-100 hover:bg-yellow-500/90 bg-yellow-500 text-[17px] py-3 rounded-xl flex items-center gap-2"
                  >
                    {button.text}
                    <FaChartLine />
                  </a>
                )
              )}
            </motion.div>
          </div>
          <div className="lg:flex hidden flex-col md:mr-9 items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl cursor-pointer size-[290px]"
              src="https://pekky.xyz/pekky.svg"
            />
          </div>
        </section>

        {/* Token Stats Section */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200"
              >
                <h3 className="text-lg font-semibold text-gray-600">Price</h3>
                <p className="text-3xl font-bold text-yellow-600 mt-2">${price}</p>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200"
              >
                <h3 className="text-lg font-semibold text-gray-600">Market Cap</h3>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{marketCap}</p>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200"
              >
                <h3 className="text-lg font-semibold text-gray-600">Holders</h3>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{holders}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dexscreener Chart Section */}
        <section className="w-full py-8 bg-white flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            Live Chart <FaChartLine className="text-yellow-500" />
          </h2>
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden border-2 border-yellow-200 shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              Dexscreener is currently blocked. Please visit the chart directly:
            </p>
            <a
              href={`https://dexscreener.com/solana/${tokenCA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
            >
              View Chart on Dexscreener
              <FaChartLine className="ml-2" />
            </a>
          </div>
        </section>

        {/* Contract Address Section */}
        {tokenCA && (
          <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex flex-col items-center justify-center"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contract Address</h2>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border-2 border-yellow-200 shadow-lg">
                  <code className="text-gray-700 font-mono">{tokenCA}</code>
                  <button
                    onClick={() => {
                      navigator.clipboard
                        .writeText(tokenCA)
                        .then(() => {
                          toast.success("Copied to clipboard!");
                        })
                        .catch((err) => {
                          toast.error("Could not copy");
                        });
                    }}
                    className="p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                  >
                    <FaCopy className="text-yellow-500" />
                  </button>
                </div>
                <div className="mt-8 flex space-x-4">
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0088cc] text-white rounded-xl hover:bg-[#0077b3] transition-colors"
                  >
                    <FaTelegram size={24} />
                  </a>
                  <a
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
    </motion.div>
  );
}
//:end
