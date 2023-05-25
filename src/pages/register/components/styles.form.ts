import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  > h1,
  p {
    color: white;
    text-shadow: 4px 0px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 50%;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        color: white;
        font-size: 0.75rem;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.9);
      }

      input {
        background-color: transparent;
        backdrop-filter: blur(5px);
        border: 1px solid #fff;
        border-radius: 8px;
        padding: 0.5rem;
        color: white;
        outline: none;
        box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    backdrop-filter: blur(5px);
    font-weight: bold;
    cursor: pointer;
    box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const FooterContainer = styled.div`
  p {
    margin-top: 1rem;
    font-size: 0.875rem;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
`;
