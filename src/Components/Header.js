import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";

import useDarkMode from "use-dark-mode";
import Toggle from "../Components/Toggle";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
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
  @media only screen and (max-width: 768px) {
    font-size: 0;
  }
`;

const HeaderTextRight = styled.p`
  position: absolute;
  font-size: 13px;
  color: #fff;
  right: 20px;
  top: 7px;
  @media only screen and (max-width: 768px) {
    right: 8px;
  }
`;

const ReactLogo = styled.span`
  font-size: 14px;
  vertical-align: middle;
  margin-right: 6px;
`;

const ThemeBox = styled.div`
  position: absolute;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    left: 5px;
  }
`;

const ThemeBtn = styled.button`
  color: #fff;
  display: inline-block;
  line-height: 9px;
  margin: 0 10px;
  @media only screen and (max-width: 768px) {
    margin: 0 4px;
  }
`;

export default () => {
  const darkMode = useDarkMode(false);
  return (
    <Header>
      <ThemeBox>
        <ThemeBtn type="button" onClick={darkMode.disable}>
          <BiSun />
        </ThemeBtn>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <ThemeBtn type="button" onClick={darkMode.enable}>
          <BiMoon />
        </ThemeBtn>
      </ThemeBox>
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
