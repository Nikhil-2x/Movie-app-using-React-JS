import { motion } from "framer-motion";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <motion.div
      className="movie-card"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
        className="rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-white font-bold">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>⦿</span>
          <p className="lang">{original_language}</p>
          <span>⦿</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
