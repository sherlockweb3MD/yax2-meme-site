"use client";
import React from "react";
import { Grandstander } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { motion } from "framer-motion";

const grandstander = Grandstander({ subsets: ["latin"] });

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="A brief description of your website for SEO"
        />
        <meta name="keywords" content="your, website, keywords, here" />
        <meta name="author" content="Your Name or Company" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="A brief description of your website for social media sharing"
        />
        <meta property="og:image" content="URL-to-an-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="A brief description of your website for Twitter"
        />
        <meta name="twitter:image" content="URL-to-an-image.jpg" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Theme color */}
        <meta name="theme-color" content="#ffffff" />
        <title>$PEKKY - To The Moon!</title>
      </head>
      <body
        className={
          "dark:bg-background-dark max-w-[100vw] overflow-x-hidden bg-background-light text-background-dark dark:text-background-light " +
          grandstander.className
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Header />
          {children}
        </motion.div>
      </body>
    </html>
  );
}
