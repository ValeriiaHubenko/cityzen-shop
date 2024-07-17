import { useState } from "react";
import { useCart } from "../components/CartContext";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import CartModal from "../components/CartModal";
import { Link } from 'wouter';


const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  
  const handleAddToCart = () => {
    const newItem = {
      id: "lighting1",
      image: "/images/Rectangle 10.png",
      title: "Smart Ceiling Light",
      price: 310,
      quantity,
      totalPrice: 310 * quantity,
    };
    addToCart(newItem);
    setIsModalOpen(true); // Open the modal after adding to cart
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
      <>
    <Header />

    <div className="absolute top-[70px] -left-16">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
     </div>

    <div className="flex flex-row gap-24 justify-center items-start mt-[50px] ml-16">
        <div className="flex flex-col gap-3 items-end justify-end">
            <img
                className="w-[550px] h-[550px] rounded-[45px]"
                src="/images/Rectangle 10.png"
                alt="Lighting Image"
            />
        <button onClick={toggleFullscreen}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66602 13.3337V10.0003C6.66602 9.11627 7.0172 8.26842 7.64233 7.6433C8.26745 7.01818 9.11529 6.66699 9.99935 6.66699H13.3327M6.66602 26.667V30.0003C6.66602 30.8844 7.0172 31.7322 7.64233 32.3573C8.26745 32.9825 9.11529 33.3337 9.99935 33.3337H13.3327M26.666 6.66699H29.9993C30.8834 6.66699 31.7312 7.01818 32.3564 7.6433C32.9815 8.26842 33.3327 9.11627 33.3327 10.0003V13.3337M26.666 33.3337H29.9993C30.8834 33.3337 31.7312 32.9825 32.3564 32.3573C32.9815 31.7322 33.3327 30.8844 33.3327 30.0003V26.667" stroke="#F16E7C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>  
        </button>  
        </div>
        
    <div className="flex flex-col items-start justify-start">
    <h1 className="text-pink text-[38px] font-semibold capitalize font-chillax text-left pt-7 mb-2">Smart Ceiling Light</h1>    
    <div className="text-black text-2xl font-medium font-lato w-[465px] leading-snug">This smart LED lamp provides customizable lighting options with voice control and app integration. Perfect for creating the ideal ambiance in any room.</div>
    <div className="text-black text-2xl font-medium font-lato mt-4 mb-1"><span className="font-semibold">Dimensions: </span>10x10x20 inches</div>
    <div className="text-black text-2xl font-medium font-lato my-1"><span className="font-semibold">Material: </span>Metal and Glass</div>
    <div className="text-black text-2xl font-medium font-lato my-1"><span className="font-semibold">Features: </span>Voice Control, App Integration</div>

    <div className="flex flex-row gap-10 items-center mt-5">
        <div className="text-darkgray text-[26px] font-medium font-chillax text-left">310$</div>
            
            <div className="w-32 h-10">
                <div className="w-32 h-10 bg-pink/20 rounded-full border-2 border-pink" />
                
                <div className="flex flex-row gap-8 justify-center items-center -mt-9">
                <button
                className="w-11 h-8 bg-white rounded-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                onClick={handleDecrement}
                disabled={quantity === 1}
              >
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="1" x2="16" y2="1" stroke="#F16E7C" strokeWidth="2" />
                </svg>
              </button>                 

                    <button
                        className="w-11 h-8 bg-white rounded-full flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                        onClick={handleIncrement}
                        disabled={quantity === 5}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="8.14258" y1="4.76342e-08" x2="8.14258" y2="16" stroke="#F16E7C" strokeWidth="2" />
                        <line y1="7.375" x2="16" y2="7.375" stroke="#F16E7C" strokeWidth="2" />
                        </svg>
                    </button>
                </div>

                <div className="text-black text-2xl font-medium font-chillax leading-8 text-center -mt-8">{quantity}</div>
            </div>
        </div>

        <button 
        onClick={handleAddToCart}
        className="w-[220px] h-20 flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-transparent  text-pink text-2xl font-medium font-chillax capitalize hover:bg-pink hover:text-white active:bg-pink active:text-white hover:border-white active:border-white mt-8"
        >
          Add to cart
          </button>

        <div className="absolute top-[545px] -right-16">
        <div className="w-40 h-40 bg-pink/35 rounded-full blur-3xl" />
        </div>

        <div className="text-black text-[30px] font-semibold font-chillax mt-16">Smart Functionality:</div>

    <div className="-ml-11">
       <div className="flex flex-row gap-6 items-center mt-4">
        <div className="w-6 h-6 bg-pink/25 rounded-full blur-sm" />
        <div className="text-black text-2xl font-medium font-lato leading-normal"><span className="font-semibold">Voice Control:</span> Integration with smart assistants <br/> (e.g., Alexa, Google Assistant) for hands-free operation.</div>
        </div>

        <div className="flex flex-row gap-6 items-center mt-5">
        <div className="w-6 h-6 bg-pink/25 rounded-full blur-sm" />
        <div className="text-black text-2xl font-medium font-lato lg:w-[540px] leading-normal"><span className="font-semibold">Color Changing:</span> Adjustable color temperature and brightness via smartphone app.</div>
        </div>

        <div className="flex flex-row gap-6 items-center mt-5">
        <div className="w-6 h-6 bg-pink/25 rounded-full blur-sm" />
        <div className="text-black text-2xl font-medium font-lato lg:w-[585px] leading-normal"><span className="font-semibold">Motion Sensing:</span> Lights automatically turn on or adjust when someone enters the room.</div>
        </div>

        <div className="flex flex-row gap-6 items-center mt-5">
        <div className="w-6 h-6 bg-pink/25 rounded-full blur-sm"/>
        <div className="text-black text-2xl font-medium font-lato lg:w-[530px] leading-normal"><span className="font-semibold">Ambient Mode:</span> Sync with music or change colors based on the time of day for ambiance.</div>
        </div>
    </div>
    </div>
    </div>

<div className="absolute top-[880px] -left-16">
<div className="w-48 h-48 bg-pink/35 rounded-full blur-3xl" />
</div>

<div className="w-full h-[700px] bg-black rounded-[45px] mt-24 card pb-10">
<div className="text-pink text-[36px] font-semibold capitalize font-chillax text-left pt-14 mb-8 ml-20">Explore another Lighting</div>
<div className="flex flex-row gap-[80px] pl-20 mt-10 justify-start">


<Link id="lighting4" to="/productinfo/lighting4" className="flex flex-col gap-5 justify-start">
<img className="w-96 h-96 rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="/images/lighting.jpg" />
    <div className="text-white text-3xl font-semibold font-chillax mt-1 hover:text-pink active:text-pink">Smart Ceiling Lamp</div>
    <div className="text-darkgray text-lg font-medium font-chillax -mt-4">360$</div>
<div className="flex justify-end -mt-20 items-center">
        <button className="relative hover:bg-white hover:rounded-full">
          <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
          <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C" />
          </svg>
        </button>
</div>
</Link>

<Link id="lighting3" to="/productinfo/lighting3" className="flex flex-col gap-5 justify-start">
<img className="w-96 h-96 rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="/images/openart-image_eppcqf3B_1719315129653_raw.jpg" />
    <div className="text-white text-3xl font-semibold font-chillax mt-1 hover:text-pink active:text-pink">Smart Ceiling Light </div>
    <div className="text-darkgray text-lg font-medium font-chillax -mt-4">390$</div>
<div className="flex justify-end -mt-20 items-center">
         <button className="relative hover:bg-white hover:rounded-full">
          <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
          <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C" />
          </svg>
        </button>
</div>
</Link>
</div>
</div>

    <Subscribe />
    <Footer />

    {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <img
            className="w-[90%] h-[90%] object-contain"
            src="/images/Rectangle 10.png"
            alt="Lighting Image"
          />
          <button onClick={toggleFullscreen} className="absolute top-4 right-4 text-white">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10L30 30M30 10L10 30" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
      
      <CartModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
export default ProductInfo;
  