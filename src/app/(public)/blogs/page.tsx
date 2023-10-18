import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import SearchBar from "@/components/Ui/SearchAndFilter/SearchBar";

const BlogPage = () => {
  return (
    <div className="max-width mt-10">
      <TopBreadCrump
        items={[
          {
            label: `Blogs`,
            link: `/blogs`,
          },
        ]}
      />
{/* Search  */}
        <div>
<SearchBar />
        </div>


    </div>
  );
};

export default BlogPage;
