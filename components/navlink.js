"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navlink({ href, children }) {
    const path = usePathname();
    const active = href === path;


    return (
        <Link href={href} className={active ? "font-bold" : ""}>{children}</Link>
    )
}
