import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (

        <Link href={address} className="flex hover:text-amber-600 items-center space-x-2">
            <Icon className='h-6 w-6 sm:h-5 sm:w-5'/>
            <p className="hidden sm:inline my-2 font-medium self align-bottom">{title}</p>
        </Link>
  )
}
