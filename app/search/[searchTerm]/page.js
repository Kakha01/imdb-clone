import Results from '@/components/Results';
import React from 'react'

export default async function SearchPage({params}) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`);

  if(!res.ok) {
    throw new Error("Error fetching data");
}
    const data = await res.json();
    const movies = data.results;

  return (
    <div>
        {movies && movies.length === 0 ? <h1 className="text-2xl text-center mt-16">No results found</h1> : <h1 className="text-2xl text-center mt-16">Search results for: {params.searchTerm}</h1>}

        {movies && <Results results={movies}/>}
    </div>
  )
}
