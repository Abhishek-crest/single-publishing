import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box>
        <Sidebar />
        <main className="d-flex">{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;
