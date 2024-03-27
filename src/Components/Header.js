import React, { useState } from "react";
import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
function Header() {

    const[burgerStatus , setBurgerstatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerstatus(true)} />
      </RightMenu>
      <BurgerNav show ={burgerStatus}>
        <CLoseWrapper>
          <CustomClose onClick={()=>setBurgerstatus(false)} />
        </CLoseWrapper>
        <li>
          {" "}
          <a href="">Hello</a>
        </li>
        <li>
          {" "}
          <a href="">Hello</a>
        </li>
        <li>
          {" "}
          <a href="">Hello</a>
        </li>
        <li>
          {" "}
          <a href="">Hello</a>
        </li>{" "}
        <li>
          {" "}
          <a href="">Hello</a>
        </li>
        <li>
          {" "}
          <a href="">Hello</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 16;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;
const CustomMenu = styled(TiThMenu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props =>props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.2s ;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(AiOutlineDelete)``;

const CLoseWrapper = styled.div`
display: flex;
justify-content: end;
cursor: pointer;
`
