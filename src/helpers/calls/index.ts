import { TransactionResponse, Contract } from 'ethers'
import get from 'lodash/get'
import { getGasPrice } from '../../utils'

export function useContractCall() {
  const gasPrice = getGasPrice()

  /**
   * Perform a contract call
   * @param contract Used to perform the call
   * @param methodName The name of the method called
   * @param methodArgs An array of arguments to pass to the method
   * @param overrides An overrides object to pass to the method.
   * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
   */
  const contractCall = async (
    contract: Contract,
    methodName: string,
    methodArgs: any[] = [],
    overrides = {},
  ): Promise<TransactionResponse> => {
      const contractMethod = get(contract, methodName)

      const tx = await contractMethod(
        ...methodArgs,
        { ...overrides, gasPrice },
      )
      return tx
    }

  return { contractCall }
}
