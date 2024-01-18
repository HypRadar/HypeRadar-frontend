import { ChainId } from "../types";

const RPC_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "https://bsc-dataseed1.defibit.io",
  [ChainId.TESTNET]: "https://data-seed-prebsc-1-s3.binance.org:8545",
};

export const CHAIN_ID = process.env.REACT_APP_PUBLIC_CHAIN_ID || '97';
export const RPC_URL: string = RPC_URLS[CHAIN_ID];

export const BASE_CHAIN_CONFIG = {
  1: {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  [ChainId.MAINNET]: {
    chainId: 56,
    name: "BSC Mainnet",
    currency: "BNB",
    explorerUrl: "https://bscscan.com",
    rpcUrl: "https://bsc-dataseed.binance.org/",
  },
  [ChainId.TESTNET]: {
    chainId: 97,
    name: "BSC Testnet",
    currency: "tBNB",
    explorerUrl: "https://testnet.bscscan.com",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
};

export const BASE_CHAINS_LIST = Object.values(BASE_CHAIN_CONFIG);

export default RPC_URLS;
