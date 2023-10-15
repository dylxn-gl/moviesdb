import { Skeleton } from "@mui/material";


const MovieCardSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        sx={{ mt: '24px', ml: '24px', height: { xs: 390, md: 325 }, width: { xs: 300, md: 216.7 }, borderRadius: 1, }}
      />
    </>
  )
}

export default MovieCardSkeleton