"use client";

import React, { useEffect, useState } from "react";

import { BASE_API_URL } from "@/constants";

import { Todo } from "@/components/Todo";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { ListIcon } from "@/components/icons/ListIcon";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTodos() {
      return fetch(BASE_API_URL + "/todo")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((todo: any) => {
            todo.id = todo._id;

            delete todo._id;
          });
          setTodos(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong!");
        });
    }

    getTodos();
  }, []);

  return (
    <details
      className="w-full"
      open
    >
      <summary className="flex border-1 shadow cursor-pointer items-center w-full bg-primary-800 p-4 rounded-md">
        <ListIcon className="basis-10" />
        <span className="font-bold ml-4 text-xl w-full">Your todos</span>
        <ChevronIcon className="w-8 expand" />
      </summary>

      <div
        className={`flex shadow flex-col text-black max-h-[30rem] overflow-scroll bg-white-600 mt-4 rounded-md ${
          loading || !todos.length
            ? "justify-center items-center text-2xl h-60"
            : ""
        }`}
      >
        {loading ? (
          <p>Loading...</p>
        ) : !todos.length && !loading ? (
          <p>No tasks today!</p>
        ) : (
          todos.map(({ id, title, completed, createdAt, updatedAt }) => (
            <Todo
              key={id}
              id={id}
              title={title}
              completed={completed}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          ))
        )}
      </div>
    </details>
  );
};
