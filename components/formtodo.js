"use client"

import React from 'react'
import Input from './input'
import { useRouter } from 'next/navigation';

export default function FormTodo() {
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/todos", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todo: formData.get("todo"),
        date: formData.get("date"),
        time: formData.get("time"),
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    e.target.reset();
    router.push("/todo-list")
  }

  return (
    <div className="bg-gray-800 h-screen p-4">
      <h1 className="text-slate-100 text-center text-xl mb-4">From Todo</h1>
      <div className="grid grid-cols-1 place-items-center" >
        <form onSubmit={handleSubmit} className="bg-gray-700 space-y-4 p-4 2[80vw] md:w-[40vw]">
          <div className="flex flex-col gap-4">
            <label className="text-slate-100">Todo</label>
            <Input type="text" name="todo" placeholder="add your task" />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-slate-100">Date</label>
            <Input type="date" name="date" />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-slate-100">Time</label>
            <Input type="time" name="time" />
          </div>
          <div className="text-center pt-4">
            <button className="bg-amber-500 rounded-md hover:bg-amber-600 hover:text-slate-200 text-slate-100 px-6 py-2" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
