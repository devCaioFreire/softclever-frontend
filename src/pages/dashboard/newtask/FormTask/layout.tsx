import { FormEvent, useState, useContext } from "react";
import { AiOutlineRollback, AiOutlineCheckCircle } from "react-icons/ai";
import { Container, FormContainer } from "./styles.layout";
import Link from "next/link";
import { toast } from "react-toastify";
import { TaskContext } from "@/contexts/TaskContext";

export function Layout() {
  const { registerTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleRegisterTask(event: FormEvent) {
    event.preventDefault();

    if (title === "" || description === "") {
      toast.warning("Preencha todos os campos!");
      return;
    }

    let data = {
      title,
      description,
    };

    await registerTask(data);
  }

  return (
    <Container>
      <div>
        <h1>Adicione suas tarefas</h1>
        <Link href={"/dashboard"} title="Voltar">
          <AiOutlineRollback size={24} />
        </Link>
      </div>
      <FormContainer onSubmit={handleRegisterTask}>
        <div>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">
          <AiOutlineCheckCircle size={26} />
        </button>
      </FormContainer>
    </Container>
  );
}
