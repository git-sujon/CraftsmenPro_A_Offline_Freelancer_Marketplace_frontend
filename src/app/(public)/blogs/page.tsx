import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import SearchBar from "@/components/Ui/SearchingFilteringSortingPagination/SearchBar";

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
      <div className="bg-slate-100  py-20">
        <SearchBar />
      </div>
    </div>
  );
};

export default BlogPage;
