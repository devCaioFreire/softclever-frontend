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
    }

    button {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: #00b37e;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const FormContainer = styled.div`
  margin-top: 1rem;
  padding-right: 0.5rem;
  max-height: 50vh;
  overflow: auto;

  p {
    color: #fff;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    font-weight: bold;
  }
`;
