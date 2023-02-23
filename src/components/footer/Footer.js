import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  font-size: 14px;
  text-align: center;
  color: #666666;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2023 Hello Hangeul. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;