import Image from "next/image";
import banner from "@/assets/images/webBanner/ebitans - eCommerce website builder platform - Blog.webp";
import styles from "@/components/home/home.module.css";
import {
  fetchBlogData,
  fetchBlogPopularData,
  fetchBlogTypeData,
} from "@/helper/api";
import SingleBlog from "@/components/blogs/SingleBlog";
import PopularBlog from "@/components/blogs/PopularBlog";
import { Suspense } from "react";
import images from "@/lib/images";
import BlogType from "@/components/blogs/BlogType";
import AllBlog from "@/components/blogs/AllBlog";
import Loading from "@/app/[locale]/loading";

export const metadata = {
  title: "Blogs",
  description:
    "Ebitans Blog is your one-stop shop for valuable insights and practical tips to help you thrive in the exciting world of Bangladeshi e-commerce. Whether you're a seasoned seller or just starting your online business journey, we've got something for you.",
};

const Blogs = async ({ params: { locale } }) => {
  const blogData = (await fetchBlogData()) ?? [];
  const blogPopularData = (await fetchBlogPopularData()) ?? [];
  const blogTypeData = (await fetchBlogTypeData()) ?? [];
  const bangla = locale !== "en";


  return (
    <>
    <div className="container px-5 lg:px-10 sm:pt-[100px] pt-[65px] relative z-[1]">
      <div className="relative flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src={banner}
          alt="career image"
          className="w-full h-auto rounded-lg border-white border-2"
        />
        <h1
          className={`${styles.archivo} absolute z-[1] text-gray-800 md:tracking-[15px] tracking-widest text-xl lg:text-4xl md:mt-[-120px] mt-[-40px] font-bold`}
        >
          {bangla ? "eBitans সম্পর্কে কিছু কথা" : "Latest News & Updates"}
        </h1>
        <h1
          className={` ${styles.wordSpacingOne} ${styles.archivo} mt-9 font-light   absolute z-[1] text-gray-200 md:font-bold md:tracking-[15px] tracking-widest  text-2xl lg:text-6xl`}
        >
          {bangla ? "টার্মস এবং কন্ডিশনস" : "Blogs"}
        </h1>
      </div>

      {/* blog section  */}
      <div className="container px-5 lg:px-10 my-10">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* blog card section  */}
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <SingleBlog blogData={blogData} />
          </Suspense>

          {/* popular blogs */}
          <div className="basis-2/5">
            <h1 className="text-2xl pb-5">Popular Blogs</h1>
            <Suspense
              fallback={
                <div>
                  <Loading />
                </div>
              }
            >
              {blogPopularData?.slice(0, 5).map((blog) => (
                <PopularBlog blog={blog} key={blog?.id} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>

      {/* banner section  */}
      <a
        href="https://admin.ebitans.com/register"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="container px-5 lg:px-10 my-10">
          <Image
            width={500}
            height={500}
            src={images?.blogBanner}
            alt="blogImage"
            className="h-auto min-w-full"
          />
        </div>
      </a>

      {/* type of blog section  */}
      <div className="container px-5 lg:px-10 my-10">
        <div>
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <BlogType blogTypeData={blogTypeData} />
          </Suspense>
        </div>
      </div>

      {/* all blog section  */}
      <div className="container px-5 lg:px-10 my-10">
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <AllBlog />
        </Suspense>
      </div>
    </div>
    </>
  );
};

export default Blogs;
