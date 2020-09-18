import React, { useState } from "react";
import styled from "styled-components";
import { MdMoreVert } from "react-icons/md";
import FadeIn from "react-fade-in";

const LeftDot = styled.div`
  position: fixed;
  left: 10px;
  top: 45%;
  font-size: 2.3vw;
  cursor: pointer;
  z-index: initial;
`;

const MenuBoard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000000;
  opacity: 1;
`;

const MenuText = styled.span`
  margin: 40px 0;
  display: block;
  color: #fff;
  font-size: 4vw;
  cursor: pointer;
`;

export default (props) => {
  const [menu, setMenu] = useState("menu");

  return (
    <>
      {menu === "menu" && (
        <LeftDot>
          <MdMoreVert onClick={() => setMenu("menuOn")} />
        </LeftDot>
      )}
      {menu === "menuOn" && (
        <>
          <LeftDot className="on">
            <MdMoreVert onClick={() => setMenu("menu")} />
          </LeftDot>
          <MenuBoard>
            <FadeIn>
              <MenuText onClick={() => props.setAction("intro")}>
                Intro
              </MenuText>
              <MenuText
                onClick={() => {
                  props.setAction("about");
                  setMenu("menu");
                }}
              >
                Profile
              </MenuText>
              <MenuText
                onClick={() => {
                  props.setAction("more");
                  setMenu("menu");
                }}
              >
                More
              </MenuText>
              <MenuText
                onClick={() => {
                  props.setAction("album");
                  setMenu("menu");
                }}
              >
                Album
              </MenuText>
            </FadeIn>
          </MenuBoard>
        </>
      )}
    </>
  );
};
