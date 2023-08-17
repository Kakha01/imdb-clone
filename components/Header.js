import Link from "next/link";
import MenuItem from "./MenuItem";
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto py-5 px-3">
        <div className="flex space-x-4 lg:space-x-6">
            <MenuItem title='HOME' address='/' Icon={HomeIcon} />
            <MenuItem title='ABOUT' address='/about' Icon={InformationCircleIcon} />
        </div>

        <div className="flex items-center space-x-3">
            <DarkModeSwitch />
            <Link href="/">
                <h2 className="text-2xl space-x-1"><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span><span className="text-xl hidden sm:inline">Clone</span></h2>
            </Link>
        </div>
    </div>
  )
}
