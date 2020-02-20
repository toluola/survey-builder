import React, { useState } from "react";
import styled from "styled-components";
import { ButtonContainer } from "../utils/Button";
import { IconWrapper } from "../utils/Icon";
import Slider from "../utils/Slider";
import content from "../utils/content";
import ArrowLeft from "../utils/ArrowLeft";
import leftArrow from "../utils/svgs/left-arrow.svg";
import rightArrow from "../utils/svgs/right-arrow.svg";
import ArrowRight from "../utils/ArrowRight";

const HomePage = () => {
  const getWidth = () => window.innerWidth;
  // const contentRef = useRef();
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0
  });

  const { translate, transition, activeIndex } = state;
  const nextSlide = () => {
    console.log("got here");
    if (activeIndex === content.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (content.length - 1) * getWidth(),
        activeIndex: content.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    });
  };
  return (
    <React.Fragment>
      <HeroWrapper>
        <div className="sub-hero">
          <h1 className="hero-h1">A simple & powerful online survey tool.</h1>
          <h3>
            Sign up now for free unlimited surveys, questions & responses.
          </h3>
          <ButtonContainer
            background
            hover
            paddingTopBottom="0.8rem"
            paddingLeftRight="1.9rem"
            className="button"
          >
            Get Started
          </ButtonContainer>
        </div>
      </HeroWrapper>
      <SubHeroWrapper>
        <div className="icon-container">
          <IconWrapper url="image.png" height="10em" width="10em" />
          <h4>Custom Themes</h4>
          <p className="icon-content">
            Free SurveyPlanet users can choose between ten colorful survey
            themes. Pro users can build custom themes by choosing their own
            colors, fonts and background images.
          </p>
        </div>
        <div className="icon-container">
          <IconWrapper url="responsive.png" height="9em" width="10em" />
          <h4>Responsive Layout</h4>
          <p className="icon-content">
            Our surveys work on mobile devices, tablets and desktop computers.
            Before you share your survey, just head into Preview mode to see how
            it looks on different devices.
          </p>
        </div>
        <div className="icon-container">
          <IconWrapper url="easy.png" height="9em" width="10em" />
          <h4>Fast & Easy</h4>
          <p className="icon-content">
            We've done our best to make creating surveys as enjoyable as
            possible. We've got the fastest and most intuitive user experience
            on the block. Creating online surveys has never been more fun and
            hassle-free.
          </p>
        </div>
        <div className="icon-container">
          <IconWrapper url="branding.png" height="9em" width="10em" />
          <h4>Custom Branding</h4>
          <p className="icon-content">
            As much as we love our logo, we know that It's important for your
            surveys to match your own identity. SurveyPlanet Pro users can add
            their own logo, link to their own website and even redirect
            participants to a custom success URL.
          </p>
        </div>
      </SubHeroWrapper>

      <CardWrapper>
        <h3>Don't just take our word for it…</h3>
        <p>
          Thousands of people put their trust in SurveyPlanet every day. Here’s
          what
          <br />
          some of them had to say.
        </p>
      </CardWrapper>

      <SliderContent>
        <ArrowLeft onClick={prevSlide}>
          <img src={leftArrow} alt="leftarrow" />
        </ArrowLeft>
        <ArrowRight onClick={nextSlide}>
          <img src={rightArrow} alt="leftarrow" />
        </ArrowRight>
        <Slider
          translate={translate}
          transision={transition}
          width={getWidth() * 4}
        >
          {content.map(content => (
            <div key={content.id} className="slider-content">
              <blockquote>{content.body}</blockquote>
              <footer>{content.author}</footer>
            </div>
          ))}
        </Slider>
      </SliderContent>
    </React.Fragment>
  );
};

const HeroWrapper = styled.div`
  background-image: url("https://public.surveyplanet.com/images/illustrations/illustration_01.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 30em;
  border-bottom: 0.06em solid var(--mainDarking);
  font-size: 1.2em;
  .sub-hero {
    width: 25%;
    transform: translate(12em, 3em);
  }

  h3 {
    color: var(--mainGrey);
  }
  .button:after {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjNTdDNzNCIj48cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDEzaDE2djFIMHoiLz48cGF0aCBkPSJNMTEuNzA3IDlsNC4yNDMgNC4yNDMtLjcwNy43MDdMMTEgOS43MDd6Ii8+PHBhdGggZD0iTTE1Ljk1IDEzLjcwN2wtNC4yNDMgNC4yNDMtLjcwNy0uNzA3TDE1LjI0MiAxM3oiLz48L2c+PGcgZmlsbD0iI0ZGRiI+PHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCA0aDE2djFIMHoiLz48cGF0aCBkPSJNMTEuNzA3IDBsNC4yNDMgNC4yNDMtLjcwNy43MDdMMTEgLjcwN3oiLz48cGF0aCBkPSJNMTUuOTUgNC43MDdMMTEuNzA3IDguOTUgMTEgOC4yNDMgMTUuMjQyIDR6Ii8+PC9nPjwvZz48L3N2Zz4=");
    display: inline-block;
    vertical-align: middle;
    content: "";
    width: 16px;
    height: 9px;
    margin-left: 10px;
    will-change: margin;
    transition-property: margin;
    transition-duration: 0.15s;
  }
`;

const SubHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 5em 2em 15em;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.01em solid var(--mainDarking);
  .icon-container {
    width: 50%;
  }
  .icon-content {
    width: 70%;
    text-align: justify;
    color: var(--mainGrey);
  }
  h4 {
    margin-left: 4.3em;
    font-size: 1.5em;
  }
`;

const CardWrapper = styled.div`
  text-align: center;
  margin-top: 5em;
  h3 {
    font-size: 1.8em;
    color: var(--mainGreen);
    font-weight: normal;
  }

  p {
    color: var(--mainGrey);
    font-size: 1.4em;
  }
`;

const SliderContent = styled.div`
  position: relative;
  overflow: hidden;
  .slider-content {
    margin: 2em 20em 10em 20em;
    text-align: justify;
    color: var(--mainGrey);
    line-height: 1.5em;
  }
  footer {
    color: var(--mainGreen);
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: bold;
  }
  img:hover {
    transform: scale(1.7);
  }
`;

export default HomePage;
