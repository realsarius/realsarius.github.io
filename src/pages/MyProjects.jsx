const MyProjects = () => {
  return (
    <div className='col-span-full'>
      <section className='flex flex-col gap-8'>
        <article className='flex flex-col gap-4'>
          <h1
            id='blog-project'
            className='text-center font-bold text-2xl text-gray-900'
          >
            Blog Project
          </h1>
          <img
            src='https://github.com/realsarius/blog-project/blob/main/frontend/src/assets/img/blog-project.png?raw=true'
            alt='blog-project-showcase-img'
            className='w-full lg:w-4/6 mx-auto'
          />
          <p className=''>Blog project using MERN Stack.</p>
          <a
            href='https://github.com/realsarius/blog-project'
            className='mx-auto'
            target='_blank'
            rel='noreferrer'
          >
            <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
              GitHub Page
            </button>
          </a>
        </article>

        <article className='flex flex-col gap-4'>
          <h1
            id='orbit-synthwave'
            className='text-center font-bold text-2xl text-gray-900'
          >
            Orbit&apos;s Synthwave
          </h1>
          <img
            src='https://github.com/realsarius/orbit-synthwave/raw/main/orbitss1'
            alt='blog-project-showcase-img'
            className='w-full lg:w-4/6 mx-auto'
          />
          <p className=''>
            A replica of the Retro Synthwave website using various frontend
            frameworks.
          </p>
          <a
            href='https://github.com/realsarius/orbit-synthwave'
            className='mx-auto'
          >
            <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
              GitHub Page
            </button>
          </a>
        </article>

        <article className='flex flex-col gap-4'>
          <h1
            id='my-projects--blog-project'
            className='text-center font-bold text-2xl text-gray-900'
          >
            Resume Builder
          </h1>
          <img
            src='https://github.com/realsarius/odin-cv-application/raw/main/ss2.gif'
            alt='blog-project-showcase-img'
            className='w-full lg:w-4/6 mx-auto'
          />
          <p className=''>
            A dynamic resume builder as a project from The Odin Project.
          </p>
          <a
            href='https://github.com/realsarius/odin-cv-application'
            className='mx-auto'
          >
            <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
              GitHub Page
            </button>
          </a>
        </article>
      </section>
    </div>
  );
};

export default MyProjects;
