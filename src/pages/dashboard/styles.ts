import styled from "styled-components";

export const Video = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
  filter: blur(5px);
`;

export const LayoutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
