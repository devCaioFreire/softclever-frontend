import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
  overflow: auto;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
      margin-right: 1rem;
    }

    a {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: #00b37e;
      }
    }

    @media screen and (min-width: 681px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: #fff;
      text-shadow: 1px 2px rgba(0, 0, 0, 0.3);
    }

    input,
    textarea {
      padding: 0.5rem;
      border-radius: 8px;
      background-color: transparent;
      border: 1px solid #fff;
      outline: none;
      color: #fff;
    }

    textarea {
      height: 25vh;
      resize: none;
    }
  }

  button {
    background: rgba(255, 255, 255, 0.5);
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 0;
    vertical-align: middle;

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;
