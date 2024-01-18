import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import HttpProvider from 'web3-providers-http'
import { RPC_URL } from '../constants/network';


const POLLING_INTERVAL = 12000;

export const simpleRpcProvider = new JsonRpcProvider(RPC_URL);

export const getLibrary = () => {
  
  const httpProvider = new HttpProvider(RPC_URL);

  // @ts-ignore
  const web3NoAccount = new Web3Provider(httpProvider);
  web3NoAccount.pollingInterval = POLLING_INTERVAL;
  return web3NoAccount;
}
