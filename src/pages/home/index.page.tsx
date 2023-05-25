import { useContext } from "react";
import { FormLogin } from "./components/form";
import { Video } from "./styles";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Video src="/assets/video.mp4" autoPlay muted loop />
      <FormLogin />
    </div>
  );
}
