import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SurveySelector from "../components/SurveySelector";

const CreateSurvey = () => {
  return (
    <SurveyWrapper>
      <div className="survey-header">
        <div className="nav-items">
          <Link to="/dashboard" className="link">
            HOME
          </Link>
          <Link to="/create" className="link">
            DESIGNER
          </Link>
          <Link to="/create" className="link">
            PREVIEW
          </Link>
          <Link to="/create" className="link">
            PDF EXPORT
          </Link>
          <Link to="/create" className="link">
            ANALYTICS
          </Link>
        </div>
      </div>
      <div className="property-choice">
        <SurveySelector />
      </div>
      <div className="survey-body">hey</div>
    </SurveyWrapper>
  );
};

const SurveyWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  .survey-header {
    grid-column: 1 / span 2;
    padding: 2em;
    text-align: center;
  }
  .link {
    text-decoration: none;
    padding: 0 1em;
    border-right: 1px solid;
    color: var(--mainPrimary);
    &:focus {
      color: var(--mainBackground);
    }
    &:hover {
      color: var(--mainPurple);
    }
  }
`;

export default CreateSurvey;
