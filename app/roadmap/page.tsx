"use client";
import React from "react";
import { motion } from "framer-motion";
import config from "@/config";
import { FaRocket, FaUsers, FaGamepad, FaExchangeAlt, FaChartLine } from "react-icons/fa";

export default function RoadmapPage() {
  const phases = config.roadmapPage.phases.map((phase, index) => ({
    ...phase,
    icon: [FaRocket, FaUsers, FaGamepad, FaExchangeAlt][index],
  }));

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
            {config.roadmapPage.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {config.roadmapPage.description}
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200" />

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Phase Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-white p-4 rounded-full border-4 border-yellow-200 shadow-lg">
                    <phase.icon className="text-2xl text-yellow-500" />
                  </div>
                </div>

                {/* Phase Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Phase {index + 1}
                    </h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                          className="flex items-center space-x-2 text-gray-600"
                        >
                          <span className="text-yellow-500">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our growing community and help shape the future of $PENGU.
            Together, we'll create something amazing!
          </p>
          <a
            href={config.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Join Our Community
            <FaUsers className="ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
