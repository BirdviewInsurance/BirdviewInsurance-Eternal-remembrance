import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import Paper from '@mui/material/Paper';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.css';
import { useNavigate } from 'react-router-dom';
 

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

 
  const toggleDrawer  = () => {
    setOpenDrawer((prevOpen) => !prevOpen);
  };

  const navigate = useNavigate();

  const navigateTo = (link) => () => {
    setOpen(false);
    navigate(link);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
    <List>
     
      <List>
      <ListItem  onClick={navigateTo('/')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <HomeIcon className='text-yellow-500'/>
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
      <Divider />
        <ListItem onClick={navigateTo('/transportation')}  disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <AirportShuttleIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Transportation'} />
          </ListItemButton>
        </ListItem>
      <Divider />

        <ListItem onClick={navigateTo('/casket')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
           < IndeterminateCheckBoxIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Caskets'} />
          </ListItemButton>
        </ListItem>
      <Divider />

        <ListItem onClick={navigateTo('/funeral-service')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <AddHomeWorkIcon  className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Funeral Services'} />
          </ListItemButton>
        </ListItem>
      <Divider />
        <ListItem onClick={navigateTo('/international-repatriation')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <LocalAirportIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'International Repatriation'} />
          </ListItemButton>
        </ListItem>
      <Divider /> 
        <ListItem onClick={navigateTo('/body-transfer-and-collection')}  disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <HotelIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Body Collection & Transfer'} />
          </ListItemButton>
        </ListItem>
      <Divider /> 
        <ListItem onClick={navigateTo('/photography-video-services')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <CameraEnhanceIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Photography & Video Services'} />
          </ListItemButton>
        </ListItem>
      <Divider />
    <ListItem onClick={navigateTo('/funeral-package')} disablePadding>
      <ListItemButton>
        <ListItemIcon>
        <HomeRepairServiceIcon className='text-yellow-500' />
        </ListItemIcon>
        <ListItemText primary={'Funeral Package'} />
      </ListItemButton>
    </ListItem>
      <Divider />
      <ListItem   onClick={navigateTo('/cart')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <  ShoppingCartIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Cart'} />
          </ListItemButton>
        </ListItem>
      <Divider />
      <ListItem     onClick={navigateTo('/about')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            < InfoIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'About Us'} />
          </ListItemButton>
        </ListItem>
      <Divider />
      <ListItem   onClick={navigateTo('/signup')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            < HowToRegIcon  className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Sign Up'} />
          </ListItemButton>
        </ListItem>
      <Divider />
      <ListItem   onClick={navigateTo('/login')}  disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <LoginIcon className='text-yellow-500' />
            </ListItemIcon>
            <ListItemText primary={'Sign In'} />
          </ListItemButton>
        </ListItem>
      <Divider />

      </List>
    </List>
  </Box>
  );


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);


    return (


        <div>
     <div className="topContactDetails flex bg-blue-900 p-1"  >
        <div className="flex space-x-4 text-white text-sm">
          <div className="flex items-center"><LocalPhoneIcon /> +254 794 963 813, +254 799 847 727, +254 758 651 737 </div>
        </div>
        <div className="flex ml-auto space-x-3 text-white">
          <FacebookIcon />
          <EmailIcon />
          <CloseIcon />
          <WhatsAppIcon />
          <YouTubeIcon />
        </div>
      </div>
  
      <div className="flex bg-blue-900 relative bg-cover bg-center p-1 " style={{ backgroundImage: 'url(images/hearse2.png)' }} >
      <div className='w-full bg-black bg-opacity-50 '>
        <div className="container mx-auto flex items-center justify-between p-4  bg-white bg-opacity-20 ">
        <div className="flex items-center space-x-2">
            <img src="images/logo.png" alt="Logo" className="h-24 w-24" />
            <div className="CompanyHeadName flex flex-col">
              <p className='text-yellow-500 text-2xl'>Eternal</p>
              <p className='text-yellow-500 text-2xl'>Remembrance</p>
            </div>
         
          </div>
  
  
          <div className=" searchbarOnBlackBackground flex items-center justify-center w-full relative">
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <KeyboardIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Items"
                inputProps={{ 'aria-label': 'search items' }}
              />  
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary"  sx={{ p: '10px', color: '#1E3A8A'  }}  aria-label="directions">
                <SubdirectoryArrowRightIcon />
              </IconButton>
            </Paper>
          </div>

          <div className="topCartAndSiginIcons flex items-center space-x-4 text-white relative">
            <div className="relative">
                  
              < ShoppingCartIcon fontSize="large"  onClick={navigateTo('/cart')}  />
              <span className="absolute top-0 right-0 bg-green-700 text-white text-xs rounded-full px-2 py-1 ">
                5
              </span>
            </div>
            <LoginIcon fontSize="large" />
          </div>

          <div className="topMenuIconPhoneSmallScreen flex items-center space-x-4   relative p-2">
              <div className="relative">
                <ShoppingCartIcon
                  fontSize="large"
                  onClick={navigateTo('/cart')}
                  sx={{ color: '#ffffff' }} // Example: Custom blue color
                />
                <span   onClick={navigateTo('/cart')} className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                  5
                </span>
              </div> 
              <MenuIcon
                onClick={toggleDrawer}
                fontSize="large"
                sx={{ color: '#ffffff' }} // Example: Custom green color
              />
              <Drawer open={openDrawer} onClose={toggleDrawer}>
                {DrawerList}
              </Drawer>
            </div>


        </div>
        </div>
        

      
      </div>

  
      {/* navidation tabs */}
      
      <div className='horizontalMenuItems bg-white'>
               <div className="flex  bg-blue-900 p-3   ">
            <div className="container mx-auto flex items-center justify-center   bg-opacity-70">
                <div className="flex items-center space-x-10 text-white">
                
                   <Button
                    id="composition-button"
                    aria-haspopup="true"
                    style={{color: 'white'}}
                    startIcon={<HomeIcon />}
                    onClick={navigateTo('/')}
                    >
                    Home
                    </Button>
                               
                 
                    <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{color: 'white'}}
                    
                    startIcon={<FormatListBulletedIcon />}
                    >
                    Services
                    </Button>
                    <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    style={{ zIndex: 50 }}
                    >
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                            > 
                                <MenuItem onClick={navigateTo('/transportation')} >Transportion</MenuItem>
                                <MenuItem onClick={navigateTo('/casket')} >Caskets</MenuItem>
                                <MenuItem onClick={navigateTo('/funeral-service')} >Funeral Services</MenuItem>
                                <MenuItem onClick={navigateTo('/international-repatriation')} >International Repatriation</MenuItem>
                                <MenuItem onClick={navigateTo('/body-transfer-and-collection')} >Body Collection & Transfer</MenuItem>
                                <MenuItem onClick={navigateTo('/photography-video-services')} >Photography & Video Services</MenuItem>

                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                    <Button
                    id="composition-button"
                    aria-haspopup="true"
                    style={{color: 'white'}}
                    startIcon={<HomeRepairServiceIcon />}
                    onClick={navigateTo('/funeral-package')}

                    >
                    Funeral Package
                    </Button>
                   <Button
                    id="composition-button"
                    aria-haspopup="true"
                    style={{color: 'white'}}
                    startIcon={<ShoppingCartIcon />}
                    onClick={navigateTo('/cart')}

                    >
                    Cart
                    </Button>
                    <Button
                    id="composition-button"
                    aria-haspopup="true"
                    style={{color: 'white'}}
                    startIcon={<InfoIcon />}
                    onClick={navigateTo('/about')}
                    >
                    About Us
                    </Button>
                    <Button
                    id="composition-button"
                    aria-haspopup="true"
                    style={{color: 'white'}}
                    
                    onClick={navigateTo('/signup')}

                    startIcon={<HowToRegIcon />}

                    >
                    Sign Up
                    </Button>
                    <Button
                    id="composition-button"
                    aria-haspopup="true"
                    style={{color: 'white'}}
                    onClick={navigateTo('/login')}
                    startIcon={<LoginIcon />}

                    >
                    Sign In
                    </Button>
                 
                </div>
            </div>
            </div>
            </div>

            <div className="flex bg-blue-900">

            <div className=" searchbarOnBlueBackground flex  items-center p-3 justify-center shadow-3xl w-full relative">
                  <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                  >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                      <KeyboardIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Items"
                      inputProps={{ 'aria-label': 'search items' }}
                    />  
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px', color: '#1E3A8A'  }}   aria-label="directions">
                      <SubdirectoryArrowRightIcon />
                    </IconButton>
                  </Paper>
                </div> 
            </div>


        </div>

    );
};

export default Header;

    
