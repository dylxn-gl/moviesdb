import { styled } from '@mui/system'
import PropTypes from 'prop-types'

//Componente Img
const Img = ({ imgHeight, imgWidth, src }) => {
  const StyledImg = styled('img')({
    height: imgHeight,
    width: imgWidth, 
    borderRadius: 4,
  })

  return (
    <StyledImg src={src} />
  )
}

Img.propTypes = {
  imgHeight: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Img