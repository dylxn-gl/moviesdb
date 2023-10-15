import { Box, Typography } from '@mui/material'
import Img from '../../components/Img'
import sizes from '../../utils/fontSizes'
import PropTypes from 'prop-types'

const Section1 = ({ background, title, description, genres }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: -1,
                mt: -8,
                px: {xs: 4, lg: 12},
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
            <Box sx={{ mt: 8, display: 'flex', gap: 2, alignItems: 'flex-end', height: 'auto' }}>
                <Box sx={{display: {xs: 'none', lg: 'block'},}}>
                    <Img imgHeight='484px' imgWidth='337.7px' src={background} />
                </Box>
                <Box>
                    <Typography sx={{ fontSize: { xs: sizes.font64, lg: sizes.font120 }, fontWeight: '500', }}>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: sizes.font16, lg: sizes.font24 } }}>
                        Genres: {
                            genres.map((genre, index) => {
                                return <Box key={index} component={'span'}>
                                    {genre.name}&nbsp;
                                </Box>
                            })
                        }
                    </Typography>
                    <Typography sx={{ fontSize: { xs: sizes.font16, lg: sizes.font24 } }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

Section1.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    background: PropTypes.string.isRequired,
};

export default Section1;