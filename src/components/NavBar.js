import React, { useState } from "react";
import styled from "styled-components";
import { ButtonContainer } from "../utils/Button";

const NavBar = () => {
  const [nav, setNav] = useState(false);
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
      <div class={`icon ${nav ? "show-nav" : ""}`} onClick={() => setNav(true)}>
        <i class="fa fa-bars"></i>
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
  .icon {
    display: none;
    width: 2em;
    font-size: 2em;
  }

  .nav-button {
    flex-grow: 1;
    text-align: center;
  }

  @media (max-width: 850px) {
    .nav-button {
      display: none;
    }
    .icon {
      display: block;
    }
    .nav-title {
      text-align: left;
      margin-left: 1.7em;
    }
    .show-bar:after {
    }
  }
`;

export default NavBar;
