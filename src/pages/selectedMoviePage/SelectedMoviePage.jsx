import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesContext from '../../contexts/movies/MoviesContext'
import Section1 from './Section1'
import Section2 from './Section2'
import SectionSkeleton from './SectionSkeleton'

const SelectedMoviePage = () => {

  const { state, getSelectedMovie } = useContext(MoviesContext)
  const { id } = useParams()

  useEffect(() => {
    getSelectedMovie(id)
    console.log(state)
  }, [id, getSelectedMovie, state])

  return (
    <>
      {state.selectedMovie ? (
        <>
          <Section1
            title={state.selectedMovie.title}
            description={state.selectedMovie.overview}
            genres={state.selectedMovie.genres}
            background={`https://image.tmdb.org/t/p/w500/${state.selectedMovie.poster_path}`} />
          <Section2 id={id} />
        </>
      ) : (
        <SectionSkeleton />
      )}
    </>
  )
}

export default SelectedMoviePage