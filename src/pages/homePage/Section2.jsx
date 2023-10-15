import { Box, Grid } from '@mui/material'
import MovieCard from '../../components/MovieCard'
import PropTypes from 'prop-types'

const Section2 = ({ state }) => {


  return (
    <Box sx={{
      my: 4,
      mx: '24px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Grid
        justifyContent='center'
        alignItems='center'
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {state.movies.map((movie, index) => {
          return (
            <Grid
              item
              xs={2} sm={4} md={3}
              key={index}>
              <Box>
                <MovieCard background={movie.poster_path} moviesId={movie.id} />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

Section2.propTypes = {
  state: PropTypes.object.isRequired,
}

export default Section2