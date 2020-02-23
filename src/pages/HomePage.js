import React, { useState } from "react";
import styled from "styled-components";
import { ButtonContainer } from "../utils/Button";
import TestimonialCarousel from "react-items-carousel";
import { IconWrapper } from "../utils/Icon";
import NavBar from "../components/NavBar";
import content from "../utils/content";

const HomePage = () => {
  const [state, setState] = useState({
    activeItemIndex: 0
  });

  const changeActiveItem = activeItemIndex => setState({ activeItemIndex });
  const { activeItemIndex } = state;
  return (
    <React.Fragment>
      <NavBar />
      <HeroWrapper>
        <div className="sub-hero">
          <h1 className="hero-h1">A simple & powerful online survey tool</h1>
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
          <IconWrapper
            url="image.png"
            height="10em"
            width="10em"
            className="icon-wrapper"
          />
          <h4>Custom Themes</h4>
          <p className="icon-content">
            Free SurveyPlanet users can choose between ten colorful survey
            themes. Pro users can build custom themes by choosing their own
            colors, fonts and background images.
          </p>
        </div>
        <div className="icon-container">
          <IconWrapper
            url="responsive.png"
            height="9em"
            width="10em"
            className="icon-wrapper"
          />
          <h4>Responsive Layout</h4>
          <p className="icon-content">
            Our surveys work on mobile devices, tablets and desktop computers.
            Before you share your survey, just head into Preview mode to see how
            it looks on different devices.
          </p>
        </div>
        <div className="icon-container">
          <IconWrapper
            url="easy.png"
            height="9em"
            width="10em"
            className="icon-wrapper"
          />
          <h4>Fast & Easy</h4>
          <p className="icon-content">
            We've done our best to make creating surveys as enjoyable as
            possible. We've got the fastest and most intuitive user experience
            on the block. Creating online surveys has never been more fun and
            hassle-free.
          </p>
        </div>
        <div className="icon-container">
          <IconWrapper
            url="branding.png"
            height="9em"
            width="10em"
            className="icon-wrapper"
          />
          <h4>Custom Branding</h4>
          <p className="icon-content">
            As much as we love our logo, we know that It's important for your
            surveys to match your own identity. SurveyPlanet Pro users can add
            their own logo, link to their own website and even redirect
            participants to a custom success URL.
          </p>
        </div>
      </SubHeroWrapper>

      <CardContainer>
        <CardWrapper>
          <h3>Don't just take our word for it…</h3>
          <p>
            Thousands of people put their trust in SurveyPlanet every day.
            Here’s what
            <br />
            some of them had to say.
          </p>
        </CardWrapper>
        <Slider>
          <TestimonialCarousel
            numberOfCards={1}
            gutter={0}
            requestToChangeActive={changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={"center"}
            chevronWidth={10}
            rightChevron={">"}
            leftChevron={"<"}
          >
            {content.map(content => (
              <div key={content.id} className="slider-content">
                <blockquote>{content.body}</blockquote>
                <footer>{content.author}</footer>
              </div>
            ))}
          </TestimonialCarousel>
        </Slider>
      </CardContainer>

      <FormWrapper>
        <div className="form-aside">
          <h3>Sign Up Now</h3>
          <p>
            Free unlimited surveys, questions & <br />
            responses.
          </p>
        </div>
        <div>
          <form className="form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="form-input"
            />
            <ButtonContainer
              background
              hover
              paddingTopBottom="0.8rem"
              paddingLeftRight="1.9rem"
              className="button"
              borderRadius
            >
              Get Started
            </ButtonContainer>
          </form>
        </div>
      </FormWrapper>
      <FooterWrapper>
        &copy;SurveyBuilder. All Rights Reserved. Tolu' Olaniyan
      </FooterWrapper>
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
  }
  @media (max-width: 850px) {
    height: 15em;
    background-image: none;
    .sub-hero {
      width: 100%;
      text-align: center;
      transform: translate(0em, 3em);
      padding-right: 4em;
    }
    h1 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 0.6em;
    }
    .button:after {
      display: none;
    }
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
  .icon-wrapper {
    margin-left: 4em;
  }
  h4 {
    margin-left: 4.3em;
    font-size: 1.5em;
  }
  @media (max-width: 850px) {
    padding: 0 0 0 0;
    .icon-container {
      width: 100%;
      margin: 2em;
    }
    .icon-content {
      width: 100%;
    }
    h4 {
      margin-left: 2.5em;
      font-size: 1.4em;
    }
  }
`;

const CardWrapper = styled.div`
  text-align: center;
  padding-top: 5em;
  h3 {
    font-size: 1.8em;
    color: var(--mainGreen);
    font-weight: normal;
  }

  p {
    color: var(--mainGrey);
    font-size: 1.4em;
  }
  @media (max-width: 850px) {
    padding-top: 1em;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8em 0;
  padding-bottom: 8em;
  border-bottom: 0.01em solid var(--mainDarking);
  flex-wrap: wrap;
  .button:after {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjNTdDNzNCIj48cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDEzaDE2djFIMHoiLz48cGF0aCBkPSJNMTEuNzA3IDlsNC4yNDMgNC4yNDMtLjcwNy43MDdMMTEgOS43MDd6Ii8+PHBhdGggZD0iTTE1Ljk1IDEzLjcwN2wtNC4yNDMgNC4yNDMtLjcwNy0uNzA3TDE1LjI0MiAxM3oiLz48L2c+PGcgZmlsbD0iI0ZGRiI+PHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCA0aDE2djFIMHoiLz48cGF0aCBkPSJNMTEuNzA3IDBsNC4yNDMgNC4yNDMtLjcwNy43MDdMMTEgLjcwN3oiLz48cGF0aCBkPSJNMTUuOTUgNC43MDdMMTEuNzA3IDguOTUgMTEgOC4yNDMgMTUuMjQyIDR6Ii8+PC9nPjwvZz48L3N2Zz4=");
    display: inline-block;
    vertical-align: middle;
    content: "";
    width: 16px;
    height: 9px;
    margin-left: 10px;
  }
  .form-aside {
    padding-right: 8em;
    text-align: center;
  }
  .form {
    padding-left: 8em;
  }
  .form-input {
    height: 4em;
    width: 25em;
    box-shadow: none;
    box-sizing: border-box;
    padding-left: 3px;
    margin-right: -1px;
  }
  h3 {
    font-size: 2em;
    font-weight: normal;
  }
  p {
    font-size: 1.4em;
    line-height: 1.5;
    color: var(--mainGrey);
  }
  @media (max-width: 850px) {
    margin: 2em 0;
    .form-aside {
      padding-right: 0;
    }
    .form {
      padding-left: 0;
    }
    .button:after {
      background-image: none;
    }
    .form-input {
      width: 14em;
      border: 2px solid var(--mainDarking);
    }
  }
`;

const CardContainer = styled.div`
  background: var(--mainSecondary);
  padding-bottom: 4em;
  border-bottom: 0.01em solid var(--mainDarking);
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -4em 0 1.2em 0;
  color: var(--mainGrey);
  @media (max-width: 850px) {
    margin: 0 0 1.2em 0;
  }
`;

const Slider = styled.div`
  padding: 2em 15em;
  color: var(--mainGrey);
  line-height: 1.5;
  text-align: justify;
  footer {
    color: var(--mainGreen);
    font-size: 1.2em;
  }
  @media (max-width: 850px) {
    padding: 0 1em;
    margin-bottom: -7em;
  }
`;

export default HomePage;
