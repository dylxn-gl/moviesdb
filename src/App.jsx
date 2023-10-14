import MoviesState from './contexts/movies/MoviesState'
import Nav from './components/Navegation'


const App = () => {
  return (
    <>
      <MoviesState>
        <Nav />
      </MoviesState>
    </>
  )
}

export default App