"use client";

import React, { useEffect, useState } from "react";

import { PlusIcon } from "@/components/icons/PlusIcon";
import { BASE_API_URL } from "@/constants";

export const Input = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState<Partial<Todo> | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (text === "" || !text) {
      return alert("Please enter text!");
    }

    setTodo({
      title: text,
    });
  };

  useEffect(() => {
    if (todo) {
      fetch(BASE_API_URL + "/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then((res) => {
          if (res.status === 201) {
            setText("");
            setTodo(null);
          }

          window.location.reload();
          return res.json();
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong!");
        });
    }
  }, [todo]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex w-full py-2 px-2 rounded-md"
    >
      <input
        type="text"
        name="task"
        placeholder="Add new task"
        className="w-full px-4 outline-none text-black"
        onChange={(e) => setText(e.target.value)}
      />

      <div
        onClick={(event) => handleSubmit(event)}
        className="bg-primary w-12 h-12 flex cursor-pointer items-center justify-center rounded-md"
      >
        <PlusIcon />
      </div>
    </form>
  );
};
