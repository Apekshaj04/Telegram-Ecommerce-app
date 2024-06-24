import Image from "next/image";
import { TmaProvider } from "./components/tma/provider";
import { ME } from "./components/me";
import { ConnectButtonApp } from "./components/wallet/ConnectWallet";


export default function Home() {
  return (
    <>
      <ME/>
      <ConnectButtonApp/>
    </>
  );
}
