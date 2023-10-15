import { Box, Grid, Skeleton } from '@mui/material'
import MovieCardSkeleton from '../../components/MovieCardSkeleton'

const SectionSkeleton = () => {
  return (
    <>
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
          height: '400px',
        }}
      >
        <Skeleton
          variant='rectangular'
          width={'100%'} 
          height={'100%'}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -2,
            opacity: 0.5,
          }}
        />
        <Skeleton variant='text' width={200} height={96} />
        <Skeleton variant='text' width={200} height={24} />
        <Box sx={{
          my: 2,
          display: 'flex',
          gap: 2,
        }}>
          <Skeleton variant='rectangular' width={86} height={33} />
          <Skeleton variant='rectangular' width={146} height={33} />
        </Box>
      </Box>
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
          {[...Array(20)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default SectionSkeleton