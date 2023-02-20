import styled from "styled-components";

export const CardContainer = styled.div`
  width: 384px;
  border-radius: 10px;
  outline: 1px solid #eaeaea;

  img {
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    line-height: 1.4;
  }

  p,
  span {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 75%;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
