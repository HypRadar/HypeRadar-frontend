import { defaultConfig } from "@web3modal/ethers/react";
import BigNumber from 'bignumber.js';
import { ChainId } from "../types";
import { RPC_URL, CHAIN_ID } from "./network";

export const BIG_TEN = new BigNumber(10)

export const WALLET_CONNECT_ID = process.env.REACT_APP_WALLET_CONNECT_ID || '';

export const METADATA = {
  name: "HypRada",
  description: "",
  url: "https://hyprada.com",
  icons: ["https://hyprada.com/images/logo.png"],
};

export const ETHERS_CONFIG = defaultConfig({
  enableCoinbase: true,
  metadata: METADATA,
  defaultChainId: CHAIN_ID,
  rpcUrl: RPC_URL,
});

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: "https://bscscan.com",
  [ChainId.TESTNET]: "https://testnet.bscscan.com",
};

const BASE_API_URLS = {
  development: "http://127.0.0.1:8000/",
  production: "https://api.hyprada.com/",
  test: "http://127.0.0.1:8000/"
};

export const BASE_API_URL = BASE_API_URLS[process.env.NODE_ENV];

export const JWT_KEY = 'JWT-token';

export const BASE_BSC_SCAN_URL = (BASE_BSC_SCAN_URLS as Record<number, string>)[CHAIN_ID];
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);
export const DEFAULT_GAS_LIMIT = 500000;

export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;

export const INITIAL_ALLOWED_SLIPPAGE = 50;
