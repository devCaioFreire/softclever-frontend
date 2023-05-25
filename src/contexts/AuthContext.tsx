import { createContext, ReactNode, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};

type ChildrenProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@AuthToken");
    Router.push("/");
  } catch (error) {
    console.log(error);
  }
}

export function AuthProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "@AuthToken": token } = parseCookies();

    if (token) {
      api
        .get("/userinfo")
        .then((response) => {
          const { id, name, email } = response.data;

          setUser({ id, name, email });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { id, name, token } = response.data;
      setCookie(undefined, "@AuthToken", token, {
        maxAge: 60 * 60 * 24 * 30, // 1 Month
        path: "/",
      });

      setUser({ id, name, email });

      // Allow that all requests use the token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success(`Bem vindo, ${name}`);

      // Redirect to Dashboard
      Router.push("/dashboard");
      // console.log(response);
    } catch (err) {
      toast.error("Erro ao acessar");
      console.log(err);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });

      toast.success("Conta criada com sucesso");

      Router.push("/");
    } catch (err) {
      toast.error("Erro ao cadastrar");
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
