import React, { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import Header from "../components/Header";
import Footer from "../components/Footer";

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const CustomDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    height: '50vh', // Set the height of the drawer to 50% of the viewport height
    overflow: 'visible',
    top: 'auto', // Ensure the drawer starts from the bottom
    bottom: 0,
  },
}));

const Transportation = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");

  const handleOpenDrawer = (details) => {
    setDrawerContent(details);
    setDrawerOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  // This is used only for the example
  const container = props.window !== undefined ? () => props.window().document.body : undefined;

  return (
    <div>
         <style>
            {`
              .shadow-div {
                background-color: white;
                box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                padding: 16px;
              }
            `}
          </style>
      <Header />
      <div className="flex justify-center items-center h-full p-6 m-3">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6">Transportation</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div key="Luxury Hearse" className="bg-white shadow-lg shadow-div rounded-lg flex flex-col">
              <img src="cars/mercedes.jpeg" alt="Luxury Hearse" className="w-full h-58 object-cover rounded-t-lg" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">Luxury Hearse</h2>
                <p className="mb-4 text-gray-700">
                  The Luxury Hearse redefines opulence and comfort with its premium features and sophisticated design.
                </p>
                <div className="flex justify-center mt-auto">
                  <Button
                    onClick={() => handleOpenDrawer(" With its elegant design and spacious interior, this car ensures a comfortable and dignified experience for all passengers. It is equipped with advanced safety features and a smooth driving experience, making it an ideal choice for those seeking both functionality and grace. Whether used for ceremonial purposes or as part of a procession, the Escort Car delivers a blend of sophistication and practicality.")}
                    className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm"
                  >
                    Learn More
                  </Button>
                
                </div>
                <div className="flex items-center justify-between mb-4">
              <span className="text-yellow-500 text-xl">Negotiable Price</span>
              <span className="text-gray-500 text-sm">Available 24/7</span>
            </div>
                <div className="flex justify-center mt-2">
                
                  <button
                    className="bg-blue-900 w-full text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div key="Classic Hearse" className="bg-white shadow-lg shadow-div rounded-lg flex flex-col">
              <img src="cars/caravan.png" alt="Classic Hearse" className="w-full h-58 object-cover rounded-t-lg" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">Classic Hearse</h2>
                <p className="mb-4 text-gray-700">
                  The Classic Hearse embodies elegance and reverence with its timeless design and meticulous craftsmanship.
                </p>
                <div className="flex justify-center mt-auto">
                  <Button
                    onClick={() => handleOpenDrawer(" With its elegant design and spacious interior, this car ensures a comfortable and dignified experience for all passengers. It is equipped with advanced safety features and a smooth driving experience, making it an ideal choice for those seeking both functionality and grace. Whether used for ceremonial purposes or as part of a procession, the Escort Car delivers a blend of sophistication and practicality.")}
                    className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm"
                  >
                    Learn More
                  </Button>
                
                </div>
                <div className="flex items-center justify-between mb-4">
              <span className="text-yellow-500 text-xl">Negotiable Price</span>
              <span className="text-gray-500 text-sm">Available 24/7</span>
            </div>
                <div className="flex justify-center mt-2">
                
                  <button
                    className="bg-blue-900 w-full text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div key="Escort Car" className="bg-white shadow-lg shadow-div rounded-lg flex flex-col">
              <img src="cars/caravan.png" alt="Escort Car" className="w-full h-58 object-cover rounded-t-lg" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">Escort Car</h2>
                <p className="mb-4 text-gray-700">
                  The Escort Car is a stylish and reliable vehicle designed to provide seamless support during ceremonies.
                </p>
                <div className="flex justify-center mt-auto">
                  <Button
                    onClick={() => handleOpenDrawer(" With its elegant design and spacious interior, this car ensures a comfortable and dignified experience for all passengers. It is equipped with advanced safety features and a smooth driving experience, making it an ideal choice for those seeking both functionality and grace. Whether used for ceremonial purposes or as part of a procession, the Escort Car delivers a blend of sophistication and practicality.")}
                    className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm"
                  >
                    Learn More
                  </Button>
                
                </div>
                <div className="flex items-center justify-between mb-4">
              <span className="text-yellow-500 text-xl">Negotiable Price</span>
              <span className="text-gray-500 text-sm">Available 24/7</span>
            </div>
                <div className="flex justify-center mt-2">
                
                  <button
                    className="bg-blue-900 w-full text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Root>
        <CssBaseline />
        <CustomDrawer
          container={container}
          anchor="bottom"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: 'calc(50% - 56px)', // Adjust height to fit within 50% of viewport height considering padding and other elements
              overflow: 'auto',
            }}
          >
            <Typography sx={{ p: 2, color: 'text.secondary' }}>Details</Typography>
          <Typography sx={{ p: 2 }}>{drawerContent}</Typography>
          </StyledBox>

          </StyledBox>

        </CustomDrawer>
      </Root>
      <Footer />
    </div>
  );
};

Transportation.propTypes = {
  window: PropTypes.func,
};

export default Transportation;
