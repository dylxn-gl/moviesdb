import { Box, Typography, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoIcon from '@mui/icons-material/Info'
import sizes from '../../utils/fontSizes'
import PropTypes from 'prop-types'

const Section1 = ({ title, description, background }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: -1,
        mt: -8,
        px: '24px',
        pb: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '600px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -2,
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, rgba(15, 15, 15, 0), rgba(15, 15, 15, 1)), url(${background})`,
          backgroundSize: 'cover',
          opacity: 0.2,
        }}
      />
      <Typography sx={{ fontSize: { xs: sizes.font64, lg: sizes.font120 }, fontWeight: '500', }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: { xs: sizes.font16, lg: sizes.font24 } }}>
        {description}
      </Typography>
      <Box sx={{
        my: 2,
        display: 'flex',
        gap: 2,
      }}>
        <Button startIcon={<PlayArrowIcon />} variant='contained' sx={{ fontSize: { xs: sizes.font12, lg: sizes.font16 }, color: '#ffffff', }}>Play</Button>
        <Button startIcon={<InfoIcon />} variant='outlined' sx={{ fontSize: { xs: sizes.font12, lg: sizes.font16 }, color: '#17e9e1', }}>See more info</Button>
      </Box>
    </Box>
  );
};

Section1.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Section1;