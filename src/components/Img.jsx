import { styled } from '@mui/system'
import PropTypes from 'prop-types'

//Componente Img
const Img = ({ imgHeight, src }) => {
    const StyledImg = styled('img')({
        height: imgHeight,
    })

    return (
        <StyledImg src={src} />
    )
}

Img.propTypes = {
    imgHeight: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default Img