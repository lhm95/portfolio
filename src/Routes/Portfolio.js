import React from "react";
import styled from "styled-components";
import sample from "../images/sample.jpg";
import ReactTypingEffect from "react-typing-effect";

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  font-size: 3vw;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

const Intro = styled.p`
  width: 100%;
`;

const Description = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 400;
  margin-top: 30px;
  color: #bbb;
`;

// const TransImgBox = styled.div`
//   position: relative;
//   width: 30%;
//   margin: 0 auto;
//   overflow: hidden;
//   transform: matrix(1.8, 0, 0, 1.8, 0, -30);
// `;

// const TransArea = styled.div`
//   position: absolute;
//   font-size: 16px;
//   width: 100%;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `;

export default () => {
  return (
    <Wrapper>
      <Box>
        <Intro>
          <ReactTypingEffect
            text="Ok, From now on, let me introduce my portfolio." //text=["Hello.", "World!"]
            speed="200"
          />
          <Description>
            타이핑이 끝난 후 자동으로 다음 페이지가 소개됩니다.
          </Description>
        </Intro>
        {/* <TransImgBox>
          <TransArea>
            <img src={sample} alt="portfolio" />
          </TransArea>
        </TransImgBox> */}
      </Box>
    </Wrapper>
  );
};
