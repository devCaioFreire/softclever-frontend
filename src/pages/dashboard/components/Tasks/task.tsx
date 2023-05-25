import { Button, TasksContainer } from "./styles.tasks";
import { CgTrash } from "react-icons/cg";
import { AiTwotoneEdit } from "react-icons/ai";
import { api } from "@/services/apiClient";
import Link from "next/link";
import Router from "next/router";

interface TaskProps {
  id: string;
  title: string;
  description: string;
}

export const Task = ({ id, title, description }: TaskProps) => {
  async function handleDeleteTask() {
    await api.delete(`/tasks${id}`);
    window.location.reload();
  }

  // function handleEditTask() {
  //   Router.push(`/tasks${id}`);
  // }

  return (
    <TasksContainer>
      <ul>
        <li>{title}</li>
        <div>
          {/* <Button title="Editar" onClick={handleEditTask}>
            <AiTwotoneEdit size={20} />
          </Button> */}

          <Button title="Deletar" onClick={handleDeleteTask}>
            <CgTrash size={20} />
          </Button>
        </div>
      </ul>

      <label>
        Descrição:
        <p>{description}</p>
      </label>
    </TasksContainer>
  );
};
