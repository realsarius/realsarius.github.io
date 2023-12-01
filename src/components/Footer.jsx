import SocialLinks from './SocialLinks';

const Footer = () => {
  const styles = {
    link: 'flex items-center gap-2 hover:underline',
  };
  return (
    <footer className='bg-gray-100 flex w-full justify-center'>
      <div className='w-full flex flex-col justify-center items-center lg:items-start gap-4 py-8 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
        <SocialLinks
          style={styles.link}
          flexAndGap={'flex gap-8 justify-center lg:justify-start items-center'}
        />

        <p className='text-gray-600 text-sm text-center'>
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
