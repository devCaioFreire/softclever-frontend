import GlobalStyles from "@/styles/globals";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { TaskProvider } from "@/contexts/TaskContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <GlobalStyles />
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}
