import styled from "styled-components";

interface ButtonTaskProps {
  update?: boolean;
}

export const TasksContainer = styled.div<ButtonTaskProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #fff;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  font-weight: bold;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  p {
    color: #e1e1e6;
    font-weight: 500;
  }

  > button {
    position: absolute;
    top: 20%;
    right: 3.5%;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #00b37e;
    }

    @media screen and (min-width: 680px) {
      right: 2.5%;
      top: 6%;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    > div {
      display: flex;
      gap: 0.5rem;
    }

    li {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export const Button = styled.button<ButtonTaskProps>`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => (props.update ? "#1EF7D0" : "#fc4737")};
  }
`;
