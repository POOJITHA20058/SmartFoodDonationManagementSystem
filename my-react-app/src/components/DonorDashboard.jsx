import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, Typography, CssBaseline, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function DonorDashboard() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Dashboard", "Recent Donations", "Orphanages"];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: "primary.main" }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Donor Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#333", color: "#fff" },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text} onClick={() => setSelectedMenu(text)} sx={{ "&:hover": { bgcolor: "primary.light" } }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4">{selectedMenu}</Typography>
        <Box sx={{ mt: 2, bgcolor: "#fff", p: 2, borderRadius: "8px", boxShadow: 3 }}>
          {selectedMenu === "Dashboard" && <Typography>Welcome to your donor dashboard! Here you can manage donations.</Typography>}
          {selectedMenu === "Recent Donations" && <Typography>View your recent donations here.</Typography>}
          {selectedMenu === "Orphanages" && (
            <Typography>
              Explore orphanages in need of support. <Link to="/orphanages">Click here</Link> to view more.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default DonorDashboard;
