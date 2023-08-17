"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const {systemTheme, theme, setTheme} = useTheme();  
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => setMounted(true), []);


  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
        {mounted && currentTheme === "dark" ?
        (<SunIcon className='h-5 w-5 hover:text-amber-500 cursor-pointer' onClick={() => setTheme("light")} />) : 
        (<MoonIcon className='h-5 w-5 hover:text-amber-500 cursor-pointer' onClick={() => setTheme("dark")} />)}
    </>
  )
}
