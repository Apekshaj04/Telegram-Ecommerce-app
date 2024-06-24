// import { PropsWithChildren } from "react";
// import '@rainbow-me/rainbowkit/styles.css';
// import { RainbowKitProvider, connectorsForWallets, metaMaskWallet, walletConnectWallet, coinbaseWallet } from '@rainbow-me/rainbowkit';
// import { WagmiConfig, configureChains, createClient } from 'wagmi';
// import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// const { chains, provider } = configureChains(
//   [mainnet, polygon, optimism, arbitrum, base],
//   [publicProvider()]
// );

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       metaMaskWallet({ chains }),
//       walletConnectWallet({ chains }),
//       coinbaseWallet({ chains, appName: 'Fashionista' }),
//     ],
//   },
// ]);

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// export function WalletProvider(props: PropsWithChildren) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <WagmiConfig config={wagmiClient}>
//         <RainbowKitProvider chains={chains}>
//           {props.children}
//         </RainbowKitProvider>
//       </WagmiConfig>
//     </QueryClientProvider>
//   );
// }
