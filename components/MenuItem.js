import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (

        <Link href={address} className="flex hover:text-amber-600 items-center space-x-2">
            <Icon className='h-6 w-6 '/>
            <p className="hidden sm:inline my-2 ">{title}</p>
        </Link>
  )
}
