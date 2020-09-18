import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

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
  return (
    <>
      <MenuBoard>
        <FadeIn>
          <MenuText onClick={() => props.setAction("intro")}>Intro</MenuText>
          <MenuText
            onClick={() => {
              props.setAction("about");
            }}
          >
            Profile
          </MenuText>
          <MenuText
            onClick={() => {
              props.setAction("more");
            }}
          >
            More
          </MenuText>
          <MenuText
            onClick={() => {
              props.setAction("album");
            }}
          >
            Album
          </MenuText>
        </FadeIn>
      </MenuBoard>
    </>
  );
};
