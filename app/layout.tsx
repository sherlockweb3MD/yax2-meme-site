"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { config } from "./config";
import { motion } from "framer-motion";
import { FaTelegram, FaTwitter, FaInstagram } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="$PENGU is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          name="keywords"
          content="duck, funny, crypto, pumpfun, raydium, memecoin, telegram mini app, telegram app, duck app, pekky, pekkycoin"
        />
        <meta name="author" content="$PENGU" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="$PENGU" />
        <meta
          property="og:description"
          content="$PENGU is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          property="og:image"
          content="https://pekk-yweb-site.vercel.app/pekky.png"
        />
        <meta
          property="og:url"
          content="https://pekk-yweb-site.vercel.app/pekky.png"
        />
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="$PENGU" />
        <meta
          name="twitter:description"
          content="$PENGU is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          name="twitter:image"
          content="https://pekk-yweb-site.vercel.app/pekky.png"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Theme color */}
        <meta name="theme-color" content="#fafaf2" />
        <title>$PENGU - Dive into the meme magic!</title>
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" />
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  <img src="https://pekky.xyz/pekky.svg" alt="Logo" className="h-8 w-8" />
                  <span className="font-bold text-xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    $PENGU
                  </span>
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Home
                </a>
                <a href="/tokenomics" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Tokenomics
                </a>
                <a href="/roadmap" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Roadmap
                </a>
                <div className="flex items-center space-x-4">
                  <a
                    href={config.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0088cc] transition-colors"
                  >
                    <FaTelegram size={20} />
                  </a>
                  <a
                    href={config.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={config.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gradient-to-b from-yellow-50 to-white border-t border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">About $PENGU</h3>
                <p className="text-gray-600">
                  The most quacktastic memecoin on Solana. Join our community and be part of the next big thing in crypto!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/tokenomics" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a href="/roadmap" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={config.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0088cc] transition-colors"
                  >
                    <FaTelegram size={24} />
                  </a>
                  <a
                    href={config.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={config.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-yellow-100 text-center text-gray-600">
              <p>© {new Date().getFullYear()} $PENGU. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
