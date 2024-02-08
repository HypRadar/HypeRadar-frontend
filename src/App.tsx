import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import {
  createWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import Home from "./pages/home";
import Error404 from "./components/misc/Error404";
import LayoutWrapper from "./components/layouts/LayoutWrapper";
import Details from "./pages/projects/Detail";
import HolderComponent from "./components/holder_component";
import RepOwned from "./components/holderinfo_component/rep_owned";
import HolderInfo from "./pages/holder_info";
import RepRecieved from "./components/holderinfo_component/rep_recieved";
import ProjectOwned from "./components/holderinfo_component/project_owned";
import CreateProject from "./pages/projects/CreateProject";
import { ETHERS_CONFIG, WALLET_CONNECT_ID } from "./constants";
import { BASE_CHAINS_LIST, CHAIN_ID } from "./constants/network";
import { Web3ContextProvider } from "./context/Web3Context";
import { MiscContextProvider } from "./context/MiscContextProvider";
import EditProject from "./pages/projects/EditProject";
import EditRoyalty from "./pages/projects/EditRoyalty";

const projectId = WALLET_CONNECT_ID;

createWeb3Modal({
  defaultChain: BASE_CHAINS_LIST[CHAIN_ID],
  ethersConfig: ETHERS_CONFIG,
  chains: BASE_CHAINS_LIST,
  projectId,
});

function App() {
  const { walletProvider } = useWeb3ModalProvider();
  const { chainId, isConnected } = useWeb3ModalAccount();
  const [userSigner, setUserSigner] = useState<JsonRpcSigner | null>(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/create" element={<LayoutWrapper />}>
          <Route index element={<CreateProject />} />
        </Route>
        <Route path="/projects/:address" element={<Details />} />
        <Route path="/projects/edit/:address" element={<LayoutWrapper />}>
          <Route index element={<EditProject />} />
        </Route>
        <Route path="/projects/edit-royalty/:address" element={<LayoutWrapper />}>
          <Route index element={<EditRoyalty />} />
        </Route>
        <Route path="/gainer" element={<Home gainer={true} />} />
        <Route path="/holder" element={<LayoutWrapper />}>
          <Route index element={<HolderComponent />} />
        </Route>
        <Route path="/profile/:address" element={<HolderInfo profile={true} />}>
          <Route index element={<RepOwned profile={true} />} />
          <Route path="received" element={<RepRecieved profile={true} />} />
          <Route path="owned" element={<ProjectOwned profile={true} />} />
        </Route>
        <Route path="/holderinfo/:address" element={<HolderInfo />}>
          <Route index element={<RepOwned />} />
          <Route path="received" element={<RepRecieved />} />
          <Route path="owned" element={<ProjectOwned />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  const getSigner = async () => {
    if (walletProvider) {
      try {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();
        setUserSigner(signer as unknown as SetStateAction<JsonRpcSigner>);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  useEffect(() => {
    if (isConnected && chainId === parseInt(CHAIN_ID, 10)) {
      getSigner();
    }
  }, [isConnected, chainId]);

  return (
    <Web3ContextProvider userSigner={userSigner}>
      <MiscContextProvider>
        <RouterProvider router={router} />
      </MiscContextProvider>
    </Web3ContextProvider>
  );
}

export default App;
