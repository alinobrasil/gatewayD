import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import styled from 'styled-components'
import MenuItem from './components/MenuItem';

function App() {

  const [currentAccount, setCurrentAccount] = useState('');

  const connectWallet = async () => {
    try {
      const metamask = window.ethereum;

      if (!metamask) {
        alert("Metamask not found. Please get it from the Chrome webstore");
        return;
      }

      const accounts = await metamask.request({ method: "eth_requestAccounts" });

      console.log("connected with: ", accounts[0]);
      setCurrentAccount(accounts[0])

    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  // just checks to see if metamask is installed
  const checkIfWalletIsConnected = async () => {
    const metamask = window.ethereum;

    if (!metamask) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('Metamask (injected wallet) detected', metamask);
    }
  }


  const renderNotConnectedContainer = () => (
    <div className="connect-wallet-container">

      <WalletButton onClick={connectWallet} className="cta-button connect-wallet-button">
        Connect Wallet
      </WalletButton>
    </div>
  );

  return (
    <div className="App">

      <HeaderContainer>
        <img src='images/gateway.svg' height='50' />

        {/* show "connect wallet" if no wallet is connected */}
        {!currentAccount && renderNotConnectedContainer()}
      </HeaderContainer>

      aasdfasdf
      aasdfasdfasdf

      <MenuList>
        <MenuItem />
        <MenuItem />
      </MenuList>


    </div>
  );
}

export default App;




const MenuList = styled.div`
  justify-content: center;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`



const HeaderContainer = styled.div`
    min-height: 60px;
    /* position: fixed; */
    display: flex;
    align-items: center;
    /* vertical-align: center; */
    justify-content: space-between;
    background-color: #ffffff;

    /* padding: 0 20px; */
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -10px;

    top: 0;
    left: 0;
    right: 0; 
`

const WalletButton = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #646FCE;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
`
