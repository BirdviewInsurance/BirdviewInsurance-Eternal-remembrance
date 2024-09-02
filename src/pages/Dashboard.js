import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import './Dashboard.css';
import 'ldrs/ring'
import axios from 'axios';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Apps from '@mui/icons-material/Apps';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ClickAwayListener, Tooltip } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
 
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Dashboard = () => {

    const [transactions, setTransactions] = useState([]);
    const [phoneOrders, setPhoneOrders] = useState([]);
    const [mobiPhonesUsers, setMobiPhonesUsers] = useState([]);
    const [phoneReviews, setPhoneReviews] = useState([]);
    const [promotionGifs, setPromotionGifs] = useState([]);
    const [currentView, setCurrentView] = useState('transactionsView');
    const [open, setOpen] = React.useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [details, setDetails] = useState(null);
   
    
    




    // Function to format timestamp to date
    const formatTimestampToDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };

    // Function to toggle between views
    const handleViewChange = (viewName) => {
        setCurrentView(viewName);
        setOpen(false)
    };

    
    const handleClick = (index, row) => {
        if (clickedIndex === index) {
            setClickedIndex(null);
            setDetails(null);
        } else {
            setClickedIndex(index);
            setDetails(row);
        }
    };


    const handleClickAway = () => {
        setClickedIndex(null);
        setDetails(null);
    };

    // Fetch data from the API  
    useEffect(() => {
        // fetch Tansactions data
        const fetchTransaction = async () => {
            try {
                const response = await axios.get('/transactions.json');
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        };
        //  fetch Phone Orders data
        const fetchPhoneOrders = async () => {
            try {
                const response = await axios.get('/phoneOrder.json');
                setPhoneOrders(response.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        }
        // fetch Mobi Phones Users data
        const fetchMobiPhonesUsers = async () => {
            try {
                const response = await axios.get('/mobiPhonesUsers.json');
                setMobiPhonesUsers(response.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        }
        // fetch Phone Reviews data
        const fetchPhoneReviews = async () => {
            try {
                const response = await axios.get('/review.json');
                setPhoneReviews(response.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        }
        // fetch Promotion Gifts
        const fetchPromotionGifs = async () => {
            try {
                const response = await axios.get('/promotion.json');
                setPromotionGifs(response.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        }


        fetchPhoneOrders();
        fetchPromotionGifs();
        fetchPhoneReviews();
        fetchTransaction();
        fetchMobiPhonesUsers();
    }, []);

 
    
   



    //   Sell Phones Components 
    const [fileName, setFileName] = useState('');

        const handleFileChange = (event) => {
            if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            } else {
            setFileName('');
            }
        };


    

    return (
        <div>
            <Header />
                    <Drawer  open={open} onClose={() => setOpen(false)}>
                       <div className={`text-white bg-blue-900 mb-1 m-1 mt-3  cursor-pointer ${currentView === 'transactionsView' ? 'bg-gray-500' : ''}`} onClick={() => handleViewChange('transactionsView')}>
                            <p className="p-2">Transactions</p>
                        </div>
                        <div className={`text-white bg-blue-900 mb-1 m-1 border   cursor-pointer ${currentView === 'sellCasketsView' ? ' bg-gray-500' : ''}`} onClick={() => handleViewChange('sellCasketsView')}>
                            <p className="p-2">Sell Casket</p>
                        </div>
                        <div className={`text-white bg-blue-900 mb-1 m-1 cursor-pointer ${currentView === 'OrdersView' ? 'bg-gray-500' : ''}`} onClick={() => handleViewChange('OrdersView')}>
                            <p className="p-2">Items Order</p>
                        </div>
                        <div className={`text-white bg-blue-900 mb-1 m-1 cursor-pointer ${currentView === 'UsersView' ? 'bg-gray-500' : ''}`} onClick={() => handleViewChange('UsersView')}>
                            <p className="p-2">Users</p>
                        </div>
                        <div className={`text-white bg-blue-900 mb-1 m-1 cursor-pointer ${currentView === 'ReviewsView' ? 'bg-gray-500' : ''}`} onClick={() => handleViewChange('ReviewsView')}>
                            <p className="p-2">Reviews</p>
                        </div>
                        <div className={`text-white bg-blue-900 mb-1 m-1 cursor-pointer ${currentView === 'promotionsView' ? 'bg-gray-500' : ''}`} onClick={() => handleViewChange('promotionsView')}>
                            <p className="p-2">Promotions Gifts </p>
                        </div>
                        <div className={`text-white bg-blue-900 mb-1 m-1 cursor-pointer ${currentView === 'settingsView' ? 'bg-gray-500' : ''}`} onClick={() => handleViewChange('settingsView')}>
                            <p className="p-2">Settings</p>
                        </div>
                    </Drawer>

            <div className="flex">

                <div className="flex-1">

                    {/* Render the selected view based on currentView state */}
                    {currentView === 'sellCasketsView' && (
                        <div className="bg-white h-screen p-2   shadow-3xl">
                            {/* Sell Phone Content */}
                            <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Sell Caskets</p>
                                    <div className="flex-none p-3">
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                    </div>
                                </div>
                            <form className="mt-4">
                                <div className="flex justify-between">
                                    <div className="flex-1">
                                        <TextField id="sell-casket-Name" label="Casket Name" variant="standard" fullWidth />
                                    </div>

                                    <div className="flex-1 ml-2">
                                        <TextField id="sell-casket-price" label="Casket Price" variant="standard" fullWidth />
                                    </div>
                                </div>

                                <div className="flex-1 mt-3 flex justify-center">
                                    <Button  onChange={handleFileChange} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />} > <span className="truncate  max-w-[10rem] max-w-xs"> {fileName ? `Selected: ${fileName}` : 'Upload Image'} </span><VisuallyHiddenInput type="file" />   </Button>
                                </div>

                                <div className="flex-1 mt-3">
                                    <TextField id="sell-casket-description" label="Casket Description" multiline fullWidth />
                                </div>

                                <div className="flex justify-start mt-4">
                                    <Button variant="contained" endIcon={<SendIcon />}>SUBMIT</Button>
                                </div>

                            </form>

                        </div>



                    )}

                    {currentView === 'OrdersView' && (
                        <div className="bg-white h-screen p-2  shadow-3xl">
                            {/* Phone Orders Content */}
                            <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Orders</p>
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                </div>
                            <div className="w-full  mt-2">
                                <div className="text-white   grid grid-cols-4 gap-4  bg-gray-600 phone-orders ">
                                    <div className="p-2">Item Name</div>
                                    <div className="p-2 phone-orders-quantity ">Quantity</div>
                                    <div className="p-2">Amount</div>
                                    <div className="p-2">Status</div>
                                </div>
                                {phoneOrders.map((row, index) => (
                                    <div
                                        key={index}
                                        className={`relative grid grid-cols-4 gap-4 phone-orders ${index % 2 === 0 ? 'bg-gray-200' : ''}`}
                                    >
                                        <div className="p-2">{row.Item}  
                                            <Tooltip title={`Show Details`}>
                                                <IconButton onClick={() => handleClick(index, row)}>
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                            </Tooltip></div>
                                        <div className="p-2 phone-orders-quantity ">{row.Quantity}</div>    
                                        <div className="p-2">{row.Amount}</div>
                                        <div className={`${row.status.toLowerCase() === 'pending' ? 'text-red-500' : 'text-green-500'} p-2`} >{row.status}</div>

                                        {clickedIndex === index && details && (
                                            <ClickAwayListener onClickAway={handleClickAway}>
                                                <div className="absolute top-0 left-1/4 mt-10 p-4 text-white bg-gray-600  opacity-100 border shadow-lg z-10">
                                                    <p><strong>Casket Name:</strong> {details.Item}</p>
                                                    <p><strong>Amount:</strong> {details.Amount}</p>
                                                    <p><strong>Quantity:</strong> {details.Quantity}</p>
                                                    <p><strong>Description:</strong> {details.Description}</p>
                                                    <p><strong>Date:</strong> {formatTimestampToDate(details.Date)}</p>
                                                </div>
                                            </ClickAwayListener>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentView === 'transactionsView' && (
                        <div className="bg-white h-screen p-2  shadow-3xl">
                            {/* Transactions Content */}
                            <div className="flex justify-between">
                                <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Transactions</p>
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                </div>

                            </div>
                            <div className="w-full  mt-2 ">
                                <div className="text-white  grid grid-cols-4 gap-4  bg-gray-600 Transactions">
                                    <div className="p-2">Item Name</div>
                                    <div className="p-2 Transactions-Quantity ">Quantity</div>
                                    <div className="p-2">Amount</div>
                                    <div className="p-2 Transactions-Date">Date</div>
                                </div>
                                
                                {transactions.map((row, index) => (
                                    <div key={index} className={`relative grid grid-cols-4 gap-4 Transactions ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
                                        <div className="p-2">{row.ItemName}
                                         <Tooltip title={`Show Details`}>
                                                <IconButton onClick={() => handleClick(index, row)}>
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                        <div className="p-2  Transactions-Quantity">{row.Quantity}</div>
                                        <div className="p-2">{row.Amount}</div>
                                        <div className="p-2 Transactions-Date">{formatTimestampToDate(row.Date)}</div>

                                        {clickedIndex === index && details && (
                                            <ClickAwayListener onClickAway={handleClickAway}>
                                                <div className="absolute top-0 left-1/4 mt-10 p-4 text-white bg-gray-600  opacity-100 border shadow-lg z-10">
                                                    <p><strong>Item name:</strong> {details.ItemName}</p>
                                                    <p><strong>Quanity:</strong> {details.Quantity}</p>
                                                    <p><strong>Amount:</strong> {details.Amount}</p>
                                                    <p className={`${row.status.toLowerCase() === 'pending' ? 'text-red-500' : 'text-green-500'}`}><strong>Status:</strong> {details.status}</p>
                                                    <p><strong>Date:</strong> {details.Date}</p>
                                                </div>
                                            </ClickAwayListener>
                                        )}
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    )}

                    {currentView === 'UsersView' && (
                        <div className="bg-white h-screen p-2 shadow-3xl">
                            {/* Mobi Phones Users Content */}
                            <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Registered Users</p>
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                </div>
                            <div className="w-full  mt-2">
                                <div className=" text-white  grid grid-cols-4 gap-4  bg-gray-600 mobi-phone-users ">
                                    <div className="p-2">Name</div>
                                    <div className="p-2 Mobi-phone-Email "><p> Email</p></div>
                                    <div className="p-2 Mobi-phone-Phone">Phone</div>
                                    <div className="p-2">Password</div>
                                </div>
                                {mobiPhonesUsers.map((row, index) => (
                                    <div key={index} className={`relative  grid grid-cols-4 gap-4 mobi-phone-users ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
                                        <div className="p-2">{row.fullName}
                                            <Tooltip title={`Show Details`}>
                                                <IconButton onClick={() => handleClick(index, row)}>
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                            </div>
                                        <div className="p-2 Mobi-phone-Email">{row.email}</div>
                                        <div className="p-2 Mobi-phone-Phone">{row.phone}</div>
                                        <div className="p-2"><Button className="bg-red-600 p-1" startIcon={<LockResetOutlinedIcon/>} >Reset</Button></div>

                                        {clickedIndex === index && details && (
                                            <ClickAwayListener onClickAway={handleClickAway}>
                                                <div className="absolute top-0 left-1/4 mt-10 p-4 text-white bg-gray-600  opacity-100 border shadow-lg z-10">
                                                    <p><strong>Full Name:</strong> {details.fullName}</p>
                                                    <p><strong>Phone No.:</strong> {details.Phone}</p>
                                                    <p><strong>Email:</strong> {details.email}</p>
                                                    <p><strong>Privilege:</strong> {details.privilege}</p>
                                                    <p><strong>Registered:</strong> {details.created_at}</p>
                                                </div>
                                            </ClickAwayListener>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentView === 'ReviewsView' && (
                        <div className="bg-white h-screen p-2   shadow-3xl">
                            {/* Phone Reviews Content */}
                            <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Reviews</p>
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                </div>
                            <div className="w-full  mt-2">
                                <div className=" text-white grid grid-cols-5 gap-4  bg-gray-600 Phone-Review">
                                    <div className="p-2">Items Name</div>
                                    <div className="p-2 Phone-Review-Rating">Rates</div>
                                    <div className="p-2">View Reviews</div>
                                    <div className="p-2 Phone-Review-date">Date</div>
                                </div>
                                {phoneReviews.map((row, index) => (
                                    <div key={index} className={`relative grid grid-cols-5 gap-4 Phone-Review ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
                                        <div className="p-2">{row.phoneName}
                                           <Tooltip title={`Show Details`}>
                                                <IconButton onClick={() => handleClick(index, row)}>
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                        <div className="p-2 Phone-Review-Rating">{row.rating}</div>
                                        <div className="p-2"><Button className="bg-red-600 p-1" startIcon={<RemoveRedEyeIcon/>} >View</Button> </div>
                                        <div className="p-2 Phone-Review-date"> {row.date} </div>
                                        {clickedIndex === index && details && (
                                            <ClickAwayListener onClickAway={handleClickAway}>
                                                <div className="absolute top-0 left-1/4 mt-10 p-4 text-white bg-gray-600  opacity-100 border shadow-lg z-10">
                                                    <p><strong>Item Name:</strong> {details.itemName}</p>
                                                    <p><strong>Rating:</strong> {details.rating}</p>
                                                    <p><strong>Dates:</strong> {details.date}</p>
                                                </div>
                                            </ClickAwayListener>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentView === 'promotionsView' && (
                        <div className="bg-white h-screen p-2  shadow-3xl">
                            {/* Promotions Content */}
                            <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Promotion Gifts</p>
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                </div>
                            <div className="w-full  mt-2">
                                <div className=" text-white grid grid-cols-3 gap-4  bg-gray-600">
                                    <div className="p-2">Voucher No.</div>
                                    <div className="p-2">Status</div>
                                    <div className="p-2">Date</div>
                                </div>
                                {promotionGifs.map((row, index) => (
                                    <div key={index} className={`grid grid-cols-3 gap-4 ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
                                        <div className="p-2">{row.voucherNo}</div>
                                        <div className={`${row.status.toLowerCase() === 'expired' ? 'text-red-500' : 'text-green-500'}`}>{row.status}</div>
                                        <div className="p-2">{row.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                          {currentView === 'settingsView' && (
                        <div className="bg-white h-screen p-2   shadow-3xl">
                            {/* Sell Phone Content */}
                            <div className="flex  justify-between bg-green-900 w-full">
                                    <p className="text-white font-bold p-3">Update Details</p>
                                    <Box className="cursor-pointer" onClick={() => setOpen(true)} sx={{ alignItems: 'start', gap: 0.5, ml: 'auto', mt: 1, mr: 2, }}   >
                                    <Apps   className="AppsIcon" />
                                    </Box>
                                </div>
                            <form className="mt-4">
                                <div className="flex justify-between">
                                    <div className="flex-1">

                                        <TextField id="update-details-fullName" label="Full Name" variant="standard" fullWidth />

                                    </div>

                                    <div className="flex-1 ml-2">
                                        <TextField id="update-details-telphone" label="Phone Number" variant="standard" fullWidth />
                                    </div>
                                </div>

                                <div className="flex justify-between mt-2">

                                    <div className="flex-1">
                                        <TextField id="update-details-password" label="Password" variant="standard" fullWidth />
                                    </div>

                                    <div className="flex-1 ml-2">
                                        <TextField id="update-details-confirmPassword" label="Confirm Password" variant="standard" fullWidth />
                                    </div>

                                </div>

        

                                <div className="flex-1 mt-3">
                                    <TextField id="update-details-location" label="Loaction" variant="standard" fullWidth  />
                                </div>


                                <div className="flex justify-start mt-4">
                                    <Button variant="contained" endIcon={<SendIcon />}>SUBMIT</Button>
                                </div>

                            </form>

                        </div>



                    )}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
