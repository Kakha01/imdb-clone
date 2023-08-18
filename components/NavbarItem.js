"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link href={`/?genre=${param}`} className={`m-2 hover:text-yellow-600 dark:hover:text-yellow-500 font-semibold p-2 ${
        genre && genre === param ? "underline underline-offset-8 decoration-4 decoration-yellow-600 dark:decoration-yellow-500 rounded-lg" : ""
      }`}>
        {title}
      </Link>
    </div>
  )
}

