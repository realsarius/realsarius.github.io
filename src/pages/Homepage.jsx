import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div className='my-projects flex flex-col gap-4 md:lg:col-span-full'>
        <h1 className='text-center text-2xl font-bold'>My Projects</h1>
        <section className='flex flex-col items-center gap-20 sm:gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          <article className='col-span-1 w-full flex flex-col gap-4'>
            <img
              src='https://github.com/realsarius/blog-project/blob/main/frontend/src/assets/img/blog-project.png?raw=true'
              alt='blog-project-showcase-img'
              className=''
            />
            <h1 className='text-center text-2xl font-bold'>Blog Project</h1>
            <p>Blog project using MERN Stack.</p>
            <Link
              to={'/my-projects#blog-project'}
              className='flex justify-center sm:justify-normal'
            >
              <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
                Learn More
              </button>
            </Link>
          </article>
          <article className='col-span-1 w-full flex flex-col gap-4'>
            <img
              src='https://github.com/realsarius/orbit-synthwave/raw/main/orbitss1'
              alt='blog-project-showcase-img'
              className=''
            />
            <h1 className='text-center text-2xl font-bold'>
              Orbit&apos;s Synthwave
            </h1>
            <p>
              A replica of the Retro Synthwave website using various frontend
              frameworks.
            </p>
            <Link
              to={'/my-projects#orbit-synthwave'}
              className='flex justify-center sm:justify-normal'
            >
              <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
                Learn More
              </button>
            </Link>
          </article>
          <article className='col-span-1 w-full flex flex-col gap-4'>
            <img
              src='https://github.com/realsarius/odin-cv-application/raw/main/ss2.gif'
              alt='blog-project-showcase-img'
              className=''
            />
            <h1 className='text-center text-2xl font-bold'>Resume Builder</h1>
            <p>A dynamic resume builder as a project from The Odin Project.</p>
            <Link
              to={'/my-projects#resume-builder'}
              className='flex justify-center sm:justify-normal'
            >
              <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
                Learn More
              </button>
            </Link>
          </article>
        </section>
      </div>
    </>
  );
};

export default Homepage;
