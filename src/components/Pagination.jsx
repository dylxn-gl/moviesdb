import { useContext } from 'react'
import MoviesContext from '../contexts/movies/MoviesContext'
import { Box, Pagination } from '@mui/material'

const PaginationComponent = () => {
    const { pageNumber, setPageNumber, state } = useContext(MoviesContext)
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Pagination
                sx={{
                    pb: 4,
                    '& .MuiPaginationItem-root': {
                        borderRadius: 1, 
                    },
                }}
                count={500}
                defaultPage={state.page}
                page={pageNumber}
                onChange={(e, page) => {
                    setPageNumber(page)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                color='primary'
            />
        </Box>
    )
}

export default PaginationComponent