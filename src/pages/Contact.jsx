import React from 'react';
import SidebarInformation from '../components/SidebarInformation';

const Contact = () => {
  return (
    <React.Fragment>
      <SidebarInformation />
      <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4 flex flex-col gap-4 text-xl'>
        <h1 className='text-2xl font-bold'>Contact</h1>
        <p>
          You can contact me at:{' '}
          <a href='mailto:berkansozer@protonmail.com'>
            berkansozer@protonmail.com
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
