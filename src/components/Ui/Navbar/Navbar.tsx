"use client";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOutlined, UserAddOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import Image from "next/image";

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
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return (
    <Layout className="layout bg-white">
      <Header className="flex items-center justify-between lg:justify-start lg:gap-x-10 bg-white">
        <div className="flex items-center gap-x-20 ">
          <Button
            type="primary"
            onClick={() => dispatch(showSidebarDrawer())}
            className="lg:hidden "
          >
            <MenuOutlined />
          </Button>

          <Link href="/" className="block">
            <img
              src="/CraftsmenPro-logos_black.png"
              alt="logo"
              className="h-[60px] w-[80px] mt-5"
            />
          </Link>
        </div>
        <div className="lg:flex items-center justify-between w-full">
          <Menu
            className="hidden lg:block "
            disabledOverflow
            theme="light"
            mode="horizontal"
            selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
          >
            {items?.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link
                    href={item.href}
                    className="text-textSecondary font-bold"
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
          <div className="lg:flex items-center gap-x-10 hidden ">
            <Button
            href="/auth/service-provider-registration"
              className=""
              type="dashed"
            >
            <UserAddOutlined />  Become a Services Provider
            </Button>
            <Button
              className=" hover:bg-secondary "
              type="primary"
            >
              Login
            </Button>
          </div>
        </div>

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
          <div>
            <Menu
              disabledOverflow
              theme="light"
              mode="vertical"
              selectedKeys={[
                items.find((item) => item.href === pathName)?.key!,
              ]}
            >
              {items?.map((item) => {
                return (
                  <Menu.Item key={item.key}>
                    <Link
                      className="text-textSecondary font-bold"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
            <div className="flex-col lg:hidden mt-3">
              <Button
                className="bg-accent text-black font-bold hover:bg-warning block"
                type="primary"
              >
                Become a Services Provider
              </Button>
              <Button
                className="bg-primary hover:bg-secondary font-bold block mt-3"
                type="primary"
              >
                Login
              </Button>
            </div>
          </div>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
