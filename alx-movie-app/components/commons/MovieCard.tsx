import { MovieProps } from "@/interfaces"
import Image from "next/image"


const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-lg mb-4">
        <Image
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          src={posterImage}
          width={300}
          height={400}
          alt={title}
          priority
        />
        <span className="absolute top-2 right-2 bg-[#E2D609] text-black text-xs font-bold px-3 py-1 rounded-full shadow">{releaseYear}</span>
      </div>
      <div className="w-full text-center">
        <p className="text-lg md:text-xl font-semibold truncate" title={title}>{title}</p>
      </div>
    </div>
  )
}

export default MovieCard
