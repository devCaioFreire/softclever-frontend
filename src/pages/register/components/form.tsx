import { useState, FormEvent, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { Container, FooterContainer, FormContainer } from "./styles.form";
import { toast } from "react-toastify";

export const FormRegister = () => {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.warning("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };

    await signUp(data);
    setLoading(false);
  }

  return (
    <Container>
      <h1>Bem vindo, Adonis!</h1>
      <p>Plataforma desenvolvida para processo seletivo.</p>

      <FormContainer onSubmit={handleSignUp}>
        <div>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <button type="submit">Registrar</button>
        </div>
      </FormContainer>
      <FooterContainer>
        <p>
          Já tem uma conta? <Link href="/">Acesse por aqui</Link>
        </p>
      </FooterContainer>
    </Container>
  );
};
