import React from "react";
import styled from "styled-components";
import { MdMoreVert } from "react-icons/md";

const LeftDot = styled.div`
  position: fixed;
  left: 10px;
  top: 45%;
  font-size: 2.3vw;
  cursor: pointer;
`;

export default () => {
  return (
    <LeftDot>
      <MdMoreVert />
    </LeftDot>
  );
};
