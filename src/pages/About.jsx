import SidebarInformation from '../components/SidebarInformation';

const About = () => {
  return (
    <>
      <SidebarInformation />
      <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4 flex flex-col gap-4 text-xl'>
        <h1 className='text-2xl font-bold'>About</h1>
        <p>
          I&apos;m on my way to become a full-stack web developer. I value hard
          work, problem solving and clean code principles.
        </p>
      </div>
    </>
  );
};

export default About;
