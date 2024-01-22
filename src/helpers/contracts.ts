import { Contract, Provider, Signer } from 'ethers';
import { simpleRpcProvider } from '../utils/web3'
import { getAddress } from '../utils/address';

// ABI
import bep20Abi from '../config/abis/erc20.json'
import repFactoryAbi from '../config/abis/RepFactory.json'
import { FACTORY_CONTRACT } from '../constants/factory';

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer)
}

export const getRepFactoryContract = (signer?: Signer | Provider) => {
  return getContract(repFactoryAbi, getAddress(FACTORY_CONTRACT), signer)
}
