import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { label: 'HOME', id: 'home' },
  { label: 'SERVICES', id: 'services' },
  { label: 'ABOUT', id: 'about' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'CONTACT', id: 'contact' },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false); 
    }
  };

  const theme = useTheme();

  return (
    <AppBar sx={{ background: theme.palette.primary.main, position: 'fixed' }}>
       <Container maxWidth="xl">

      <Box sx={{ flexGrow: 1 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontFamily: theme.typography.fontFamily,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.secondary.main,
              textDecoration: 'none',

            }}
          >
            SPHERE CONSTRUCTIONS
          </Typography>

         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.secondary.main,
              textDecoration: 'none',
              fontSize: { xs: '17px' }
            }}
          >
             SPHERE CONSTRUCTIONS
          </Typography>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleCloseDrawer}
            sx={{
              '& .MuiDrawer-paper': {
                width: '100%', 
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

              },
            }}
          >
            
            <Button onClick={handleCloseDrawer} sx={{ color: 'white', alignSelf: 'flex-end', m: 2 }}>
              Close
            </Button>

          
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleScroll(page.id)}
                sx={{
                  color: page.label === 'HOME' ? theme.palette.secondary.main : 'white',
                  my: 2,
                  fontSize: '20px',
                  textTransform: 'capitalize',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Drawer>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleScroll(page.id)}
                sx={{
                  my: 3,
                  color: page.label === 'HOME' ? theme.palette.secondary.main : 'white',
                  display: 'block',
                  mx: 1,
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
       </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
