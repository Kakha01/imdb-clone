import Image from "next/image";
import Link from "next/link";

export default function Card({result}) {
  return (
    <div className="cursor-pointer sm:dark:hover:shadow-zinc-700 sm:hover:shadow-zinc-400 sm:shadow-md rounded-sm sm:border sm:border-zinc-400 sm:dark:border-zinc-700 transition-shadow duration-200 sm:m-2 group">
      <Link href={`/movie/${result.id}`}>
        <Image
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        width={500}
        height={300}
        alt={result.original_title || result.original_name}
        className="sm:rounded-t-sm overflow-hidden group-hover:opacity-90 transition-opacity duration-200 mx-auto"
        placeholder="blur"
        blurDataURL="/blurPlaceholder.png"
        />
      </Link> 
      <div className="p-2">
        <h2 className="font-semibold line-clamp-1 text-slate-900 dark:text-yellow-400 ">{result.title || result.original_title || result.name}</h2>
        <p className="line-clamp-2">{result.overview}</p>
      </div>
      {result.release_date || result.first_air_date ? (<p className="bg-yellow-500 px-2 sm:rounded-b-sm text-black font-semibold py-2 sm:py-0">Release Year: {result.release_date.slice(0, 4) || result.first_air_date.slice(0, 4)}</p>) : ""}
    </div>
  )
}
