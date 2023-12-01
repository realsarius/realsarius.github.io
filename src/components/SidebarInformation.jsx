import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const SidebarInformation = () => {
  const styles = {
    container:
      'flex flex-col gap-4 col-span-1 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear',
    link: 'flex items-center gap-2 hover:underline',
  };

  return (
    <div className={styles.container}>
      <img
        src='https://avatars.githubusercontent.com/u/54468228?v=4'
        alt='my-picture'
        className='w-32 rounded-full'
      />
      <h1 className='font-bold text-2xl'>Berkan Sözer</h1>
      <div href='#' className='flex items-center gap-2'>
        <IoLocationSharp aria-label='location-icon' size={'1.5em'} /> Manisa,
        Turkey
      </div>
      <p className='text-base'>
        I&apos;m on my way to become a full-stack web developer. I value hard
        work, problem solving and clean code principles.
      </p>
      <a href='#' className={styles.link}>
        <FaGithub aria-label='github-icon' size={'1.5em'} /> GitHub
      </a>
      <a href='#' className={styles.link}>
        <FaLinkedin aria-label='linkedin-icon' size={'1.5em'} /> LinkedIn
      </a>
    </div>
  );
};

export default SidebarInformation;
