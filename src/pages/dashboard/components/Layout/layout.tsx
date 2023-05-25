import { useEffect, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { Container, FormContainer } from "./styles.layout";
import { Task } from "../Tasks/task";
import Link from "next/link";
import { SSRAuth } from "@/utils/SSRAuth";
import { api } from "@/services/apiClient";

type TaskProps = {
  id: string;
  title: string;
  description: string;
};

interface TaskListProps {
  taskList?: TaskProps[];
}

export function Layout({ taskList }: TaskListProps) {
  const [task, setTask] = useState(taskList || []);
  console.log(taskList);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/tasks");
        setTask(response.data);
      } catch (error) {
        console.error("Erro ao buscar as tasks:", error);
      }
    }

    fetchTasks();
  }, []);

  return (
    <Container>
      <div>
        <h1>Gestão de Tarefas</h1>
        <Link href={"/dashboard/newtask"} title="Adicionar">
          <MdAddToPhotos size={24} />
        </Link>
      </div>
      <FormContainer>
        {task.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.825rem",
            }}
          >
            <p>Parece que você está sem tarefas {":("}</p>
            <p>Comece a gerir suas tarefas clicando no botão acima!</p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {task.map((item) => (
              <Task key={item.id} {...item} />
            ))}
          </div>
        )}
      </FormContainer>
    </Container>
  );
}

export const getServerSideProps = SSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
