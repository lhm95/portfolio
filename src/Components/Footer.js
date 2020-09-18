import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const Copyright = styled.p`
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

export default () => {
  return (
    <Footer>
      <Copyright>lhm {new Date().getFullYear()} &copy;</Copyright>
    </Footer>
  );
};
