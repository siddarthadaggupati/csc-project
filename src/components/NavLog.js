import React, { useState } from 'react';
import { AppBar, Tabs, Tab, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import ChatBot from './ChatBot';

const tabStyle = {
  fontFamily: 'Great Vibes, cursive',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
};

function NavLog() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', boxShadow: 'none' }}>
          <img src={logo} alt='logo' style={{ height: '55px', width: '170px' }} />
          <IconButton edge="start" color="black" aria-label="menu" onClick={handleMenuClick} sx={{ display: { xs: 'block', md: 'none' }, marginLeft:'auto' }}>
            <MenuIcon />
          </IconButton>
          <Tabs centered sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tab style={{ ...tabStyle }} label='Home' component={Link} to='/ahome' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Adopt a pet' component={Link} to='/adopt' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='About PC' component={Link} to="/aabout" disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Contact' component={Link} to="/acontact" disableRipple disableFocusRipple />
           {/* <Tab style={{ ...tabStyle }} label='Help' component={Link} to="/ahelp" disableRipple disableFocusRipple/>*/}
            <Tab style={{ ...tabStyle }} label='Donate' component={Link} to='/adonate' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Accesories' component={Link} to='/accesories' disableRipple disableFocusRipple />
          </Tabs>
        </AppBar>
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/ahome">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/adopt">Adopt a pet</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/aabout">About PC</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/acontact">Contact</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/adonate">Donate</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/accesories">Accesories</MenuItem>
        </Menu>

        <footer> <ChatBot/> </footer>
      </React.Fragment>
    </div>
  );
}

export default NavLog;
