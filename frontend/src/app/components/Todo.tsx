"use client";

import React from "react";

import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { DotIcon } from "@/components/icons/DotIcon";
import { BASE_API_URL } from "@/constants";

enum Action {
  DELETE = "DELETE",
  UPDATE = "PUT",
}

export const Todo = ({ title, id, completed, createdAt, updatedAt }: Todo) => {
  const onClick = (event: MouseEvent, id: string, action: Action) => {
    event.preventDefault();
    event.stopPropagation();

    fetch(BASE_API_URL + "/todo/" + id, {
      method: action,
      ...(action === Action.UPDATE && {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }

        return res.json();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
  };

  return (
    <details
      id={id}
      className="py-4 text-black cursor-pointer"
    >
      <summary className="flex items-center text-xl border-gray-500 border-b px-4 pb-2">
        <CheckCircleIcon
          onClick={(e: any) => onClick(e, id, Action.UPDATE)}
          className="w-6 h-6 mr-4 mark-complete cursor-pointer"
          fill={completed ? "#10B981" : "rgba(0,0,0,0.2)"}
        />
        {title}
        <DotIcon className="w-6 h-6 ml-auto" />
      </summary>

      <div className="flex flex-col py-4 bg-white-600 cursor-auto">
        <p className="px-4 py-2 rounded-md">
          <b>Completed: </b>
          {completed ? "Completed" : "Not Completed"}
        </p>

        {completed && (
          <p className="px-4 py-2 rounded-md">
            <b>Completed At: </b>
            {prepareDateForView(updatedAt as string)}
          </p>
        )}

        <p className="px-4 py-2 rounded-md">
          <b>Created At: </b>
          {prepareDateForView(createdAt)}
        </p>
        <button
          onClick={(e: any) => onClick(e, id, Action.DELETE)}
          className="bg-danger-500 transition hover:scale-95 text-danger px-4 py-2 mt-4 mx-4 rounded-md"
        >
          Delete
        </button>
      </div>
    </details>
  );
};

function prepareDateForView(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
