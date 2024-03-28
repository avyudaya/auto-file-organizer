import Navbar from './components/Navbar'
import { Box } from '@chakra-ui/react'
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
export default function App() {
  return (
    <Box maxW='3xl' p='4' margin='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer/>
    </Box>
  )
}