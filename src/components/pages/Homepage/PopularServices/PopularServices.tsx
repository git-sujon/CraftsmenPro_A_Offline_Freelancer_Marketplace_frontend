import SectionSubPera from "@/components/Ui/Typography/SectionSubPera";
import SectionTitle from "@/components/Ui/Typography/SectionTitle";

const PopularServices = () => {
    return (
        <div className="max-width py-20">
            {/* section header  */}
            <div>
                <SectionTitle text="Popular Services" textAlign="text-center"/>
                <SectionSubPera text="Most viewed and all-time top-selling services" textAlign="text-center" />
            </div>

                {/* popular services  */}

            <div className="h-96">

            </div>
        </div>
    );
};

export default PopularServices;