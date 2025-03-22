import { useEffect, useState } from 'react'
import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {

  const [searchTerm,  setSearchTerm] = useState("")
  const [errormessage, setErrormessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(()=>setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchmovies = async(query = '')=>{
    setIsLoading(true);
    setErrormessage("")

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint,API_OPTIONS)
      // alert(response)
      if(!response.ok){
        throw new Error('Failed to fetch movies data..')
      }

      const data = await response.json();

      // console.log(data);

      if(data.Response === 'False'){
        setErrormessage(data.Error || "Failed to fecth movies data..")
        setMovieList([]);
        return;
      }
      
      setMovieList(data.results || []);

    } catch (error) {
      console.log(`Error fetching movies:${error}`);
      setErrormessage("Error fetching movies,Pls try again later..");
    } finally{
      setIsLoading(false);

    }
  }

  
  useEffect(() => {
    fetchmovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  

  return (
    <>
      <main>
        <div className="pattern" />

        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Search the <span className="text-gradient">Movies </span>You'll
              Enjoy Without the Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2 className="mt-[40px] text-gradient">Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : errormessage ? (
              <p className="text-red-500">{errormessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App
