import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fallDown as Menu } from 'react-burger-menu';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const styles = {
    container:
      'w-full flex justify-center border-b-2 border-solid border-gray-100',
    nav: 'flex justify-between items-center text-xl w-full py-4 select-none text-gray-900 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl',
    list: 'py-2 px-4 text-sm md:text-lg lg:text-xl',
    berkanSozer:
      'flex flex-col font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-linear',
  };

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <nav className={`${styles.nav}`}>
        <Link to={'/'} className={styles.berkanSozer}>
          <h1 className='cursor-pointer text-2xl'>Berkan Sözer</h1>
          <p className='text-sm'>Front End Web Developer</p>
        </Link>
        {isMobile ? (
          <Menu
            isOpen={menuOpen}
            right
            onStateChange={(state) => handleMenuStateChange(state)}
          >
            <Link to='/my-projects' className='menu-item' onClick={closeMenu}>
              My Projects
            </Link>
            <Link to='/about' className='menu-item' onClick={closeMenu}>
              About
            </Link>
            <Link to='/contact' className='menu-item' onClick={closeMenu}>
              Contact
            </Link>
          </Menu>
        ) : (
          <ol className='flex gap-4'>
            <Link to='/my-projects'>
              <li className={styles.list}>My Projects</li>
            </Link>
            <Link to='/about'>
              <li className={styles.list}>About</li>
            </Link>
            <Link to='/contact'>
              <li className={styles.list}>Contact</li>
            </Link>
          </ol>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
