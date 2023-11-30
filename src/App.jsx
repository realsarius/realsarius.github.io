import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='max-w-7xl w-full'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
