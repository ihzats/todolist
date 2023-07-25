import { Navbar } from '@/components';
import React from 'react'
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function getTodo(id) {
    const data = await prisma.todo.findUnique({ where: { id: +id } });

    return data;
}

export default async function Detail({ params }) {
    const { id } = params;
    const todoList = await getTodo(id);

    return (
        <main>
            <Navbar />

            <div className="bg-gray-800 h-screen p-4">
                <div className="text-slate-100 md:w-[50vw] lg:w-[30vw]">
                <div key={todoList.key} className="bg-gray-700 p-4 relative">
                    <div className="space-y-2">
                        <h1 className="text-2xl">{todoList.todo}</h1>
                        <p>{todoList.date}</p>
                        <h3 className="text-lg">time : {todoList.time}</h3>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}
