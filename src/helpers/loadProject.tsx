import { useState } from "react";
import Http from "./http";
import { Project } from "../types";
import { rawProjectSerializer } from "../utils/serializers";
import { multicallProvider } from "../utils/web3";
import { getBep20Contract } from "./contracts";
import { formatToUSD, getBalanceAmount, getCoinBNBCoinPrice } from "./formats";
import BigNumber from "bignumber.js";
import { useMiscContext } from "../context/MiscContextProvider";
import { fetchBalance } from "./calls/getBalance";

export const useLoadProject = () => {
  const [isLoading, setLoader] = useState(true);
  const [project, setProject] = useState<Project | null>();
  const { bnbPrice } = useMiscContext();

  const loadProject = async (address: string) => {
    try {
      const url = `/projects/${address}`;

      const rawProjectDetails = await new Http().get(url);
      const serializedProject = rawProjectSerializer(rawProjectDetails);

      setProject({ ...project, ...serializedProject });
      setLoader(false);
    } catch (error) {
      console.error("Error loading project: ", error);
      setLoader(false);
    }
  };

  const loadOnChainData = async (address: string) => {
    try {
      const refERC20Contract = getBep20Contract(address, multicallProvider);
      const calls = [
        refERC20Contract.symbol(),
        refERC20Contract.name(),
        refERC20Contract.totalSupply(),
        refERC20Contract.projectRoyaltyInBPS(),
      ];

      const projectBalance = await fetchBalance(address);
      const [symbol, name, totalSupply, projectRoyaltyInBPS] =
        await Promise.all(calls);

      const newProjectData = {
        name,
        ticker: symbol,
        royalty: projectRoyaltyInBPS.toString(),
      };
      setProject((prevProjectVal) => {
        return { ...prevProjectVal, ...newProjectData };
      });

      if (bnbPrice) {
        const coinPriceInBNB = getCoinBNBCoinPrice(new BigNumber(totalSupply));

        const coinPrice = formatToUSD(coinPriceInBNB, bnbPrice);
        const usdLocked = formatToUSD(
          getBalanceAmount(projectBalance),
          bnbPrice
        );

        const marketCap = getBalanceAmount(
          new BigNumber(totalSupply)
        ).multipliedBy(coinPrice);
        const priceData = {
          marketCap: marketCap,
          usdLocked,
          bnbLocked: projectBalance,
          price: coinPriceInBNB,
          usdCoinPrice: coinPrice,
        };
        setProject((prevProjectVal2: Project) => {
          return { ...prevProjectVal2, ...priceData };
        });
      }
    } catch (error) {
      console.error("Error loading onchain data: ", error);
    }
  };

  return { isLoading, project, loadProject, loadOnChainData };
};
