
import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import Services from "@/components/pages/Services/Services";


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
      <Services />
    </div>
  );
};

export default ServicesPage;
