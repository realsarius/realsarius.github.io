import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center text-xl w-full py-4 px-8 select-none'>
      <Link to={'/'}>
        <h1 className='py-2 px-4 cursor-pointer'>Berkan Sözer</h1>
      </Link>
      <ol className='flex gap-4'>
        <Link to={'/'}>
          <li className='py-2 px-4'>Home</li>
        </Link>
        <Link to={'/about'}>
          <li className='py-2 px-4'>About</li>
        </Link>
        <Link to={'/contact'}>
          <li className='py-2 px-4'>Contact</li>
        </Link>
      </ol>
    </nav>
  );
};

export default Navigation;
