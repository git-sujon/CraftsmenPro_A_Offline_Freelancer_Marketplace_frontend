import SectionSubPera from "@/components/Ui/Typography/SectionSubPera";
import SectionTitle from "@/components/Ui/Typography/SectionTitle";
import { Button, Row } from "antd";
import CategoryCard from "./CategoryCard";
import { categories } from "@/constants/browserByCatagories";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
const BrowseByCatagories = () => {
  return (
    <div className="max-width pb-20">
      {/* section header  */}
      <div className="mb-20 lg:flex items-center justify-between">
        <div>
          <SectionTitle text="Browse talent by category​" />
          <SectionSubPera text="Get some Inspirations from 1800+ skills" />
        </div>
        <div className="ml-[-16px] lg:ml-0">
          <Link href={`/services`}>
            <Button
              type="text"
              className="text-primary text-sm md:text-base font-semibold hover:text-textSecondary "
            >
              Explore all Catagories <ArrowRightOutlined />{" "}
            </Button>
          </Link>
        </div>
      </div>
      {/* catagories  */}
      <div>
        <Row gutter={[16, 16]}>
          {categories.map((category) => (
            //@ts-ignore
            <CategoryCard key={category.id} category={category} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BrowseByCatagories;
