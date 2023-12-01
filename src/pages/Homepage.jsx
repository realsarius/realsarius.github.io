import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      {/* <SidebarInformation />
      <div className='col-span-4'>Homepage</div> */}
      {/* <div className='hero'></div> */}
      <div className='my-projects flex flex-col gap-4 md:lg:col-span-full'>
        <h1 className='text-center text-2xl font-bold'>My Projects</h1>
        <section className='flex flex-col items-center gap-20 sm:gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          <article className='col-span-1 w-full flex flex-col gap-4'>
            {/* <img
              src='src\assets\img\blog-project.png'
              alt='blog-project-showcase-img'
              className='scale-50'
            /> */}
            {/* <div className='bg-homepage--blog-project h-80 w-full bg-no-repeat bg-origin-content bg-contain bg-center'></div> */}

            <img
              src='src\assets\img\blog-project.png'
              alt='blog-project-showcase-img'
              className=''
            />
            <h1 className='text-center text-2xl font-bold'>Blog Project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              placeat magni quasi temporibus saepe expedita sed totam eligendi
              nobis! Iste voluptatem fuga modi accusamus quisquam! Ipsam saepe
              ullam nisi atque!
            </p>
            <Link
              to={'/my-projects/#my-projects--blog-project'}
              className='flex justify-center sm:justify-normal'
            >
              <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
                Learn More
              </button>
            </Link>
          </article>
          <article className='col-span-1 w-full flex flex-col gap-4'>
            {/* <img
              src='src\assets\img\blog-project.png'
              alt='blog-project-showcase-img'
              className='scale-50'
            /> */}
            {/* <div className='bg-homepage--blog-project h-80 w-full bg-no-repeat bg-origin-content bg-contain bg-center'></div> */}

            <img
              src='https://github.com/realsarius/orbit-synthwave/raw/main/orbitss1'
              alt='blog-project-showcase-img'
              className=''
            />
            <h1 className='text-center text-2xl font-bold'>Blog Project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              placeat magni quasi temporibus saepe expedita sed totam eligendi
              nobis! Iste voluptatem fuga modi accusamus quisquam! Ipsam saepe
              ullam nisi atque!
            </p>
            <Link
              to={'/my-projects/#orbit-synthwave'}
              className='flex justify-center sm:justify-normal'
            >
              <button className='outline-2 outline-stone-500 bg-stone-100 hover:bg-stone-200 font-semibold outline py-2 px-4 rounded'>
                Learn More
              </button>
            </Link>
          </article>
          <article className='col-span-1 w-full flex flex-col gap-4'>
            {/* <img
              src='src\assets\img\blog-project.png'
              alt='blog-project-showcase-img'
              className='scale-50'
            /> */}
            {/* <div className='bg-homepage--blog-project h-80 w-full bg-no-repeat bg-origin-content bg-contain bg-center'></div> */}

            <img
              src='https://github.com/realsarius/odin-cv-application/raw/main/ss2.gif'
              alt='blog-project-showcase-img'
              className=''
            />
            <h1 className='text-center text-2xl font-bold'>Blog Project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              placeat magni quasi temporibus saepe expedita sed totam eligendi
              nobis! Iste voluptatem fuga modi accusamus quisquam! Ipsam saepe
              ullam nisi atque!
            </p>
            <Link
              to={'/my-projects/#resume-builder'}
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
