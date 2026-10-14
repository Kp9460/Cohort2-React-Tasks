import Navbar from './components/Navbar'
import About from './pages/About'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
  

const App = () => {

  return (
    <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Courses' element={<Courses />} />
          
          <Route path='/Courses/Kodr' element={<Kodr />} />
          <Route path='/Courses/Kodex' element={<Kodex />} />

        </Routes>

        <Footer />

    </div>
  )
}

export default App
