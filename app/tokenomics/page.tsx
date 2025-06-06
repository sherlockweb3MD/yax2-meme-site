"use client";
import React from "react";
import { motion } from "framer-motion";
import config from "@/config";

export default function TokenomicsPage() {
  const tokenomicsData = [
    {
      title: "Total Supply",
      value: "1,000,000,000",
      description: "Total number of $PENGU tokens",
    },
    {
      title: "Initial Liquidity",
      value: "40%",
      description: "Locked for 1 year",
    },
    {
      title: "Community Rewards",
      value: "30%",
      description: "For staking and community incentives",
    },
    {
      title: "Team & Development",
      value: "15%",
      description: "Vested over 2 years",
    },
    {
      title: "Marketing",
      value: "10%",
      description: "For growth and partnerships",
    },
    {
      title: "Exchange Listings",
      value: "5%",
      description: "Reserved for future listings",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
            {config.tokenomicsPage.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {config.tokenomicsPage.description}
          </p>
        </motion.div>

        {/* Tokenomics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">{item.value}</p>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Token Distribution</h2>
          <p className="text-gray-600 mb-6">
            Our token distribution is designed to ensure long-term sustainability and community growth.
            The majority of tokens are allocated to liquidity and community rewards to maintain a healthy
            ecosystem and incentivize participation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Locked liquidity for price stability</li>
                <li>• Community-driven rewards system</li>
                <li>• Transparent token distribution</li>
                <li>• Long-term development focus</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Security Measures</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Smart contract audited</li>
                <li>• Locked team tokens</li>
                <li>• Transparent vesting schedule</li>
                <li>• Community governance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
