import SidebarInformation from '../components/SidebarInformation';
import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <SidebarInformation />
      <div className='col-span-4 flex flex-col gap-4 text-xl'>
        <h1 className='text-2xl font-bold'>About</h1>
        <p>
          I&apos;m on my way to become a full-stack web developer. I value hard
          work, problem solving and clean code principles.
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;
