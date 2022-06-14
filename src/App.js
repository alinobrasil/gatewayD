import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from './state/accountSlice';

//import pages (routes)
import Savings from './pages/high-interest-savings'
import Trade from './pages/trade'
import MenuList from './pages/menu-list'
import LPs from './pages/liquidity-pools'

//utils
import { checkWallet } from './utils/wallet'



function App() {

  const [currentAccount, setCurrentAccount] = useState('');

  const { account } = useSelector((state) => state.account)
  console.log(account)

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
    // checkIfWalletIsConnected();
    checkWallet();

  }, [])

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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/liquidity-pools" element={<LPs />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


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
