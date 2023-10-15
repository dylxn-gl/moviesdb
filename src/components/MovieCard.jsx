import { Card, CardMedia } from '@mui/material'
import PropTypes from 'prop-types'

const MovieCard = ({ background }) => {
  return (
    <>
      <Card sx={{
        position: 'relative',
        zIndex: -1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: { xs: '100%', md: '216.7px', lg: '337.7px', },
        height: { xs: '250px', md: '325px', lg: '484px', },
        borderRadius: 1,
      }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${background}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -2,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
          }} />
      </Card >
    </>
  )
}

MovieCard.propTypes = {
  background: PropTypes.string.isRequired,
}

export default MovieCard