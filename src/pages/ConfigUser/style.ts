import styled from "styled-components";

interface Props {
  bg: boolean
}

export const Container = styled.div<Props>`
  padding: 0 23px 50px 23px;

  background-color: ${props=>props.bg? "white" : "#252329"};
  min-height: 100vh;
`;
