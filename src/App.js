
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import Web3 from "web3";


function App() {

  const chains = [sepolia]
const projectId = '3cc638f3f1709e91a54012f73e691cc61b990de4'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const { chains, publicClient } = configureChains(
//   [sepolia],
//   [({ apiKey: 'tTXdAIDIsIsUyC322Hw-FwS0PPYvO5yw' })],
// )alchemyProvider
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
  
  return (

    <>
    <WagmiConfig config={wagmiConfig}>

    <div className="App">

       <Routes>
        
        <Route  path='/' element={<Home/>} />


       </Routes>
      
    </div>
    </WagmiConfig>

<Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
</>

  );
}

export default App;
