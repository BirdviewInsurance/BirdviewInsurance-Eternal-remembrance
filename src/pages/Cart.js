import React, { useState,useEffect } from "react";
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Header from "../components/Header";
import './Cart.css'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
 



// CircularProgressWithLabel component
function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
          <Typography
            variant="caption"
            component="div"
             
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

const Cart = () => {
    const [completepaymentwindow, setCompletepaymentwindow] = useState(false);
    const [alertmsg, setAlertmsg]  = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [cartItems, setCartItems] = useState([ ]);
    const [progress, setProgress] = useState(50);


    useEffect( () =>{
        fetch('/cart.json')
        .then(response =>{

            if(!response.ok){
                throw new Error('Network reponse war not ok')
            }
            return response.json();
        })
        .then(data => {
            console.log('fetch Cart:',data);
            setCartItems(data)
        })
        .catch(error => console.error('Error fetching phones data:', error));
    }, []);
    

    const [paymentMethod, setPaymentMethod] = useState('');

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);
    };

    const cancelAlertMsg = () =>{
        setAlertmsg(false);
        setErrorMsg('');
    }
    const cancelCompletepaymentwindow =()=>{
        setCompletepaymentwindow(false)

    }

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = () => {
        setProgress(60);

        if (paymentMethod === '') {
            setAlertmsg(true);
            setErrorMsg('Please select a payment method');
        } else {
            setCompletepaymentwindow(true); 
        }  
            


    };

    const handleIncreaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id) {
                    if (item.quantity < 10) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        setAlertmsg(true);
                        setErrorMsg('Max items is 10');
                    }
                }
                return item;
            })
        );
    };
 
     
    

    const handleDecreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };
    const handleDeleteProduct = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };
    
    return (
        <div>
            <Header />
            <div className="flex-grow  ">
            <div className="flex justify-between shopping-cart-name p-3">
                    <div></div> {/* This empty div will push the button to the end */}
                    <Button
                        variant="contained"
                        className="flex justify-end p-3 bg-gray-400 text-white underline cursor-pointer"
                        href="/dashboard"
                    >
                        Transactions <ReceiptIcon className="ml-3 w-5 h-5" />
                    </Button>
                    </div>

                <div className="grid grid-cols-4 gap-4   bg-white font-semibold border-b-2 p-2 mb-4">
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div></div>
                    
                </div>
                <div className=" bg-white">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex grid bg-white grid-cols-4 gap-4 border-b p-2">
                          
                            <div>  <img className=' cart-phones-image w-12 h-8  ' alt="Phone"src="../../../images/casket5.png" /><p className="product-name">{item.name}</p></div>
                            <div className="flex">
                            <MinusIcon
                                    onClick={() => handleDecreaseQuantity(item.id)}
                                    className="h-5 w-5 text-yellow-500 inline-block cursor-pointer border border-red-900 rounded-full"
                                />
                                <span className="ml-2 mr-2">{item.quantity}</span>
                                <PlusIcon
                                    onClick={() => handleIncreaseQuantity(item.id)}
                                    className="h-5 w-5 text-yellow-500 inline-block cursor-pointer border border-red-900 rounded-full"
                                />
                            </div>
                            <div>${item.price.toFixed(2)}</div>
                            <div>   
                                  < DeleteOutlineIcon onClick={() => handleDeleteProduct(item.id)}  className="w-5 h-5 text-yellow-500" />
                             </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end font-bold text-xl bg-white shadow-lg">
                    <div className="mr-4">Total:</div>
                    <div>${calculateTotal()}</div>
                </div>

                 
                
                <div className={`alert-message shadow-3xl  text-white fixed inset-0 flex items-center justify-center z-50 ${alertmsg ? 'block' : 'hidden'}`}>
                    <div className="w-auto h-auto opacity-100 bg-gray-600 text-white  flex flex-col items-center justify-center shadow-2xl   text-gray-800 p-3 rounded-lg  ">
                        <span className=" text-white mb-2">{errorMsg}</span>

                        <div className='flex justify-center w-full mt-3'>

                        <Button variant="outlined" onClick={cancelAlertMsg}
                        > OK </Button> 
 
                        </div>

                    </div>
                </div>


                  <div className={`complete-payment-window fixed inset-0 flex items-center justify-center z-50 ${completepaymentwindow ? 'block' : 'hidden'}`}>
                            <div className="w-auto h-auto  opacity-100 bg-gray-600   border rounded-lg  text-white shadow-3xl    p-6 rounded-lg flex flex-col items-center ">
                                <h3 className="text-2xl font-semibold mb-4">Payment Processing for {paymentMethod}</h3>
                                
                                <div className="w-full mb-4 text-white">
                                    <p className="  mb-2">Payment Details:</p>
                                    <ul className="">
                                        <li className="mb-3">Amount:<b> ${calculateTotal()}</b></li>

                                    </ul>
                                    <TextField className="mt-3" name="paymentNumber" id="paymentNumber"   label="Payment Number" placeholder="Number +2547.."  variant="outlined" fullWidth  sx={{  '& .MuiOutlinedInput-root': {  '& fieldset': {  borderColor: 'white',  }, '&:hover fieldset': { borderColor: 'white',  },  '&.Mui-focused fieldset': {  borderColor: 'white',  },  }, '& .MuiInputBase-input': { color: 'white',  }, '& .MuiInputLabel-root': { color: 'white', },  }} />

                                </div>  
                                <hr className="m-4 bg-white text-white"/> 

                                <div className="w-full text-white mb-4 flex justify-center">
                                        <CircularProgressWithLabel  value={progress} />
                                </div>

                                <div className="flex justify-between w-full text-white">
                                    <Button variant="outlined"  onClick={cancelCompletepaymentwindow}>Cancel </Button>
                                    <Button variant="outlined" className="text-white"  > Pay  </Button>
                                </div>
                            </div>
                        </div>

 

                <div className="mt-6 flex justify-center items-center shadow-xl p-3 border border-white-900">
                    <div  >
                        <h3 className="text-xl font-semibold mb-4">Select Payment Method  </h3>
                        
                        <div className="mb-4">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Stripe"
                                    checked={paymentMethod === 'Stripe'}
                                    onChange={handlePaymentMethodChange}
                                />
                               <span  > Stripe </span>
                            </label>
                        </div>
                        <button  onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Cart;
