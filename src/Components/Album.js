import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import album01 from "../images/album_01.jpg";
import album02 from "../images/album_02.jpg";
import album03 from "../images/album_03.jpg";
import album04 from "../images/album_04.jpg";
import album05 from "../images/album_05.jpg";
import album06 from "../images/album_06.jpg";
import album07 from "../images/album_07.jpg";
import album08 from "../images/album_08.jpg";
import album09 from "../images/album_09.jpg";

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
  margin-bottom: 30px;
  cursor: pointer;
  overflow: hidden;
  & > img {
    width: 100%;
    object-fit: cover;
  }
`;
const ImgDesc = styled.p`
  font-size: 1.8vw;
`;
const ImgDate = styled.span`
  font-size: 0.8vw;
  font-weight: 400;
  display: block;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export default () => {
  return (
    <FadeIn>
      <Box>
        <Content>
          <Contents>
            <ImgArea>
              <img src={album01} alt="album01" />
            </ImgArea>
            <ImgDesc>Instagram Clone</ImgDesc>
            <ImgDate>React / Apollo / GraphQL</ImgDate>
          </Contents>
          <Contents>
            <ImgArea>
              <img src={album02} alt="album02" />
            </ImgArea>
            <ImgDesc>Movie App</ImgDesc>
            <ImgDate>React / Apollo / GraphQL</ImgDate>
          </Contents>
          <Contents>
            <ImgArea>
              <img src={album03} alt="album03" />
            </ImgArea>
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
            >
              <img src={album04} alt="album04" />
            </ImgArea>
            <ImgDesc>LG HelloVision Calc</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open("https://lhm95.github.io/surveyForm/", "_blank")
              }
            >
              <img src={album05} alt="album05" />
            </ImgArea>
            <ImgDesc>Survey Front-End</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open("https://lhm95.github.io/chatting/", "_blank")
              }
            >
              <img src={album06} alt="album06" />
            </ImgArea>
            <ImgDesc>Chtting Front-End</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() =>
                window.open("https://www.dear-belle.com/", "_blank")
              }
            >
              <img src={album07} alt="album07" />
            </ImgArea>
            <ImgDesc>Shopping Mall</ImgDesc>
            <ImgDate>Cafe24</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() => window.open("http://pre-samsung.com/", "_blank")}
            >
              <img src={album08} alt="album08" />
            </ImgArea>
            <ImgDesc>Samsung Mall</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
          <Contents>
            <ImgArea
              onClick={() => window.open("http://pre-apple.com/", "_blank")}
            >
              <img src={album09} alt="album09" />
            </ImgArea>
            <ImgDesc>Apple Mall</ImgDesc>
            <ImgDate>Html / Css / Js</ImgDate>
          </Contents>
        </Content>
      </Box>
    </FadeIn>
  );
};
