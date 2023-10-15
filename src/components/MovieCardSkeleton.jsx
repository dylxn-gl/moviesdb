import { Skeleton } from "@mui/material";


const MovieCardSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        sx={{ mt: '24px', ml: '24px', height: { xs: 390, md: 325, lg: 337.7, }, width: { xs: 300, md: 216.7, lg: 484, }, borderRadius: 1, }}
      />
    </>
  )
}

export default MovieCardSkeleton