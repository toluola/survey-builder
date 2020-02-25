import React from "react";
import styled from "styled-components";

const SurveySelector = () => {
  return (
    <SurveySelectorWrapper>
      <h2>Tool Box</h2>
      <div>
        <ul>
          <li>Single Input</li>
          <li>Checkbox</li>
          <li>Radiogroup</li>
          <li>Dropdown</li>
          <li>Comment</li>
          <li>Rating</li>
          <li>Image picker</li>
          <li>Boolean</li>
          <li>File</li>
        </ul>
      </div>
    </SurveySelectorWrapper>
  );
};

const SurveySelectorWrapper = styled.div`
  text-align: center;
  ul {
    list-style: none;
    cursor: pointer;
  }
  li {
    padding: 0.5em;
    border-bottom: 1px solid var(--mainDarking);
    &:hover {
      background: var(--mainGrey);
    }
    &:focus {
      background: var(--mainGreen);
    }
  }
`;

export default SurveySelector;
