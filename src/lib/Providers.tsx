"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import {  ConfigProvider } from 'antd';
import theme from "../../theme";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
       <ConfigProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ConfigProvider>
    </Provider>
  );
};

export default Providers;
