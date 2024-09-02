import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, Typography, Divider, IconButton, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import PersonIcon from '@mui/icons-material/Person';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import '../pages/FuneralPackage.css';

const packageIcons = {
  Hearse: <LocalCarWashIcon className="text-gray-700" />,
  "Personal Assistant Available": <PersonIcon className="text-blue-900" />,
  "Driver Provided": <LocalCarWashIcon className="text-gray-700" />,
  "Grass / Red Carpet": <FiberManualRecordIcon className="text-green-500" />,
  "Number Plate": <FiberManualRecordIcon className="text-gray-500" />,
  "Casket & Wreaths": <IndeterminateCheckBoxIcon className="text-yellow-500" />,
  "Escort Cars": <LocalCarWashIcon className="text-gray-700" />,
  
  "Photography & Video Coverage": <CameraAltIcon className="text-red-500" />,
};
 
const packageStarColors = {
  Ruby: 'blue',
  Emerald: 'green',
  Sapphire: 'yellow',
  RedBeryl: 'red'
};

const packages = [
  {
    name: "Ruby",
    features: [
      "Hearse",
      "Personal Assistant Available",
      "Driver Provided",
      "Grass / Red Carpet",
      "Number Plate",
    ],
  },
  {
    name: "Emerald",
    features: [
      "Hearse",
      "Personal Assistant Available",
      "Driver Provided",
      "Grass / Red Carpet",
      "Number Plate",
      "Casket & Wreaths",
    ],
  },
  {
    name: "Sapphire",
    features: [
      "Hearse",
      "Personal Assistant Available",
      "Driver Provided",
      "Grass / Red Carpet",
      "Number Plate",
      "Escort Cars",
      "Casket & Wreaths",
    ],
  },
  {
    name: "Red Beryl",
    features: [
      "Hearse",
      "Personal Assistant Available",
      "Driver Provided",
      "Grass / Red Carpet",
      "Number Plate",
      "Escort Cars",
      "Casket & Wreaths",
      "Photography & Video Coverage",
    ],
  },
];

const FuneralPackage = () => {
  const handleAddToCart = (pkgName) => {
    console.log(`${pkgName} added to cart`);
    // Add your cart logic here
  };

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
      <div className="p-6 m-3">
        <h1 className="text-3xl font-semibold mb-6 text-center">Funeral Packages</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="bg-white shadow-3xl shadow-div rounded-lg flex flex-col">
              <CardContent className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <Typography variant="h5" component="div">
                    {pkg.name}
                  </Typography>
                  <IconButton aria-label="star">
                    <StarIcon className={`text-${packageStarColors[pkg.name.replace(" ", "")]}-500`} />
                  </IconButton>
                </div>
                <Divider className="mb-4" />
                <ul className="list-disc list-inside">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <span className="mr-2">{packageIcons[feature]}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button 
                    variant="contained" className="text-blue-900" 
                    sx={{ backgroundColor: '#1E3A8A',  '&:hover': { backgroundColor: 'blue.700' } }}
                    fullWidth 
                    onClick={() => handleAddToCart(pkg.name)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer className="mt-12" />
    </div>
  );
};

export default FuneralPackage;
