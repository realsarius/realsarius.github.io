import { IoLocationSharp } from 'react-icons/io5';
import SocialLinks from './SocialLinks';

const SidebarInformation = () => {
  const styles = {
    container: '',
    link: '',
  };

  return (
    <div
      className={`flex row-span-1 lg:flex-col gap-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear`}
    >
      <img
        src='https://avatars.githubusercontent.com/u/54468228?v=4'
        alt='my-picture'
        className='lg:w-32 lg:h-32 w-16 h-16 rounded-full'
      />
      <div>
        <h1 className='font-bold text-md lg:text-2xl'>Berkan Sözer</h1>
        <p className='text-sm lg:text-md'>
          I&apos;m on my way to become a full-stack web developer. I value hard
          work, problem solving and clean code principles.
        </p>
      </div>

      <div href='#' className='lg:flex items-center gap-2 hidden'>
        <IoLocationSharp aria-label='location-icon' size={'1.5em'} /> Manisa,
        Turkey
      </div>

      <SocialLinks
        style={'lg:flex hidden items-center gap-2 hover:underline'}
        flexAndGap={'lg:flex flex-col hidden gap-4'}
      />
    </div>
  );
};

export default SidebarInformation;
