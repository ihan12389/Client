import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 150px;
  margin: 0;
  padding : 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Hello Hangeul</Title>
      <Logo src="logo.png" alt="logo" />
    </HeaderContainer>
  );
};

export default Header;