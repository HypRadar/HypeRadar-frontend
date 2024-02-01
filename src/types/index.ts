import BigNumber from "bignumber.js";

export enum GAS_PRICE {
  default = "5",
  fast = "6",
  instant = "7",
  testnet = "10",
}

export interface Address {
  97: string;
  56: string;
}

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export interface Project {
  owner?: string;
  name: string;
  address: string;
  logo?: string;
  ticker: string;
  category?: string;
  websiteUrl: string;
  twitterUrl?: string;
  discordUrl?: string;
  telegramUrl?: string;
  youtubeUrl?: string;
  bio?: string;
  coverImage?: string;
  royalty: number;
  isVerified?: boolean;
  marketCap?: BigNumber;
  bnbLocked?: BigNumber;
  usdLocked?: BigNumber;
  price?: BigNumber;
  usdCoinPrice?: BigNumber;
}
