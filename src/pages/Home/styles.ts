import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 7rem;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6.25rem 0 2.5rem 0;

  h2 {
    font-size: 2rem;
    line-height: 1.4;
  }
`;

interface ToggleViewProps {
  View: "list" | "map";
}

export const ToggleView = styled.div<ToggleViewProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  outline: 1px solid #eaeaea;

  > button:nth-child(1) {
    background-color: ${(props) => props.View === "list" && props.theme.purple};
    color: ${(props) => props.View === "list" && props.theme.white};
  }

  > button:nth-child(2) {
    background-color: ${(props) => props.View === "map" && props.theme.purple};
    color: ${(props) => props.View === "map" && props.theme.white};
  }
`;

export const ToggleButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.25rem 1.5rem;
  color: ${(props) => props.theme.purple};
  border-radius: 5px;

  transition: all 0.3s;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 24px;
`;
