import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import {
  getBep20Contract,
  getRepFactoryContract
} from './contracts'
import { getLibrary } from '../utils/web3';

function getProviderOrSigner(signer: JsonRpcSigner): Web3Provider | JsonRpcSigner {
  return signer ? signer : getLibrary()
}

export const useERC20 = (address: string, provider = null) => {
  const signer = provider ? new Web3Provider(provider) : undefined;
  
  return getBep20Contract(address, signer);
}

export const useREPFactory = (rpcSigner = null) => {
  const signer = getProviderOrSigner(rpcSigner);
  console.log("Whooo:: ", signer);

  return getRepFactoryContract(signer);
};
