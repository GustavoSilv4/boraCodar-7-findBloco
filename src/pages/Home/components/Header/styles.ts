import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 33.25rem;
  display: flex;
  background-color: ${(props) => props.theme["gray-100"]};
`;

export const HeaderImageRight = styled.div`
  height: 33.25rem;
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 0;
`;

export const HeaderImageLeft = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
`;

export const Content = styled.div`
  width: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-size: clamp(0.625rem, 0.4167rem + 0.6667vw, 1rem);
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.25rem;

    color: ${(props) => props.theme["red-200"]};
  }

  h1 {
    max-width: 40rem;
    font-size: clamp(1rem, -0.1111rem + 3.5556vw, 3rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.5rem;

    color: ${(props) => props.theme["gray-900"]};

    span {
      font-size: clamp(1rem, -0.1111rem + 3.5556vw, 3rem);
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 1.5rem;
  padding: 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
  outline: 1px solid #eaeaea;

  > label {
    display: flex;
    align-items: center;

    svg {
      position: relative;
      left: 35px;
    }
  }

  > label input,
  select,
  option {
    width: 21.75rem;
    font-size: 1rem;
    padding: 0.75rem 2.5rem;
    background-color: #f4f4ff;
    border: none;
    border-radius: 5px;
    ::placeholder,
    :disabled,
    :invalid {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    all: unset;
    cursor: pointer;
    width: max-content;
    padding: 0.75rem 2rem;
    border-radius: 5px;

    font-size: 0.875rem;
    font-weight: 700;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    :hover {
      background-color: rgba(98, 70, 234, 0.9);
    }

    :disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme["gray-300"]};
    }
  }
`;
