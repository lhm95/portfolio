import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: center;
`;

const HeaderTextLeft = styled.p`
  position: absolute;
  font-size: 16px;
  color: #fff;
  left: 20px;
  top: 6px;
`;

const HeaderTextRight = styled.p`
  position: absolute;
  font-size: 13px;
  color: #fff;
  right: 20px;
  top: 7px;
`;

const ReactLogo = styled.span`
  font-size: 14px;
  vertical-align: middle;
  margin-right: 6px;
`;

export default () => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderTextLeft>/* Lee Ho Myeong */</HeaderTextLeft>
        <HeaderTextRight>
          <ReactLogo>
            <FaReact />
          </ReactLogo>
          이 페이지는 React로 제작되었습니다.
        </HeaderTextRight>
      </HeaderWrapper>
    </Header>
  );
};
