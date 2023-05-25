import { FormRegister } from "./components/form";
import { Video } from "./styles";

export default function Register() {
  return (
    <div>
      <Video src="/assets/video.mp4" autoPlay muted loop />
      <FormRegister />
    </div>
  );
}
