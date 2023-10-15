import { useContext, useEffect } from 'react'
import MoviesContext from '../../contexts/movies/MoviesContext'
import Section1 from './Section1'
import SectionSkeleton from './SectionsSkeleton'
import Section2 from './Section2'

const HomePage = () => {

   const { state, getMovies } = useContext(MoviesContext)

   useEffect(() => {
      getMovies()
   }, [getMovies])

   return (
      <>
         {state.movies.length > 0 ? (
            <>
               <Section1 title={state.movies[15].title} description={state.movies[15].overview} background={`https://image.tmdb.org/t/p/w500/${state.movies[15].poster_path}`} />
               <Section2 state={state} />
            </>
         ) : (
            <SectionSkeleton />
         )}
      </>
   )
}

export default HomePage