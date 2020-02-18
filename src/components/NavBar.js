import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "../utils/Button";

const NavBar = () => {
  return (
    <NavWrapper>
      <div className="nav-title">
        <h2>SurveyBuilder</h2>
      </div>
      <div className="nav-button">
        <ButtonContainer paddingTopBottom="0.8rem" paddingLeftRight="1.9rem">
          Login
        </ButtonContainer>
        <ButtonContainer
          background
          hover
          paddingTopBottom="0.8rem"
          paddingLeftRight="1.9rem"
        >
          Signup
        </ButtonContainer>
      </div>
      <hr />
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  height: 6rem;
  border-bottom: 1px solid #dcdce4;
  justify-content: flex-end;
  .nav-title {
    flex-grow: 5;
    font-style: italic;
    padding-left: 15em;
    color: var(--mainPrimary);
  }

  .nav-button {
    flex-grow: 2;
  }
`;

export default NavBar;
