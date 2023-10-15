import { Card, CardMedia, CardActionArea } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieCard = ({ background, moviesId }) => {


  return (
    <>
      <Card sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: { xs: '100%', md: '216.7px', lg: '337.7px', },
        height: { xs: '250px', md: '325px', lg: '484px', },
        borderRadius: 1,
      }}
      >
        <CardActionArea
          component={Link}
          to={`/${moviesId}`}
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: { xs: '100%', md: '216.7px', lg: '337.7px', },
            height: { xs: '250px', md: '325px', lg: '484px', },
            borderRadius: 1,
          }}
        >
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
        </CardActionArea>
      </Card >
    </>
  )
}

MovieCard.propTypes = {
  background: PropTypes.string.isRequired,
  moviesId: PropTypes.number.isRequired,
}

export default MovieCard