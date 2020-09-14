import React, { useState } from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";
import "../Styles/button.scss";
import Navigation from "../Components/Navigation";

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

const Profile = styled.div`
  display: block;
  width: 30%;
  margin: 0 auto;
  border-radius: 20px;
  background: #f2f2f2;
  text-align: center;
  padding: 20px 0%;
  margin-top: 30px;
`;

const TitleSpan = styled.span`
  display: block;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1vw;
  font-weight: 400;
  color: #bbb;
`;

const ContentSpan = styled.span`
  display: block;
  font-size: 1.8vw;
  color: #000;
`;

const MoreTitle = styled.span`
  display: block;
  font-size: 1vw;
  font-weight: 400;
  color: #bbb;
  margin-bottom: 15px;
`;

const MoreContent = styled.span`
  display: block;
  font-size: 1.8vw;
  color: #000;
  margin: 30px 0;
`;

const MoreContentMini = styled.span`
  display: inline-block;
  font-size: 0.8vw;
  font-weight: 400;
  color: #bbb;
  margin-left: 10px;
`;

export default () => {
  const [action, setAction] = useState("intro");
  // const [menu, setMenu] = useState("off");

  // if (menu === "on") {
  //   console.log("안녕");
  // }

  if (action === "intro") {
    setTimeout(() => setAction("about"), 14500); //14500
  }

  const moreBtn = () => {
    setAction("more");
  };

  return (
    <Wrapper>
      <Helmet>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c81c51c88776f3c1cd8901860cf46b28"
        ></script>
      </Helmet>
      <Box>
        {action === "intro" && (
          <Intro>
            <FadeIn de>
              <ReactTypingEffect
                text="Ok, From now on, let me introduce my portfolio."
                speed="200"
              />
              <Description>
                타이핑이 끝난 후 자동으로 다음 페이지가 소개됩니다.
              </Description>
            </FadeIn>
          </Intro>
        )}
        {action === "about" && (
          <>
            <FadeIn>
              <div>Front-End Developer</div>
              <Profile>?</Profile>
              <TitleSpan>name</TitleSpan>
              <ContentSpan>이호명</ContentSpan>
              <TitleSpan>phone</TitleSpan>
              <ContentSpan>010-3915-1421</ContentSpan>
              <TitleSpan>mail</TitleSpan>
              <ContentSpan>lhm95@kakao.com</ContentSpan>
              <TitleSpan>birth</TitleSpan>
              <ContentSpan>1995.09.20</ContentSpan>
              <TitleSpan>university</TitleSpan>
              <ContentSpan>
                KAC 한국예술원<MoreContentMini>중퇴</MoreContentMini>
              </ContentSpan>
              <button onClick={moreBtn} class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">More</span>
              </button>
            </FadeIn>
          </>
        )}
        {action === "more" && (
          <FadeIn>
            <MoreTitle>Certification</MoreTitle>
            <MoreContent>
              GTQ 포토샵 1급<MoreContentMini>2018.06</MoreContentMini>
            </MoreContent>
            <MoreContent>
              웹 디자인 기능사<MoreContentMini>2018.12</MoreContentMini>
            </MoreContent>
            <MoreContent>
              컴퓨터 그래픽스 운용기사<MoreContentMini>2019.09</MoreContentMini>
            </MoreContent>
            <MoreContent>
              정보처리 산업기사<MoreContentMini>2020.12</MoreContentMini>
            </MoreContent>
            <MoreTitle className="moreTitle2">Blog / Github</MoreTitle>
            <MoreContent
              className="moreContent2"
              onClick={() =>
                window.open("https://maeng-s.tistory.com/", "_blank")
              }
            >
              Maeng's<MoreContentMini>Tistory</MoreContentMini>
            </MoreContent>
            <MoreContent
              className="moreContent2"
              onClick={() => window.open("https://github.com/lhm95", "_blank")}
            >
              https://github.com/lhm95<MoreContentMini>Github</MoreContentMini>
            </MoreContent>
            <MoreTitle className="moreTitle2">SNS</MoreTitle>
            <MoreContent
              className="moreContent2"
              onClick={() =>
                window.open("https://www.instagram.com/ggr.lhm/", "_blank")
              }
            >
              @ggr.lhm<MoreContentMini>Instagram</MoreContentMini>
            </MoreContent>
          </FadeIn>
        )}
        {action !== "intro" && <Navigation />}
      </Box>
    </Wrapper>
  );
};