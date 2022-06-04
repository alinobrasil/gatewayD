import React from 'react'
import styled from "styled-components"


export default function MenuItem(props) {
    return (
        <Container>

            <div>
                <img src={props.image} height="70" />
            </div>

            <TextPart>
                <MenuTitle>{props.title}</MenuTitle>
                <div> {props.desc} </div>
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
  width: 700px;
  display: flex;
  cursor: pointer;
  box-shadow:  5px 4px 5px #e8e8e8;
  background-color: white;
  margin-bottom: 30px;

`

MenuItem.defaultProps = {
    image: "/images/gateway.svg",
    title: "Invest in this thing",
    desc: "Always do your own research. "

}