import Image from "next/image";

async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json();
}

export default async function Movie({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row  items-center content-center max-w-6xl mx-auto md:space-x-6">
            <Image 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className="rounded-lg"  
            alt={movie.title || movie.name || movie.original_title}
            />
            <div className="p-2 space-y-2">
            <h2 className="text-lg sm:text-xl md:text-2xl mg-3 font-medium">{movie.title || movie.name || movie.original_title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500"><span className="font-medium">Overview: </span>{movie.overview}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500"><span className="font-medium">Release Date: </span>{movie.release_date}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500"><span className="font-medium">Popularity: </span>{movie.popularity}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500"><span className="font-medium">Vote Average: </span>{movie.vote_average}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500"><span className="font-medium">Vote Count: </span>{movie.vote_count}</p>

            </div>
        </div>
    </div>
  )
}
