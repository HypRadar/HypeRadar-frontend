import { useContext, createContext, useEffect, useState } from "react";
import Http from "../helpers/http";

interface MiscContextType {
  bnbPrice: number | null;
}

const MiscContext = createContext<null | MiscContextType>(null);

export const MiscContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [bnbPrice, setBNBPrice] = useState<number | null>(null);

  const getBNBPrice = async () => {
    try {
      const response = await new Http().get(
        `https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd`
      );
      setBNBPrice(response["binancecoin"].usd);
    } catch (error) {
      console.log("Error getting coingecko data: ", error);
    }
  };

  useEffect(() => {
    if (!bnbPrice) {
      getBNBPrice();
    }
  }, []);

  return (
    <MiscContext.Provider value={{ bnbPrice }}>{children}</MiscContext.Provider>
  );
};

export function useMiscContext() {
  const context = useContext(MiscContext);

  if (!context) {
    throw new Error("useMiscContext must be used within a MiscContextProvider");
  }

  return context;
}
