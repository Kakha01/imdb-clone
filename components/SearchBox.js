"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);

  }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5 ">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search movies..." className="flex-1 h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent" />

            <button disabled={!search} type="submit" className="dark:text-yellow-500 text-yellow-600 disabled:text-gray-400 dark:bg-zinc-900 bg-amber-100/50 py-1 px-3 ml-2 rounded-sm">Search</button>
        </form>
    </div>
  )
}
