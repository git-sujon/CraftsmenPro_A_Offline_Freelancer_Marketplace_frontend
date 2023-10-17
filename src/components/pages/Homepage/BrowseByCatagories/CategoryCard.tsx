import { Card, Col } from "antd";
import { ICategory } from "@/constants/browserByCatagories";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
      <Card className="">
        <div className="px-8 py-4">
          <div>
            {<category.icon className="w-8 h-8 text-textSecondary"  />}
          </div>
          <p className="text-primary text-sm font-semibold">
            {Math.floor(Math.random() * 100)} Services
          </p>
          <p className="text-textPrimary text-medium font-semibold">{category?.label}</p>
          <p className="text-sm text-textSecondary font-semibold">{category?.description}</p>
        </div>
      </Card>
    </Col>
  );
};

export default CategoryCard;
