import { SSRAuth } from "@/utils/SSRAuth";
import { Layout } from "./FormTask/layout";
import { LayoutContainer, Video } from "../styles";

export default function NewTask() {
  return (
    <div>
      <Video src="/assets/dashboardVideo.mp4" autoPlay muted loop />
      <LayoutContainer>
        <Layout />
      </LayoutContainer>
    </div>
  );
}

export const getServerSideProps = SSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
