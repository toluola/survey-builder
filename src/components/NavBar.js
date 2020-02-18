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
  background: var(--mainWhite);
  z-index: 100;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 6rem;
  border-bottom: 1px solid #dcdce4;
  .nav-title {
    flex-grow: 1;
    font-style: italic;
    text-align: center;
    color: var(--mainPrimary);
  }

  .nav-button {
    flex-grow: 1;
    text-align: center;
  }
`;

export default NavBar;
