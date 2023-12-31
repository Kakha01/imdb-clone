import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-6 dark:bg-zinc-900 bg-amber-100/50 lg:text-lg p-4">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
