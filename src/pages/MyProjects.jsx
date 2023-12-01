const MyProjects = () => {
  return (
    <div className='col-span-full'>
      <section>
        <article className='flex flex-col gap-4'>
          <h1
            id='my-projects--blog-project'
            className='text-center font-bold text-2xl text-gray-900'
          >
            Blog Project
          </h1>
          <img
            src='https://github.com/realsarius/blog-project/blob/main/frontend/src/assets/img/blog-project.png?raw=true'
            alt='blog-project-showcase-img'
            className='w-4/6 mx-auto'
          />
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius
            nihil atque et eum dolor error quisquam delectus ratione assumenda
            similique non voluptates debitis veritatis earum maxime, tempora
            corrupti officiis.
          </p>
          <a href='https://github.com/realsarius/blog-project'>
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
