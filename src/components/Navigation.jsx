import { Link } from 'react-router-dom';

const Navigation = () => {
  const styles = {
    container:
      'w-full flex justify-center border-b-2 border-solid border-gray-100',
    nav: 'flex justify-between items-center text-xl w-full py-4 select-none max-w-7xl text-gray-900',
    list: 'py-2 px-4',
  };
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to={'/'} className='flex flex-col font-bold'>
          <h1 className='cursor-pointer text-2xl'>Berkan Sözer</h1>
          <p className='text-sm'>Front End Web Developer</p>
        </Link>
        <ol className='flex gap-4'>
          <Link to={'/'}>
            <li className={styles.list}>Home</li>
          </Link>
          <Link to={'/about'}>
            <li className={styles.list}>About</li>
          </Link>
          <Link to={'/contact'}>
            <li className={styles.list}>Contact</li>
          </Link>
        </ol>
      </nav>
    </div>
  );
};

export default Navigation;
