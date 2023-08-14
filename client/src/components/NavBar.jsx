import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, Link, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import logo from "../logo.png";

const theme = createTheme({
  navbar: {
    backgroundColor: "#fff",
    color: "black",
  },
});

const navItems = ["Home", "About", "Contact", "Login"];

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar component="nav" position="static" style={theme.navbar}>
        <Container component="container" maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#C32446" }}>
              <img src={logo} alt="logo" width={180} style={{ marginTop: 5 }} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  component={Link}
                  to="/"
                  key={item}
                  sx={{
                    color: "#162749",
                    marginLeft: "5vmin",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
