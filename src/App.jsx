import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <div className='w-full flex flex-col gap-8 h-screen'>
      <Navigation />
      <div className='flex flex-grow justify-center'>
        <div className='flex flex-col gap-8 lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl max-w-full w-full'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/my-projects' element={<MyProjects />} />
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
