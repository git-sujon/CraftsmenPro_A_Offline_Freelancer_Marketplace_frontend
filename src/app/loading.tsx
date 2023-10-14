import { Row, Spin } from "antd";

const LoadingPage = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <Spin />
    </Row>
  );
};

export default LoadingPage;
