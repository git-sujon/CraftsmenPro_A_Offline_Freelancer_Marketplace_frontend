import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import SearchBar from "@/components/Ui/SearchingFilteringSortingPagination/SearchBar";
import BlogCard from "@/components/pages/Blogs/BlogCard";
import { blogs } from "@/constants/fakeBlogs";

const BlogPage = () => {
  return (
    <div className=" mt-5">
      <TopBreadCrump
        items={[
          {
            label: `Blogs`,
            link: `/blogs`,
          },
        ]}
      />
      {/* Search  */}
      <div className="bg-slate-50  py-20">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10 px-5 md:px-10 lg:px-20 pb-10 md:pb-20 lg:pb-20  ">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
