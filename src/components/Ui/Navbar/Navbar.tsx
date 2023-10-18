"use client";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MenuOutlined, UserAddOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { authKey } from "@/constants/storageKeys";
import { loggedIn, removeUserInfo } from "@/services/auth.services";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
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
  const router = useRouter();

  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    if (loggedIn()) {
      setIsUserLogged(true);
    }
  }, []);

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const logoutHandler = () => {
    removeUserInfo(authKey);
    router.push("/auth/login");
  };

  return (
    <Layout className="layout ">
      <Header className="flex items-center justify-between lg:justify-start lg:gap-x-10 bg-[#fff8f6]">
        <div className="flex items-center justify-between ">
          <Button
            type="primary"
            onClick={() => dispatch(showSidebarDrawer())}
            className="lg:hidden "
          >
            <MenuOutlined />
          </Button>

          <Link href="/" className="w-48 h-16 ">
            <Image
              src="/CraftsmenPro-logos_black.png"
              alt="logo"
              width={180}
              height={60}
              className="bg-center bg-no-repeat bg-cover "
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
                <Menu.Item key={item.key} className="bg-[#fff8f6]">
                  <Link
                    href={item.href}
                    className="text-textSecondary font-bold "
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
              <UserAddOutlined /> Become a Services Provider
            </Button>

            {isUserLogged ? (
              <Button onClick={logoutHandler} type="text" danger>
                Logout
              </Button>
            ) : (
              <Button
                href="/auth/login"
                className=" hover:bg-secondary "
                type="primary"
              >
                Login
              </Button>
            )}
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
                href="/auth/service-provider-registration"
                className=""
                type="dashed"
              >
                <UserAddOutlined /> Become a Services Provider
              </Button>
              {isUserLogged ? (
                <Button
                  onClick={logoutHandler}
                  type="text"
                  className="  block mt-3"
                  danger
                >
                  Logout
                </Button>
              ) : (
                <Button
                  href="/auth/login"
                  className=" hover:bg-secondary block mt-3"
                  type="primary"
                >
                  Login
                </Button>
              )}
            </div>
          </div>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
