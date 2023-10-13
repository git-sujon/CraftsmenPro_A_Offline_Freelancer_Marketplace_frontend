"use client";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const pathName = usePathname();

  return (
    <Layout>
      <Sider width={250} className="min-h-screen bg-green-200">
        <Menu
          className="bg-transparent px-3 py-1"
          disabledOverflow
          theme="light"
          mode="vertical"
          selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Content className="bg-white">{children}</Content>
    </Layout>
  );
};

export default Sidebar;
