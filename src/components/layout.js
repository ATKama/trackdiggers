// src/components/Layout.js
import React from "react";
import SlideMenu from "./SlideMenu";
import { Theme } from "@quarkly/widgets";
import theme from "../theme";
import { GlobalQuarklyPageStyles } from "global-page-styles";

const Layout = ({ children, pageUrl = "index" }) => {
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={pageUrl} />
      <SlideMenu />
      {children}
    </Theme>
  );
};

export default Layout;