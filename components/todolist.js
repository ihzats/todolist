import React from 'react'
import prisma from '@/lib/prisma'
import Link from 'next/link';
import Card from './card';

async function getTodoList() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      todo: true,
      date: true
    }
  })
  return data;
}

export default async function TodoList() {
  const todoList = await getTodoList()

  return (
    <div className="bg-gray-800 h-screen p-4 text-slate-100 space-y-4">
      <h1 className="text-xl">TodoList</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:first-letter:cols-4">
        <Card todoList={todoList} />

      </div>
    </div>
  )
}
