import React, { useState } from 'react';
import { AppBar, Tabs, Tab, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const tabStyle = {
  fontFamily: 'Great Vibes, cursive',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
};

function AdminNav() {
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
            <Tab style={{ ...tabStyle }} label='Home' component={Link} to='/adminhome' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Requests' component={Link} to='/requests' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Add Accesories' component={Link} to="/add" disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='View Accesories' component={Link} to="/aaccesories" disableRipple disableFocusRipple />
          </Tabs>
        </AppBar>
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/adminhome">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/requests">Requests</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/add">Add Accesories</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/aaccesories">View Accesories</MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default AdminNav;
