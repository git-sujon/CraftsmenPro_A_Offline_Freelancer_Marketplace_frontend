import Image from "next/image";
import footerLogo from "../../../assets/images/CraftsmenPro-logos_white.png";
import { Button, Divider, Input } from "antd";
import Link from "next/link";
import { CopyrightCircleFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <footer className="font-sans relative pt-5 pb-3 md:pb-6 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="flex w-full md:w-5/12">
              <div className="text-2xl px-4">
                <Image
                  src={footerLogo}
                  alt="logo"
                  width={300}
                  height={150}
                  className="w-full h-full max-h-[150px] max-w-[300px]"
                ></Image>
                <p className="mt-[-20px] text-white text-sm">
                 <span className="bg-green-700 px-1 rounded-full">CraftsmenPro</span> connects you with skilled professionals for a
                  wide range of face-to-face services. From home repairs to
                  maintenance tasks, we make your life easier.
                </p>
                <div className="flex-row my-4"></div>
              </div>
            </div>
            <div className="flex w-full md:w-5/12 px-4">
              <div className="text-2xl">
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  Subscribe
                </p>
                <p className="mt-2 mb-4 text-gray-600 dark:text-gray-400 text-sm">
                  Get the latest posts delivered right to your inbox
                </p>
                <div className="my-4">
                  <form id="footerForm" className="">
                    <Input
                      type="email"
                      name="email"
                      className="bg-white rounded-none"
                      size="large"
                      placeholder="Enter Email Address"
                    />
                    <Button
                      type="primary"
                      size="large"
                      className="mt-2 rounded-none"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-2/12 px-4">
              <div className="flex flex-wrap items-top">
                <div className="w-full  ml-auto">
                  <p className="font-bold text-2xl text-gray-900 dark:text-gray-100">
                    Popular Links
                  </p>
                  <ul className="list-unstyled mt-2 mb-4">
                    <li>
                      <Link
                        href={"/services"}
                        className="text-white hover:text-primary font-semibold no-underline"
                      >
                        Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/services"}
                        className="text-white hover:text-primary font-semibold no-underline"
                      >
                        Blogs
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/services"}
                        className="text-white hover:text-primary font-semibold no-underline"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/services"}
                        className="text-white hover:text-primary font-semibold no-underline"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Divider className="my-1 border-secondary"/>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center text-white">
              <div className="text-sm  pt-2">
                <CopyrightCircleFilled  />
                <span id="year"> 2023</span>
                <Link
                  href="https://github.com/git-sujon"
                  className="hover:underline text-white no-underline hover:text-primary ml-2"
                  target="_blank"
                >
                  Moniruzzaman Sujon
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
