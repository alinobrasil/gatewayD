import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';


export default function menulist() {
    return (
        <div>
            <MenuList>
                <StyledLink to='/savings' >
                    <MenuItem
                        image="/images/dollar.png"
                        title="High Interest Savings"
                        desc="Deposit your funds to start earning interest. Interest rates are much better in Decentralized Finance."
                    />
                </StyledLink>

                <StyledLink to='/trade' >
                    <MenuItem
                        image="/images/transactions.png"
                        title="Buy and sell Crypto"
                        desc="Trade cryptocurrencies (tokens) at fair market price through the most reputable decentralized exchanges."
                    />
                </StyledLink>


                <StyledLink to='/liquidity-pools' >
                    <MenuItem
                        image="/images/investment.png"
                        title="Invest in Decentralized Trading"
                        desc="Deposit your money to facilitate trading on a decentralized exchange (DEX). Earn your fair share of fees every time someone trades on the DEX."
                    />
                </StyledLink>
            </MenuList>
        </div >
    )
}

const StyledLink = styled(Link)`
    color: 'black';
    text-decoration: none;

    &:link{
        text-decoration: none;
        color: black;
    }
    &:active{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
        color: black;
    } 
`;

const MenuList = styled.div`
  justify-content: center;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
