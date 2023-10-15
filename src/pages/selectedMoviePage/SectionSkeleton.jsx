import { Box, Skeleton } from '@mui/material'

const SectionSkeleton = () => {
  return (
    <Box sx={{
      position: 'relative',
      zIndex: -1,
      mt: -8,
      px: '24px',
      pb: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: { xs: '400px', lg: '600px', },
    }}>
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
    </Box>
  )
}

export default SectionSkeleton