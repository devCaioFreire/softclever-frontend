import { createContext, ReactNode, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";

type TaskProps = {
  title: string;
  description: string;
};

type TaskContextData = {
  registerTask: (credentials: TaskProps) => Promise<void>;
  updateTask: (credentials: TaskProps) => Promise<void>;
};

type ChildrenProps = {
  children: ReactNode;
};

export const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: ChildrenProps) {
  async function registerTask({ title, description }: TaskProps) {
    try {
      const response = await api.post("/register/task", {
        title,
        description,
      });

      toast.success("Tarefa registrada com sucesso");

      Router.push("/dashboard");
    } catch (err) {
      toast.error("Erro ao cadastrar nova tarefa");
      console.log(err);
    }
  }

  async function updateTask({ title, description }: TaskProps) {
    try {
      const response = await api.put("/tasks/:taskID", {
        title,
        description,
      });
    } catch (err) {
      toast.error("Erro ao editar tarefa");
      console.log(err);
    }
  }
  

  return (
    <TaskContext.Provider value={{ registerTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}
