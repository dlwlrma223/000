import React from 'react'
import { AppBar, Toolbar, IconButton,Typography, Stack, Button } from "@mui/material"
import { Home } from '@mui/icons-material';

/* https://www.youtube.com/watch?v=y9iX6sfB40k */
const MuiNavbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" aria-label="logo">
            <Home></Home>
            </IconButton>
            <Typography variant='h6' component="div" sx={{ flexGrow:1 }}>
                Homeeeee
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">country</Button>
                <Button color="inherit">categories</Button>
                <Button color="inherit">restaurant</Button>
                <Button color="inherit">AboutUs&Contacts</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
