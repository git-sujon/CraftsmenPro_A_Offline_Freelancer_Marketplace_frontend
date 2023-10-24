import { Avatar, Rate } from "antd";
import { MdCalendarMonth, MdVerified } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const ServicesProviderProfileHeader = ({
  servicesProvider,
}: {
  servicesProvider: any;
}) => {
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <Avatar size={64} src={servicesProvider?.providerProfileImage} />
        <div>
          <div className="flex items-center gap-x-1">
            <h3 className="text-normal text-textSecondary font-bold text-">
              {servicesProvider?.providerName}
            </h3>
            <MdVerified className="text-blue-700 text-xl mt-[-10px]" />
          </div>
          <div className="">
            <div className="flex items-center">
              <MdCalendarMonth />
              <p>{servicesProvider?.experience} years experience</p>
            </div>
            <div className="flex items-center gap-x-1">
              <Rate
                allowHalf
                defaultValue={servicesProvider?.averageRating}
                className="text-xs"
              />
              <p> {servicesProvider.averageRating}</p>
              <p>( {servicesProvider.totalRatings} Reviews)</p>
            </div>

            {/* Location */}

            <div className="flex items-center gap-x-2">
              <FaLocationDot />{" "}
              <div className="flex items-center gap-x-2 flex-wrap">
              {servicesProvider?.serviceAreas?.map((place:any , _idx:any) => (
                <p className="font-bold text-sm Capitalize text-textSecondary" key={_idx}>{place?.cityName}</p>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProviderProfileHeader;
