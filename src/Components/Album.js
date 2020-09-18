import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

const Box = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

const Content = styled.ul`
  width: 100%;
`;
const Contents = styled.li`
  width: 33.33%;
  display: inline-block;
  padding: 10px;
  margin-bottom: 15px;
`;

const ImgArea = styled.div`
  width: 100%;
  height: 25vh;
  background: #ddd;
  border-radius: 20px;
  margin-bottom: 15px;
  cursor: pointer;
`;
const ImgDesc = styled.p`
  font-size: 1.8vw;
`;
const ImgDate = styled.span`
  font-size: 0.8vw;
  font-weight: 400;
  margin-left: 10px;
`;

export default () => {
  return (
    <FadeIn>
      <Box>
        <Content>
          <Contents>
            <ImgArea></ImgArea>
            <ImgDesc>Instagram Clone</ImgDesc>
            <ImgDate>React / Apollo / GraphQl</ImgDate>
          </Contents>
          <Contents>
            <ImgArea></ImgArea>
            <ImgDesc>Movie App</ImgDesc>
            <ImgDate>React / Apollo</ImgDate>
          </Contents>
          <Contents>
            <ImgArea></ImgArea>
            <ImgDesc>Weather App</ImgDesc>
            <ImgDate>ReactNative</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open(
                  "https://lhm95.github.io/lg_hellovision_b2b/",
                  "_blank"
                )
              }
            ></ImgArea>
            <ImgDesc>LG HelloVision Calc</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open("https://lhm95.github.io/surveyForm/", "_blank")
              }
            ></ImgArea>
            <ImgDesc>Survey Front-End</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open("https://lhm95.github.io/chatting/", "_blank")
              }
            ></ImgArea>
            <ImgDesc>Chtting Front-End</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open("https://www.dear-belle.com/", "_blank")
              }
            ></ImgArea>
            <ImgDesc>Shopping Mall</ImgDesc>
            <ImgDate>Cafe24</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() => window.open("http://pre-samsung.com/", "_blank")}
            ></ImgArea>
            <ImgDesc>Samsung Mall</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() => window.open("http://pre-apple.com/", "_blank")}
            ></ImgArea>
            <ImgDesc>Apple Mall</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
        </Content>
      </Box>
    </FadeIn>
  );
};
