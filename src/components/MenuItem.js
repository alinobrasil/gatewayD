import React from 'react'
import styled from "styled-components"


export default function MenuItem() {
    return (
        <Container>

            <div>
                <img src="/images/dollar.png" height="70" />
            </div>

            <TextPart>
                <MenuTitle>High Interest Savings</MenuTitle>
                <div>
                    Deposit your funds to start earning interest. Interest rates are much better in Decentralized Finance.
                </div>

            </TextPart>
        </Container>
    )
}

const TextPart = styled.div`
    padding: 30px;
`


const MenuTitle = styled.div`
    font-weight: bold;
    font-size: 32px;
    line-height: 200%;
`

const Container = styled.div`
  border-radius: 30px;
  padding: 20px 40px;
  align-items: center;
  min-width: 400px;
  max-width: 700px;
  display: flex;
  cursor: pointer;
  box-shadow:  5px 4px 5px #e8e8e8;
  background-color: white;
  margin-bottom: 30px;

`