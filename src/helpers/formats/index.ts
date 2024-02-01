import BigNumber from "bignumber.js";
import { BIG_TEN, COIN_SLOPE } from "../../constants";

export const getCoinBNBCoinPrice = (totalSupply: BigNumber) => {
  const totalSupplyInNumber = getBalanceAmount(totalSupply);
  const m = 2; // slope
  return COIN_SLOPE.multipliedBy(totalSupplyInNumber.pow(m));
};

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
};

export const formatToUSD = (amount: BigNumber, usdValue: number) => {
  return amount.multipliedBy(new BigNumber(usdValue));
};
