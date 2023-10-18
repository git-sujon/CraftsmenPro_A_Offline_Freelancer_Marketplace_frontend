import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import SearchBar from "@/components/Ui/SearchAndFilter/SearchBar";

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
      <div className="bg-orange-200  py-16">
        <SearchBar />
      </div>

      <div className="max-width">
        {/* total count and shorting  */}
        <div className="flex justify-between items-center">
          <div className=" font-bold">Total Services: 22</div>
        
        </div>

        {/* Filtering and Services  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>Filtering</div>
          <div>Services</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
