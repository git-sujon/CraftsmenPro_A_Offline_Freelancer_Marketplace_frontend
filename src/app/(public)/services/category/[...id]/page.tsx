import TopBreadCrump from "@/components/Ui/BreadCrump/TopBreadCrump";
import ServicesDetails from "@/components/pages/Services/ServicesDetails";

const ServiceDetailsPage = ({ params }: { params: { id: string[] } }) => {



const category = params.id[0].split("-").join(" ")

const id = params.id[1]






  return <div className="mt-5 max-width ">
 <TopBreadCrump
        items={[
          {
            label: `Services`,
            link: `/services`,
          },
      
          {
            label: `${category}`,
            link: `/services/category`,
          },
        ]}
      />
  <ServicesDetails id={id} />
  </div>;
};

export default ServiceDetailsPage;
