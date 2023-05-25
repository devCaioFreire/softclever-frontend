import { useContext, FormEvent, useState } from "react";
import Link from "next/link";
import { Container, FooterContainer, FormContainer } from "./styles.form";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";

export const FormLogin = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warning("Preencha os campos!");
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };

    await signIn(data);
    setLoading(false);
  }
  // function handleLogin(e: any) {
  //   e.preventDefault();
  //   router.push("/dashboard");
  // }

  return (
    <Container>
      <h1>Bem vindo, Adonis!</h1>
      <p>Plataforma desenvolvida para processo seletivo.</p>

      <FormContainer onSubmit={handleLogin}>
        <div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Entrar</button>
        </div>
      </FormContainer>
      <FooterContainer>
        <p>
          Não tem uma conta? <Link href="/register">Registre-se aqui</Link>
        </p>
      </FooterContainer>
    </Container>
  );
};
