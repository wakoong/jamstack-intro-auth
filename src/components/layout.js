import React from "react";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import { Link } from "gatsby";

import "./layout.css";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-oauth.netlify.app">
    <header>
      <Link to="/">JAMStack APP</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
