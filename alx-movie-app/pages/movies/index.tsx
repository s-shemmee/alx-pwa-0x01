import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

interface MProps {
  movies: MoviesProps[]
}

const Movies: React.FC<MProps> = () => {
  const [page, setPage] = useState<number>(1)
  const [year, setYear] = useState<number | null>(null)
  const [genre, setGenre] = useState<string>("All")
  const [movies, setMovies] = useState<MoviesProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const genreOptions = [
    { label: 'All', value: '' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Action', value: 'Action' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'Sci-Fi', value: 'Sci-Fi' },
  ];

  const fetchMovies = useCallback(async () => {
    setLoading(true)
    const response = await fetch('/api/fetch-movies', {
      method: 'POST',
      body: JSON.stringify({
        page,
        year,
        genre: genre === 'All' ? '' : genre
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    if (!response.ok) {
      setLoading(false)
      return setMovies([]);
    }
    const data = await response.json()
    const results = data.movies
    setMovies(results)
    setLoading(false)
  }, [page, year, genre])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171D22] to-[#23272F] text-white px-2 md:px-8 lg:px-24">
      <div className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setYear(Number(event.target.value))}
            className="border-2 border-[#E2D609] outline-none bg-[#23272F] px-4 md:px-8 py-2 rounded-full w-full md:w-auto text-white shadow focus:ring-2 focus:ring-[#E2D609]"
            value={year || ''}
          >
            <option value="">All Years</option>
            {
              [2025,2024,2023,2022,2021,2020,2019].map((year: number) => (
                <option value={year} key={year}>{year}</option>
              ))
            }
          </select>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setGenre(event.target.value)}
            className="border-2 border-[#E2D609] outline-none bg-[#23272F] px-4 md:px-8 py-2 rounded-full w-full md:w-auto text-white shadow focus:ring-2 focus:ring-[#E2D609]"
            value={genre}
          >
            {genreOptions.map((g) => (
              <option value={g.value} key={g.value}>{g.label}</option>
            ))}
          </select>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-tight">
          {year ? year : 'All Years'} {genre ? genre : 'Movies'}
        </h1>
        {/* Movies output */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-6">
          {
            movies && movies.length > 0 ? (
              movies.map((movie: MoviesProps, key: number) => (
                <div key={key} className="bg-[#23272F] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-200 border border-[#23272F] hover:border-[#E2D609] p-2 flex flex-col items-center">
                  <MovieCard
                    title={movie?.titleText.text}
                    posterImage={movie?.primaryImage?.url}
                    releaseYear={movie?.releaseYear.year}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-xl py-20">No movies found for this filter.</div>
            )
          }
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <Button title="Previous" action={() => setPage(prev => prev > 1 ? prev - 1 : 1)} />
          <Button title="Next" action={() => setPage(page + 1)} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default Movies;
