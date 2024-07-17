import { Link } from "wouter";
import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
        const [email, setEmail] = useState('');
        const [emailError, setEmailError] = useState('');

        const validateEmail = (event) => {
            setEmail(event.target.value);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(event.target.value)) {
              setEmailError('Please enter a valid email address');
            } else {
              setEmailError('');
            }
          };
        
  return (
    <>
    <Header />

    <div className="absolute top-[70px] -left-16">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
     </div>

    <div className="text-black text-[38px] font-semibold capitalize font-chillax text-left pt-5 ml-20">City<span className="text-pink">Zen</span></div>
    <div className="w-full h-px border border-lightgray mt-4"></div>

    <div className="flex flex-row">
        <div className="flex flex-col gap-5 justify-center items-center mx-auto mt-8 px-10">
    <div className="text-black text-[32px] font-medium text-center font-chillax">Express checkout</div>
    
    <div className="flex flex-row gap-12 items-center">
    <button className="w-[185px] h-[70px] bg-yellow rounded-3xl">
    <img className="mx-auto h-[70px]" src="public/images/paypal logo.jpg" />
    </button>
    <button className="w-[185px] h-[70px] bg-black rounded-3xl">
    <img className="mx-auto w-20" src="public/images/apple-pay logo.jpg" />
    </button>
    <button className="w-[185px] h-[70px] bg-black rounded-3xl">
    <img className="mx-auto w-20" src="public/images/google-pay logo.jpg" />
    </button>
    </div>

    <div className="mt-9">
    <img className="mx-auto" src="public/images/Line 20.jpg" />
    <div className="text-lightgray text-2xl font-medium font-chillax -mt-4 text-center">OR</div>
    </div>

    <div className="flex flex-col justify-start gap-2">
            <label className="block text-black text-2xl font-medium font-chillax mb-1 mt-3" htmlFor="email">Contact</label>
            <input
              id="email"
              type="email"
              className="w-[720px] h-16 rounded-xl border-2 border-lightgray px-4 text-base font-normal font-lato placeholder-neutral-900/60 bg-transparent focus:bg-white focus:outline-none focus:border-pink
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-darkgray invalid:text-black
              focus:invalid:border-darkgray focus:invalid:ring-darkgray"
              placeholder="cityzen@gmail.com"
              value={email}
              onChange={validateEmail}
            />
             {emailError && <div className="error-message text-black text-sm mt-1">{emailError}</div>}
        

        <div className="flex justify-start items-center gap-3 ml-1">
            <div className="w-6 h-6 rounded-md border-2 border-lightgray" />
            <div className="text-black text-lg font-medium font-lato">Email me with news and offers</div>
        </div>
        </div>

        <div className="w-[720px] h-52 relative">
    <div className="w-[720px] h-20 left-0 top-[127px] absolute">
        <div className="w-[720px] h-20 left-0 top-0 absolute rounded-bl-xl rounded-br-xl border-2 border-lightgray" />
        <div className="left-[60px] top-[26px] absolute text-black text-xl font-medium font-lLato">Pickup in Store</div>
        <div className="w-6 h-6 left-[20px] top-[28px] absolute rounded-full border-2 border-black" />
        <div className="w-7 h-7 left-[672px] top-[22px] absolute">
            <div className="w-5 h-5 left-[3.50px] top-[3.50px] absolute">
            </div>
            <svg  className="mt-1" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 24.5H5.83333M5.83333 24.5H22.1667M5.83333 24.5V10.8827M24.5 24.5H22.1667M22.1667 24.5V10.8827M5.83333 10.8827C5.78971 10.8576 5.74691 10.8312 5.705 10.8033L5.075 10.3833C4.62963 10.0863 4.29996 9.64509 4.14128 9.13379C3.98261 8.6225 4.00457 8.07219 4.2035 7.57517L5.2465 4.9665C5.41974 4.53356 5.71872 4.16245 6.10489 3.90106C6.49105 3.63966 6.94668 3.49997 7.413 3.5H20.587C21.0533 3.49997 21.5089 3.63966 21.8951 3.90106C22.2813 4.16245 22.5803 4.53356 22.7535 4.9665L23.7965 7.57517C23.9954 8.07219 24.0174 8.6225 23.8587 9.13379C23.7 9.64509 23.3704 10.0863 22.925 10.3833L22.295 10.8033C22.2531 10.8312 22.2103 10.8576 22.1667 10.8827M5.83333 10.8827C6.21022 11.1003 6.64048 11.2083 7.07549 11.1943C7.51049 11.1802 7.93291 11.0448 8.295 10.8033L10.5 9.33333L12.705 10.8033C13.0884 11.0592 13.5391 11.1957 14 11.1957C14.4609 11.1957 14.9116 11.0592 15.295 10.8033L17.5 9.33333L19.705 10.8033C20.0671 11.0448 20.4895 11.1802 20.9245 11.1943C21.3595 11.2083 21.7898 11.1003 22.1667 10.8827" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.3327 24.4997V18.6663C16.3327 18.0475 16.0868 17.454 15.6493 17.0164C15.2117 16.5788 14.6182 16.333 13.9993 16.333C13.3805 16.333 12.787 16.5788 12.3494 17.0164C11.9118 17.454 11.666 18.0475 11.666 18.6663V24.4997" stroke="#040204" strokeWidth="1.5"/>
            </svg>
        </div>
    </div>
    <div className="w-[720px] h-20 left-0 top-[49px] absolute">
        <div className="w-[720px] h-20 left-0 top-0 absolute bg-pink/30 rounded-tl-xl rounded-tr-xl border-2 border-black" />
        <div className="left-[60px] top-[26px] absolute text-black text-xl font-semibold font-lato">Ship</div>
        <div className="w-7 h-7 left-[672px] top-[21px] absolute">
            <div className="w-6 h-5 left-[2.33px] top-[4.67px] absolute">
            </div>
        </div>
        <div className="w-6 h-6 left-[20px] top-[28px] absolute">
            <div className="w-6 h-6 left-0 top-0 absolute bg-black rounded-full" />
            <div className="w-2.5 h-2.5 left-[7px] top-[7px] absolute bg-white rounded-full" />
        </div>

        <svg className="absolute top-[28px] right-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17.972C3.903 17.918 3.22 17.755 2.732 17.268C2.244 16.781 2.082 16.097 2.028 15M9 18H15M19 17.972C20.097 17.918 20.78 17.755 21.268 17.268C22 16.535 22 15.357 22 13V11H17.3C16.555 11 16.183 11 15.882 10.902C15.5818 10.8045 15.309 10.6373 15.0859 10.4141C14.8627 10.191 14.6955 9.91815 14.598 9.618C14.5 9.317 14.5 8.945 14.5 8.2C14.5 7.083 14.5 6.525 14.353 6.073C14.2067 5.62277 13.9559 5.21356 13.6212 4.87882C13.2864 4.54408 12.8772 4.2933 12.427 4.147C11.975 4 11.417 4 10.3 4H2M2 8H8M2 11H6" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 6H16.321C17.777 6 18.504 6 19.096 6.354C19.689 6.707 20.034 7.348 20.724 8.63L22 11" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    </div>
    <div className="text-black text-2xl font-medium font-chillax mt-1">Delivery</div>
    </div>

    <Link to="/successfulpayment" className="w-[720px] h-20 bg-black rounded-xl justify-center items-center gap-2.5 inline-flex hover:bg-pink active:bg-pink mt-3">
    <div className="text-white text-[22px] font-semibold font-chillax">Pay Now</div>
    </Link>

</div> 


<div className="flex flex-col gap-4 w-[580px] bg-pink/35 border-l-2 border-lightgray">
<div className="flex flex-col gap-4 items-center pr-4">

<div className="flex flex-row gap-5 mt-10">
    <img className="w-[100px] h-[100px] rounded-2xl border-1 border-darkgray hover:border-pink hover:border-2"  src="public/images/Rectangle 10.png"
    alt="Lighting Image" />
    <div className="flex flex-col gap-2 justify-center">
        <div className="flex flex-row gap-14 items-center">
    <div className="text-black text-2xl font-semibold font-chillax mt-1 hover:text-pink active:text-pink">Smart Celling Light</div>
    <div className="text-black text-xl font-medium font-chillax mt-1">300$</div>
    </div>
    <div className="text-black text-lg font-medium font-chillax">Qty:1</div>
        </div>
    </div>


    <div className="flex flex-row mt-2 gap-80">
    <div className="text-black text-xl font-medium font-chillax">Subtotal</div>
    <div className="text-black text-xl font-medium font-chillax">300$</div>
    </div>

    <div className="flex flex-row gap-72">
        <div className="flex flex-row gap-3 items-center">
            <div className="text-black text-xl font-medium font-chillax">Shipping</div>
            <svg className="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17.972C3.903 17.918 3.22 17.755 2.732 17.268C2.244 16.781 2.082 16.097 2.028 15M9 18H15M19 17.972C20.097 17.918 20.78 17.755 21.268 17.268C22 16.535 22 15.357 22 13V11H17.3C16.555 11 16.183 11 15.882 10.902C15.5818 10.8045 15.309 10.6373 15.0859 10.4141C14.8627 10.191 14.6955 9.91815 14.598 9.618C14.5 9.317 14.5 8.945 14.5 8.2C14.5 7.083 14.5 6.525 14.353 6.073C14.2067 5.62277 13.9559 5.21356 13.6212 4.87882C13.2864 4.54408 12.8772 4.2933 12.427 4.147C11.975 4 11.417 4 10.3 4H2M2 8H8M2 11H6" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 6H16.321C17.777 6 18.504 6 19.096 6.354C19.689 6.707 20.034 7.348 20.724 8.63L22 11" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="text-black text-xl font-medium font-chillax text-right">0$</div>
    </div>

<div className="lg:w-full h-0.5 bg-lightgray mt-4"></div>

<div className="flex flex-row gap-80 items-center mt-2">
    <div className="text-black text-[28px] font-semibold font-chillax">Total</div>
    <div className="text-black text-2xl font-medium font-chillax">300$</div>
</div>

</div>


        </div> 

        </div>
    
 

    <Footer />
    </>
  );
};
export default Home;