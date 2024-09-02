import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const videoRef = useRef(null);
  

  const contactUsDetails = `Email: hallo@eternalremembrance.com Phone: +254 758 651 737`;
  const information = 'Location: 12 Ralph Bunche Road, Kugeria Maisonette, Suite 3 1st floor. Nairobi, Kenya';

  const handleClickOpenAlert = (message) => {
    setAlertMessage(message);
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div>
      <Header />

      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAlert}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Alert Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {alertMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert}>OK</Button>
        </DialogActions>
      </Dialog>

      <div className="flex justify-center py-8">
      <div className="flex justify-center items-center p-6 m-3">
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
          {/* Content Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <div className="flex mr-2 ml-2 ">
            
              <div className="bg-white rounded-lg overflow-hidden shadow-div flex flex-col w-full">
                <img src="images/casket5.png" alt="Card 3" className="w-full h-53 object-cover" />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Caskets</h3>
                  <p className="text-gray-700">
                    We offer a variety of high-quality caskets designed to meet the diverse needs and preferences of families. Our selection ensures a dignified and respectful farewell.
                  </p>
                </div>
                <div className="flex justify-end p-4">
                  <Box sx={{ width: 500 }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction label="Details" onClick={() => handleClickOpenAlert(information)} icon={<InfoIcon />} />
                      <BottomNavigationAction label="Contact Us" onClick={() => handleClickOpenAlert(contactUsDetails)} icon={<ContactPhoneIcon />} />
                      <BottomNavigationAction label="View More" icon={<ViewModuleIcon />} />
                    </BottomNavigation>
                  </Box>
                </div>
              </div>
            </div>
            <div className="flex mr-2 ml-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-div flex flex-col w-full">
                <img src="images/TransportServices.jpeg" alt="Card 2" className="w-full h-78 object-cover" />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Transport Services</h3>
                  <p className="text-gray-700">
                    We are dedicated to providing reliable and professional transport services to help you honor your loved one’s memory. We understand that every family’s needs are unique, and we are committed to providing personalized support and attention.
                  </p>
                </div>
                <div className="flex justify-end p-4">
                  <Box sx={{ width: 500 }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction label="Details" onClick={() => handleClickOpenAlert(information)} icon={<InfoIcon />} />
                      <BottomNavigationAction label="Contact Us" onClick={() => handleClickOpenAlert(contactUsDetails)} icon={<ContactPhoneIcon />} />
                      <BottomNavigationAction label="View More" icon={<ViewModuleIcon />} />
                    </BottomNavigation>
                  </Box>
                </div>
              </div>
            </div>
            <div className="flex mr-2 ml-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-div flex flex-col w-full">
                <img src="images/tents.png" alt="Card 1" className="w-full h-53 object-cover" />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Funeral Services</h3>
                  <p className="text-gray-700">
                    Our funeral services include design, coordination, and various other offerings to ensure a dignified farewell for your loved ones.
                  </p>
                </div>
                <div className="flex justify-end p-4">
                  <Box sx={{ width: 500 }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction label="Details" onClick={() => handleClickOpenAlert(information)} icon={<InfoIcon />} />
                      <BottomNavigationAction label="Contact Us" onClick={() => handleClickOpenAlert(contactUsDetails)} icon={<ContactPhoneIcon />} />
                      <BottomNavigationAction label="View More" icon={<ViewModuleIcon />} />
                    </BottomNavigation>
                  </Box>
                </div>
              </div>
            </div>
            <div className="flex mr-2 ml-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-div flex flex-col w-full">
                <img src="images/repatrition.png" alt="Card 1" className="w-full h-53 object-cover" />
                <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">International Repatriation </h3>
                <p className="text-gray-700">
                    We offer comprehensive body collection and transfer services across the globe, ensuring a seamless and respectful journey for your loved ones to any destination worldwide.
                  </p>


                </div>
                <div className="flex justify-end p-4">
                  <Box sx={{ width: 500 }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction label="Details" onClick={() => handleClickOpenAlert(information)} icon={<InfoIcon />} />
                      <BottomNavigationAction label="Contact Us" onClick={() => handleClickOpenAlert(contactUsDetails)} icon={<ContactPhoneIcon />} />
                      <BottomNavigationAction label="View More" icon={<ViewModuleIcon />} />
                    </BottomNavigation>
                  </Box>
                </div>
              </div>
            </div>
            <div className="flex mr-2 ml-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-div flex flex-col w-full">
                <img src="images/traditional_funeral.png" alt="Card 1" className="w-58 h-100 object-cover" />
                <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">Body Collection and Transfer </h3>
                 <p className="text-gray-700">We provide comprehensive body collection and transfer services, guaranteeing a seamless journey for your loved ones to their intended destination.</p>

                </div> 
                <div className="flex justify-end p-4">
                  <Box sx={{ width: 500 }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction label="Details" onClick={() => handleClickOpenAlert(information)} icon={<InfoIcon />} />
                      <BottomNavigationAction label="Contact Us" onClick={() => handleClickOpenAlert(contactUsDetails)} icon={<ContactPhoneIcon />} />
                      <BottomNavigationAction label="View More" icon={<ViewModuleIcon />} />
                    </BottomNavigation>
                  </Box>
                </div>
              </div>
            </div>
            <div className="flex mr-2 ml-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-div flex flex-col w-full">
                <img src="images/camera1.png" alt="Card 1" className="w-53 h-53 object-cover" />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Photography & Video Services</h3>
                  <p className="text-gray-700">We provide comprehensive body collection and transfer services, guaranteeing a seamless journey for your loved ones to their intended destination.</p>
                </div>
                <div className="flex justify-end p-4">
                  <Box sx={{ width: 500 }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction label="Details" onClick={() => handleClickOpenAlert(information)} icon={<InfoIcon />} />
                      <BottomNavigationAction label="Contact Us" onClick={() => handleClickOpenAlert(contactUsDetails)} icon={<ContactPhoneIcon />} />
                      <BottomNavigationAction label="View More" icon={<ViewModuleIcon />} />
                    </BottomNavigation>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex flex-col max-w-lg mx-auto mb-4 bg-white shadow-div shadow-lg rounded-lg">
  <div className="flex-grow p-4">
    <div className="flex flex-col">
      <h5 className="text-2xl font-semibold">Live Funeral Convoy</h5>
      <p className="text-gray-500">Hearse</p>
    </div>
    <div className="flex items-center pt-2 pb-1">
      <IconButton aria-label="previous">
        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
      </IconButton>
      <IconButton aria-label="play/pause" onClick={handlePlayPause}>
        <PlayArrowIcon className="h-7 w-7" />
      </IconButton>
      <IconButton aria-label="next">
        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
      </IconButton>
    </div>
  </div>
  <div className="w-full h-80">
    <video
      ref={videoRef}
      className="object-cover w-full h-full rounded-lg"
      src="images/video.mp4"
      alt="Live from space video cover"
      muted
    />
  </div>
</div>


      <Footer />
    </div>
  );
};

export default Home;
