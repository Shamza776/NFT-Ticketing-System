import { ethers } from 'ethers';
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useState } from 'react';

declare global {
    interface Window {
      ethereum: MetaMaskInpageProvider;
    }
  }

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');
  const connectWallet = async () => {
    if (window.ethereum) {
        try{ //request access to the user's wallet
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}) as string[];
            const walletAddress = accounts[0];
            setWalletAddress(walletAddress);
            

        }catch(error){
            console.log("error connecting to wallet")
        }
    }else{
        console.log("please install metamask")
    }
  }
  return(
    <div>
        <button onClick={connectWallet}>Connect Wallet</button>
    </div>
)
}


export default ConnectWallet;