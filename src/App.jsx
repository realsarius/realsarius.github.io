import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full flex flex-col gap-8 h-screen'>
      <Navigation />
      <div className='flex flex-grow justify-center'>
        <div className='grid grid-cols-6 max-w-7xl w-full'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
