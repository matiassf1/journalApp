import Box from "@mui/material/Box";
import { useState } from "react";
import { NavBar, SideBar } from "../components";
import { NotesResponsive } from "../components/NotesResponsive";

import Toolbar from "@mui/material/Toolbar";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { height, width } = useWindowDimensions();

  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      {width < 600 ? (
        <NotesResponsive
          drawerWidth={240}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      ) : (
        <SideBar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
