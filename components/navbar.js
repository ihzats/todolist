"use client"

import Navlink from './navlink';

export default function Navbar() {
  return (
    <div className="w-full bg-blue-950">
      <div className="p-5 border-b-[1px] border-b-gray-500">
        <ul className="container wrapper flex items-center gap-3 text-slate-100 space-x-4 hover:text-yellow">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/todo-list">Todolist</Navlink>
        </ul>
      </div>
    </div>
  )
}
