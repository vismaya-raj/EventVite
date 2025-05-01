import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setProfilePicture('');
    setIsLoggedIn(false);
  };

  const clientId = "267021333088-aip70ei1iihpnkvgg7vhrovou1ro3uet.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    if (response.accessToken) {
      setIsAuthenticated(true);
      setProfilePicture(response.profileObj.imageUrl);
      setIsLoggedIn(true);
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo + Brand */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="EventVite Logo"
              src="https://img.freepik.com/premium-vector/alphabetical-letter-e-logo-collection_647881-448.jpg"
              sx={{ width: 40, height: 40 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".15rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: { xs: "1rem", sm: "1.5rem" },
              }}
            >
              EventVite
            </Typography>
          </Box>

          {/* User Login/Profile */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={isLoggedIn ? "Account" : "Login"}>
              <div>
                {isLoggedIn ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={profilePicture}
                      alt="User"
                      sx={{ width: 33, height: 33 }}
                    />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon sx={{ fontSize: 33 }} />
                  </IconButton>
                )}
              </div>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                {isAuthenticated ? (
                  <Box>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Box>
                ) : (
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
