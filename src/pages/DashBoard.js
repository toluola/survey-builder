import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "../utils/Button";

const DashBoard = () => {
  return (
    <DashBoardWrapper>
      <div>
        <h1>SurveyBuilder</h1>
      </div>
      <div className="nav-items">
        <Link to="" className="link">
          CREATE SURVEY
        </Link>
        <Link to="" className="link">
          ANALYTICS
        </Link>
        <Link to="" className="link">
          VIEW RESPONSES
        </Link>
        <Link to="" className="link">
          PDF EXPORT
        </Link>
        <Link to="/" className="link">
          LOGOUT
        </Link>
      </div>
      <div>
        <h2>
          Build fully-customizable surveys, forms and quizzes that seamlessly
          allows you to interact with your users, to collect and analyze
          valuable data.
        </h2>
        <Link to="">
          <ButtonContainer
            hover
            paddingTopBottom="0.8rem"
            paddingLeftRight="1.9rem"
            className="button"
          >
            Create Survey
          </ButtonContainer>
        </Link>
      </div>
      <div className="side-image"></div>
    </DashBoardWrapper>
  );
};

const DashBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 15% 85%;
  background: #1bb394;
  text-align: center;
  height: 100vh;
  .nav-items {
    padding: 2em;
  }
  .link {
    text-decoration: none;
    padding: 0 1em;
    border-right: 1px solid;
    color: var(--mainWhite);
    &:hover {
      color: var(--mainPurple);
    }
  }
  .button {
    font-size: 1.4em;
    color: var(--mainWhite);
  }
  .side-image {
    background: url("Picture_header.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  h2 {
    padding-top: 8em;
  }
`;

export default DashBoard;
