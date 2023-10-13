"use client";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const pathName = usePathname();
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout className="layout">
      <Header className="flex items-center justify-between lg:justify-start lg:gap-x-10">
        <div className="flex items-center gap-x-4 ">
          <Button type="primary" onClick={()=>dispatch(showSidebarDrawer())} className="lg:hidden ">
            <MenuOutlined />
          </Button>

          <Content>
            <Link href="/" >
              <Title className="text-white mb-0" level={5}>CraftsmenPro</Title>
            </Link>
          </Content>
        </div>
        <Menu
          className="hidden lg:block "
          // disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href} className="text-white">
                  {item.label}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>

        <Button type="primary" onClick={showDrawer} className="lg:hidden ">
          <MenuOutlined />
        </Button>

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          className="lg:hidden "
        >
          <Menu
            // disabledOverflow
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
      </Header>
    </Layout>
  );
};

export default Navbar;
