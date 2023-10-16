import SectionSubTitle from "@/components/Ui/Typography/SectionSubTitle";
import SectionTitle from "@/components/Ui/Typography/SectionTitle";

const PopularServices = () => {
    return (
        <div className="max-width py-20">
            {/* section header  */}
            <div>
                <SectionTitle text="Popular Services" textAlign="text-center"/>
                <SectionSubTitle text="Most viewed and all-time top-selling services" textAlign="text-center" />
            </div>
        </div>
    );
};

export default PopularServices;