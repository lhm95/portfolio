import React, { useState } from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";
import "../Styles/button.scss";
import Navigation from "../Components/Navigation";
import { MdMoreVert } from "react-icons/md";
import Album from "../Components/Album";
import myPhoto from "../images/photo.jpg";

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

const Box = styled.div`
  font-size: 3vw;
  font-weight: bold;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 8vw;
  }
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
  width: 15%;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  border: 2px solid #ccc;
  & > img {
    width: 100%;
    display: block;
  }
  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;

const TitleSpan = styled.span`
  display: block;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1vw;
  font-weight: 400;
  color: #bbb;
  @media only screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;

const ContentSpan = styled.span`
  display: block;
  font-size: 1.8vw;
  @media only screen and (max-width: 768px) {
    font-size: 6.5vw;
  }
`;

const MoreTitle = styled.span`
  display: block;
  font-size: 1vw;
  font-weight: 400;
  color: #bbb;
  margin-bottom: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;

const MoreContent = styled.span`
  display: block;
  font-size: 1.8vw;
  margin: 30px 0;
  @media only screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;

const MoreContentMini = styled.span`
  display: inline-block;
  font-size: 0.8vw;
  font-weight: 400;
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;

const LeftDot = styled.div`
  position: fixed;
  left: 10px;
  top: 45%;
  font-size: 2.3vw;
  cursor: pointer;
  z-index: initial;
  @media only screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;

export default () => {
  const [action, setAction] = useState("intro");

  if (action === "intro") {
    setTimeout(() => setAction("about"), 9300); //9300
  }

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
                text="Hello, I'm Front-End Developer"
                speed="150"
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
              <Profile>
                <img src={myPhoto} alt="myPhoto" />
              </Profile>
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
              <button onClick={() => setAction("more")} class="learn-more">
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
              컴퓨터 그래픽스 운용 기능사
              <MoreContentMini>2019.09</MoreContentMini>
            </MoreContent>
            {/* <MoreContent>
              정보처리 산업기사<MoreContentMini>2020.12</MoreContentMini>
            </MoreContent> */}
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
            <button onClick={() => setAction("album")} class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Album</span>
            </button>
          </FadeIn>
        )}
        {action === "album" && <Album />}
        {action !== "intro" && (
          <LeftDot>
            <MdMoreVert onClick={() => setAction("navi")} />
          </LeftDot>
        )}
        {action === "navi" && <Navigation setAction={setAction} />}
      </Box>
    </Wrapper>
  );
};
