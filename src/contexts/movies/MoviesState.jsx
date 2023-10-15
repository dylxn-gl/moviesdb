import { useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import MoviesReducer from './MoviesReducer'
import MoviesContext from './MoviesContext'
import axios from 'axios'

const MoviesState = ({ children }) => {
  const initialState = {
    movies: [],
    selectedMovie: null
  }

  const [state, dispatch] = useReducer(MoviesReducer, initialState)
  const [pageNumber, setPageNumber] = useState(1)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA2YmY2ZTA5ZGQzNTQ5ZmUwZGQxNGIxNGE4MDMxMSIsInN1YiI6IjY1MjgyMTRkZWE4NGM3MDBhZWYxNjc5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Es_Q-guJTFl6tnADxYmHogSNbJBDwGXWdK4AA8pqJD4',
    },
  }

  const getMovies = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc`
    const res = await axios.get(url, options)
    dispatch(
      {
        type: 'GET_MOVIES',
        payload: res.data.results
      }
    )
  }

  const getSelectedMovie = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc`
    const res = await axios.get(url, options)
    dispatch(
      {
        type: 'GET_SELECTEDMOVIE',
        payload: res.data
      }
    )
  }

  return (
    <MoviesContext.Provider value={{ state, getMovies, getSelectedMovie, pageNumber, setPageNumber }}>
      {children}
    </MoviesContext.Provider>
  )
}

MoviesState.propTypes = {
  children: PropTypes.node
}

export default MoviesState