export const config = {
  redLineText: "PENGU IS THE NEXT 100X GEM",
  homeMainSection: {
    title: "PENGU",
    description: "The most pengu token on Solana",
    buttons: [
      {
        text: "Buy Now",
        href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=YOUR_TOKEN_ADDRESS",
      },
      {
        text: "Chart",
        href: "https://dexscreener.com/solana/YOUR_TOKEN_ADDRESS",
      },
    ],
  },
  tokenomicsPage: {
    title: "Tokenomics",
    description: "Total Supply: 1,000,000,000 PENGU",
  },
  roadmapPage: {
    title: "Roadmap",
    description: "Our journey to success",
    phases: [
      {
        title: "Phase 1",
        items: [
          "Website Launch",
          "Community Building",
          "Social Media Presence",
        ],
      },
      {
        title: "Phase 2",
        items: [
          "Marketing Campaign",
          "Partnership Announcements",
          "Exchange Listings",
        ],
      },
      {
        title: "Phase 3",
        items: [
          "Major Exchange Listings",
          "Ecosystem Expansion",
          "Global Marketing",
        ],
      },
    ],
  },
  telegramLink: "https://t.me/pengu_sol",
  twitterLink: "https://twitter.com/pengu_sol",
  instagramLink: "https://instagram.com/pengu_sol",
} as const;

export type Config = typeof config; 