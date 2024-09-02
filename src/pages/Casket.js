import React, { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Checkbox from '@mui/material/Checkbox';
import TouchAppIcon from '@mui/icons-material/TouchApp';
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
    height: `calc(50% - ${drawerBleeding}px)`,
    overflow: 'visible',
  },
}));

const caskets = [
  {
    name: "Premium Oak Casket",
    description: "A beautifully crafted oak casket with a luxurious finish.",
    price: "ksh 20,000",
    details: "The Premium Oak Casket offers a timeless design with a rich oak finish, perfect for a dignified farewell.",
    image: "caskets/casket1.jpeg",
    colors: ["brown", "white", "black"], // Added color options
  },
  {
    name: "Classic Pine Casket",
    description: "A traditional pine casket known for its simplicity and elegance.",
    price: "Ksh. 15,000",
    details: "The Classic Pine Casket is known for its simplicity and elegance, crafted from high-quality pine wood.",
    image: "caskets/casket2.jpeg",
    colors: ["brown", "white", "black"], // Added color options
  },
  {
    name: "Modern Steel Casket",
    description: "A contemporary steel casket that combines strength and style.",
    price: "Ksh. 25,000",
    details: "The Modern Steel Casket combines strength and style with a sleek design and durable construction.",
    image: "caskets/casket8.jpeg",
    colors: ["brown", "white", "black"], // Added color options
  }
];

const Casket = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");
  const [selectedColor, setSelectedColor] = useState({});

  const handleOpenDrawer = (details) => {
    setDrawerContent(details);
    setDrawerOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleColorSelect = (casketName, color) => {
    setSelectedColor({ ...selectedColor, [casketName]: color });
  };

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
          <h1 className="text-3xl f  mb-6">Caskets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {caskets.map((casket) => (
              <div key={casket.name} className="bg-white shadow-div  shadow-lg rounded-lg flex flex-col">
                <img src={casket.image} alt={casket.name} className="w-full h-58 object-cover rounded-t-lg" />
                <div className="p-2   ">
                  <div className="flex justify-center items-center flex-wrap gap-2">
                    {casket.colors.map((color) => (
                      <div key={color} className="relative flex items-center">
                         {selectedColor[casket.name] === color && (
                         <TouchAppIcon className={`text-blue-900 `} />
                        )}
                        <Checkbox
                          checked={selectedColor[casket.name] === color}
                          onChange={() => handleColorSelect(casket.name, color)}
                          style={{ color: color }} // Set the color for the checkbox
                        />
                        <span className={`ml-2 ${selectedColor[casket.name] === color ? 'font-bold' : ''}`} style={{ color: selectedColor[casket.name] === color ? 'blue' : 'black' }}>
                          {color}
                        </span>
                       
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-2 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{casket.name}</h2>
                  <p className="mb-4 text-gray-700">{casket.description}</p>
                  <p className="mb-4 text-gray-700">{casket.price}</p>
                  <div className="flex justify-center mt-auto">
                  <Button
                    onClick={() => handleOpenDrawer(" With its elegant design and spacious interior, this car ensures a comfortable and dignified experience for all passengers. It is equipped with advanced safety features and a smooth driving experience, making it an ideal choice for those seeking both functionality and grace. Whether used for ceremonial purposes or as part of a procession, the Escort Car delivers a blend of sophistication and practicality.")}
                    className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm"
                  >
                    Learn More
                  </Button>
                
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
            ))}
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

Casket.propTypes = {
  window: PropTypes.func,
};

export default Casket;
