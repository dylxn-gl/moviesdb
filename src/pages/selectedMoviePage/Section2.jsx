import { Box, Typography, Button } from '@mui/material'
import sizes from '../../utils/fontSizes'
import PropTypes from 'prop-types'

const Section2 = ({ id }) => {

  return (
    <Box>
      {id === '1160164' ?
        <Box sx={{
          my: 8,
          mx: {xs: 4, lg: 12},
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <Typography sx={{ fontSize: sizes.font32, color: '#17e9e1', display: {xs: 'flex', lg: 'block'}, flexDirection: {xs: 'column', md: 'row'},}}>Reviews <Box component={'span'} color='#ffffff'> | Talk about the movie</Box></Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
            <Typography sx={{ padding: 2, border: 'none', outline: 'none', bgcolor: '#cffffd', color: '#000000', width: '100%', borderRadius: '8px 8px 8px 0', }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat quae aut quo qui eius quas doloribus asperiores delectus, dolore ipsa atque nihil quibusdam? Pariatur velit error accusantium natus possimus.
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: {xs: 'column', lg: 'row'},
              gap: 2,
            }}>
              <Box component={'input'} placeholder='Comment...' sx={{ padding: 2, border: 'none', outline: 'none', fontFamily: 'Roboto', width: '100%', borderRadius: '8px 8px 0 8px', }}>
              </Box>
              <Button variant='contained' sx={{ fontSize: { xs: sizes.font12, lg: sizes.font16 }, color: '#ffffff', width: {xs: '100%', lg: '30%'}, }}>Add your comment</Button>
            </Box>
          </Box>
        </Box> : <Box sx={{
          my: 8,
          mx: {xs: 4, lg: 12},
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <Typography sx={{ fontSize: sizes.font32, color: '#17e9e1', display: {xs: 'flex', lg: 'block'}, flexDirection: {xs: 'column', md: 'row'},}}>Reviews <Box component={'span'} color='#ffffff'> | Talk about the movie</Box></Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
            <Box sx={{
              display: 'flex',
              flexDirection: {xs: 'column', lg: 'row'},
              gap: 2,
            }}>
              <Box component={'input'} placeholder='Comment...' sx={{ padding: 2, border: 'none', outline: 'none', fontFamily: 'Roboto', width: '100%', borderRadius: '8px 8px 0 8px', }}>
              </Box>
              <Button variant='contained' sx={{ fontSize: { xs: sizes.font12, lg: sizes.font16 }, color: '#ffffff', width: {xs: '100%', lg: '30%'}, }}>Add your comment</Button>
            </Box>
          </Box>
        </Box>}
    </Box>
  )
}

Section2.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Section2