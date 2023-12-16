import React from "react";
import blog from "../assets/png/blog.png";
import blogs from "../assets/png/blogs.png";
const Blog = () => {
  return (
    <>
      <div className="py-40">
        <div className="container">
          <h2 className="font-medium text-xl min-[530px]:text-[30px] xl:text-2xl text-center">Our Blog</h2>
          <div className="xl:flex w-full items-center gap-3 mt-3 min-[530px]:mt-12">
            <div className="xl:w-1/2 text-center xl:text-start ">
              <img className="mx-auto xl:text-start" src={blog} alt="blog" />
              <p className="text-primary text-sm pt-8 mb-0">27 Jan 2023</p>
              <p className="mt-1 mb-0 font-medium min-[530px]:text-xl">
                Nullam viverra nunc sit amet libero rutrum,
              </p>
              <p className="mb-0 text-grey mt-4 min-[530px]:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ac nibh in ex consectetur pellentesque ac porttitor ipsum. Ut
                iaculis lectus quis feugiat rutrum. Sed non venenatis est.
                Praesent tortor leo,
              </p>
              <button className="py-4 px-8 border border-primary font-medium text-sm md:text-md rounded-[60px] text-primary  hover:bg-primary hover:text-white duration-300  mt-4 lg:mt-6  ">
                Read More
              </button>
            </div>
            <div className="min-[530px]:ps-3 xl:w-1/2 mt-20 xl:mt-0">
              <div className="w-full min-[530px]:flex">
                <div className="min-[530px]:w-1/2">
                  <img className="mx-auto min-[530px]:mx-0" src={blogs} alt="blog" />
                </div>
                <div className="min-[530px]:w-1/2 mt-4 min-[530px]:mt-0 ps-4  text-center min-[530px]:text-start">
                  <p className="text-primary text-sm  mb-0">19 Jan 2022</p>
                  <p className="mt-1 mb-0 font-medium  min-[530px]:text-xl">
                    Vivamus non tellus vel est dictum aliquam
                  </p>
                  <p className="mb-0 text-grey mt-4 text-sm min-[530px]:text-base">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get...
                  </p>
                  <p className="text-md text-primary mt-6">Read more...</p>
                </div>
              </div>
              <div className="w-full min-[530px]:flex mt-5">
                <div className="min-[530px]:w-1/2">
                  <img className="mx-auto min-[530px]:mx-0" src={blogs} alt="blog" />
                </div>
                <div className="min-[530px]:w-1/2 mt-4 min-[530px]:mt-0 ps-4  text-center min-[530px]:text-start">
                  <p className="text-primary text-sm  mb-0">19 Jan 2022</p>
                  <p className="mt-1 mb-0 font-medium  min-[530px]:text-xl">
                    Vivamus non tellus vel est dictum aliquam
                  </p>
                  <p className="mb-0 text-grey mt-4 text-sm min-[530px]:text-base">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get...
                  </p>
                  <p className="text-md text-primary mt-6">Read more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
