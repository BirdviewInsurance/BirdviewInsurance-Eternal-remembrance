import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BodyTransferAndCollection = () => {
  const [open, setOpen] = React.useState(false);

  const openContactDialog = () => {
    setOpen(true);
  };

  const closeContactDialog = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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

      <div className="flex flex-col items-center my-8">
        <div className="max-w-lg rounded overflow-hidden shadow-div shadow-lg bg-white p-8 mx-4 md:mx-0">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src="images/traditional_funeral.png" // Update the path to your image
            alt="Body Transfer and Collection"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">Body Transfer and Collection Service</div>
            
            <p className="text-gray-700 text-base mb-4">
              Our body transfer and collection services ensure respectful, timely, and professional handling of remains. We provide comprehensive solutions to meet your needs.
            </p>
            <div className="">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={openContactDialog}
              >
                Contact Us
              </Button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-yellow-500 text-xl">Negotiable Price</span>
              <span className="text-gray-500 text-sm">Available 24/7</span>
            </div>
          
            <div>
            <Button
            variant="contained"
            fullWidth
            style={{ marginTop: '16px',backgroundColor:'#1E3A8A' }}
          >
            Apply
          </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Component */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeContactDialog}
        aria-describedby="contact-dialog-description"
      >
        <DialogTitle>Contact Information</DialogTitle>
        <DialogContent>
        <DialogContentText id="contact-dialog-description">
            If you have any questions or need assistance, please contact us at:
            <br />
            <strong>Email:</strong> Customerservice@eternalremebrance.com
            <br />
            <strong>Phone:</strong>   +254 713 020 202
            <br /> 
            <strong>Phone:</strong>   +254 799 847 727
            <br />
            <strong>Phone:</strong>  +254 758 651 737
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeContactDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
}

export default BodyTransferAndCollection;
