import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

class SignInSignUpHeader extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" sx={{ backgroundColor: "#00A1C9" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              <NavLink to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
                Register User
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              <NavLink to="/login" style={{ color: 'green', textDecoration: 'none' }}>
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default SignInSignUpHeader;