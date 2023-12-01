import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button} from '@mui/material'
import { NavLink, } from 'react-router-dom';

const NavBar = () => {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Logo
          </Typography>
          <Button color="inherit"  component={NavLink} to='/' >DASHBOARD</Button>
          <Button color='inherit'  component={NavLink} to='/Ads'>CREATE ADS</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
