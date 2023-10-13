"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onSidebarDrawerClose } from "@/redux/slices/sidebarSlice";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Drawer, Layout, Menu, theme } from "antd";
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
  const { open } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <Sider width={250} className="min-h-screen bg-green-200 hidden lg:block">
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
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => dispatch(onSidebarDrawerClose())}
        open={open}
        className="lg:hidden bg-green-100"
      >
        <Menu
          className=" bg-transparent"
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
      </Drawer>
    </Layout>
  );
};

export default Sidebar;
