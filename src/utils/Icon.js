import styled from "styled-components";

export const IconWrapper = styled.div`
  background-image: url(${props => props.url});
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 7em;
  display: inline-block;
  content: "";
  background-size: cover;
  background-repeat: no-repeat;
`;
