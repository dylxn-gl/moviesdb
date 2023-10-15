import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import HomePage from '../pages/homePage/HomePage'
import SelectedMoviePage from '../pages/selectedMoviePage/SelectedMoviePage'
import sizes from '../utils/fontSizes'
import Img from './Img';

//Enlaces de la navegacion
const Links = [
  { text: 'Home', href: '/', },
  { text: 'Movies', href: '', },
  { text: 'Series', href: '', },
]

const Nav = () => {
  //Navegacion principal
  return (
    <BrowserRouter>
      <AppBar sx={{
        bgcolor: 'transparent',
        boxShadow: 'none',
      }} position='static'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Img imgHeight='30px' imgWidth='' src='/logo.png' />
          </Link>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {Links.map((link, index) => (
              <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
                <Typography
                  href=''
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: 'transparent',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '400',
                    marginRight: 2,
                    fontSize: sizes.font20,
                    '&:hover': {
                      color: '#17e9e1',
                    },
                    transition: 'all .4s',
                  }}
                >
                  {link.text}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{
            width: '142.73px',
            display: 'flex',
            justifyContent: 'flex-end',
          }} >
            <Box component={'a'} href='https://github.com/dylxn-gl' target='_blank'>
              <GitHubIcon sx={{
                fontSize: { xs: sizes.font16, lg: sizes.font20 },
                color: '#ffffff',
                '&:hover': {
                  color: '#17e9e1',
                },
                transition: 'all .4s',
              }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/*Rutas de la navegacion*/}
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path="/:id" element={<SelectedMoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Nav

