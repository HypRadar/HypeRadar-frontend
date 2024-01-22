import { useWeb3Context } from '../context/Web3Context';
import {
  getBep20Contract,
  getRepFactoryContract
} from './contracts'


export const useERC20 = (address: string) => {  
  const { userSigner } = useWeb3Context();
  return getBep20Contract(address, userSigner);
}

export const useREPFactory = () => {
  const { userSigner } = useWeb3Context();
  return getRepFactoryContract(userSigner);
};
