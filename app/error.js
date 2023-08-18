"use client"
import { useEffect } from "react"
export default function Error({ error, reset }) {
    useEffect(() => { 
        console.log(error);
    }, [error]);
  return (
    <div className="flex flex-col items-center justify-center mt-16 gap-3">
        <h1 className="text-2xl">Something went wrong!</h1>
        <button onClick={() => reset()} className="dark:bg-zinc-900 bg-amber-100/50 py-2 px-3 rounded-md dark:hover:text-yellow-400 hover:text-yellow-600 ">Try again</button>
    </div>
  )
}
