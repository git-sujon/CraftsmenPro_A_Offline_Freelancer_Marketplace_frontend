"use client";
import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import PaginationBar from "@/components/Ui/SearchingFilteringSortingPagination/Pagination";
import SearchBar from "@/components/Ui/SearchingFilteringSortingPagination/SearchBar";
import Sorting from "@/components/Ui/SearchingFilteringSortingPagination/Sorting";

const ServicesPage = () => {
  return (
    <div className=" mt-5">
      <TopBreadCrump
        items={[
          {
            label: `Services`,
            link: `/services`,
          },
        ]}
      />
      {/* Search  */}
      <div className="bg-orange-100  py-16">
        <SearchBar />
      </div>

      <div className="max-width">
        {/* total count and shorting  */}
        <div className="flex justify-between items-center">
          <div className=" font-bold">Total Services: 22</div>
          <Sorting />
        </div>

        {/* Filtering and Services  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>Filtering</div>
          <div>Services</div>
        </div>
        {/* Pagination  */}
        <div className="py-20">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
