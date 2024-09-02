import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return(
        <div>
            <footer className="bg-blue-900 p-2 relative bg-cover bg-center" style={{ backgroundImage: 'url(images/hearse2.png)' }}>
                <div className="bg-black bg-opacity-50 p-2 rounded-lg shadow-lg">
               
                  
                        <div className="flex flex-col items-center  uppercase bold-3xl justify-center m-3 bg-white bg-opacity-20 p-4 rounded-lg">
                        <div className="text-yellow-500 font-serif text-3xl md:text-4xl lg:text-5xl text-center max-w-xs">
                            <p>Honoring the Life and Memories of Loved Ones Lost.</p>
                        </div>
                        </div>
                        <div className="flex flex-col items-center m-3 md:items-start bg-white bg-opacity-20 p-4 rounded-lg">
                            <div className=" text-white  ">
                           <p> Address:</p>
                           <p>Head Office — 12 Ralph Bunche Road,</p>
                           <p>Kugeria Maisonette,</p>
                           <p> Suite 3,   1st floor. </p>
                           <p>Nairobi, Kenya </p>
                           
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row   mb-8  space-y-4 md:space-y-0 md:space-x-4 text-white text-sm">
                        <div className="flex flex-col items-center md:items-start bg-white bg-opacity-20 p-4 rounded-lg">
                            <div className="flex items-center space-x-2"><LocalPhoneIcon   /><span>+254 794 963 813</span></div>
                            <div className="flex items-center space-x-2"><LocationOnIcon   /><span>12 Ralph Bunche Road, Kugeria Maisonette, Suite 3 1st floor. Nairobi, Kenya</span></div>
                        </div>
                        <div className="flex flex-col items-center md:items-start bg-white bg-opacity-20 p-4 rounded-lg">
                            <div className=" ">
                            <p><b className=" ">Email:</b>  Customerservice@eternalremebrance.com</p>
                            <p><b className=" ">Phone:</b>  +254 713 020 202</p>
                            <p><b className=" ">Phone:</b>  +254 799 847 727</p>
                            <p><b className=" ">Phone:</b>  +254 758 651 737</p>

 
                            </div>
                        </div>
                        <div className="flex flex-colitems-center md:items-start bg-white bg-opacity-20 p-4 rounded-lg">
                            <div className="flex  ">
                                <FacebookIcon />
                                <EmailIcon />
                                <CloseIcon />
                                <WhatsAppIcon />
                                <YouTubeIcon />
                            </div>
                        </div>
                       
  
                    </div>


                </div>
            </footer>
            
        </div>
    );
}

export default Footer;
