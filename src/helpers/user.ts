import { BrowserProvider, Eip1193Provider } from "ethers";

import { signingMessage } from "../utils";
import Http from './http';
import { JWT_KEY } from "../constants";

export const onSignMessage = async (
  walletProvider: Eip1193Provider | undefined
): Promise<
  | {
      signature: string;
      message: string;
    }
  | undefined
> => {
  if (!walletProvider) return;
  try {
    const provider = new BrowserProvider(walletProvider);
    const signer = await provider.getSigner();
    const message = signingMessage();
    const signature = await signer?.signMessage(message);
    return { signature, message };
  } catch (err) {
    console.log("Error: ", err);
  }
};

const fetchWithJwtClaiming = async (
  payload: { signature: string; message: string; address: string },
  url: string
) => {
  try {
    const result = await new Http().post(url, payload);
    return result["access_token"];
  } catch (error) {
    console.error("Error in fetchWithJwtClaiming:", error);
    throw error;
  }
};

export const handleJwtClaiming = async (
  walletProvider: Eip1193Provider | undefined,
  address: string
) => {
  const response = await onSignMessage(walletProvider);
  if (!response) return;

  const payload = {
    signature: response.signature,
    message: response.message,
    address: address ?? "",
  };

  const apiUrl = `/users/login`;
  const jwtToken = await fetchWithJwtClaiming(payload, apiUrl);
  localStorage.setItem(JWT_KEY, jwtToken);
};
