import { GET_MOVIES, GET_SELECTEDMOVIE } from '../type'

const MoviesReducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: payload
            }
        case GET_SELECTEDMOVIE:
            return {
                ...state,
                selectedMovie: payload
            }
        default:
            return state;
    }
}

export default MoviesReducer