import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    link: 'flex items-center gap-2 hover:underline',
  };
  return (
    <footer className='bg-gray-100 flex justify-center w-full'>
      <div className='max-w-7xl w-full flex flex-col gap-4 py-8'>
        <div className='flex gap-8 items-center'>
          <a href='#' className={styles.link}>
            <FaGithub aria-label='github-icon' size={'1.5em'} /> GitHub
          </a>
          <a href='#' className={styles.link}>
            <FaLinkedin aria-label='linkedin-icon' size={'1.5em'} /> LinkedIn
          </a>
        </div>
        <p className='text-gray-600 text-sm'>
          &#169; 2023 Berkan Sözer. Inspiration from{' '}
          <a
            href='https://mmistakes.github.io/minimal-mistakes/about/'
            className='hover:underline'
            target='_blank'
            rel='noreferrer'
          >
            Michael Rose&apos;s Minimal Mistakes
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
