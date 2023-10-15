import { Box, Typography, Button } from '@mui/material'
import sizes from '../../utils/fontSizes'
import PropTypes from 'prop-types'

const Section2 = ({ id }) => {

  return (
    <Box>

      <Box sx={{
        my: 8,
        mx: { xs: 4, lg: 12 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
        <Typography sx={{ fontSize: sizes.font32, color: '#17e9e1', display: { xs: 'flex', lg: 'block' }, flexDirection: { xs: 'column', md: 'row' }, }}>Reviews <Box component={'span'} color='#ffffff'> | Talk about the movie</Box></Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>

          {id === '1160164' ? <Typography sx={{ padding: 2, border: 'none', outline: 'none', bgcolor: '#cffffd', color: '#000000', width: '100%', borderRadius: '8px 8px 8px 0', }}>Puntuar esta pelicula es complicado, ademas de ser una pelicula hermosa, la compañia tambien lo fue, tu lo eres... Taylor Swift tiene canciones hermosas, casi tan hermosas como tu sonrisa, sonrisa que no deje de ver en el cine. Ella tiene infinidad de canciones, tu tienes mi corazon, y me gustaria hacer realidad muchas de esas canciones contigo, bueno, solo las canciones lindas, no quiero que escribas mi nombre en el espacio en blanco de la lista de tus ex novios, pero, si quiero tener una historia de amor contigo. No se si te lo he dicho, creo que si, pero igual he escrito esto solo para recordartelo, te amo, eres hermosa, eres increible, eres tu. <br /> Att: Tu novio. </Typography> : ''}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 2,
          }}>
            <Box component={'input'} placeholder='Comment...' sx={{ padding: 2, border: 'none', outline: 'none', fontFamily: 'Roboto', width: '100%', borderRadius: '8px 8px 0 8px', }}>
            </Box>
            <Button variant='contained' sx={{ fontSize: { xs: sizes.font12, lg: sizes.font16 }, color: '#ffffff', width: { xs: '100%', lg: '30%' }, }}>Add your comment</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Section2.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Section2