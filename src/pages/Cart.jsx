import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeItem, calculateTotalPrice } = useCart();

    return (
        <>
        <Header />
        
        <div className="absolute top-[65px] -left-20">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
     </div>

     <div className="text-black text-[38px] font-semibold capitalize font-chillax text-left pt-8 mb-4 ml-20"> Your <span className="text-pink">Cart</span></div>
     
     {cart.length === 0 ? (
                 <>
                 <div className="min-h-72">
                <div className="text-black text-3xl font-semibold capitalize font-chillax text-center mt-10">
                    Your Cart is empty now :(
                </div>
                 <Link href="/products#productsrange" className="w-[260px] h-24 flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-transparent  text-pink text-2xl font-medium font-chillax capitalize hover:bg-pink hover:text-white hover:border-white active:bg-pink mt-12 mx-auto">Back to shop</Link>
                 </div>
                 </>
            ) : (
                <>

<div className="flex flex-row lg:gap-72 items-center">
{cart.map((item) => (
    <>
    <div key={item.id} className="flex flex-row gap-9 pl-20">
    <Link href="/productinfo/:lighting1">    
    <img className="w-32 h-32 rounded-2xl border-2 border-darkgray hover:border-pink hover:border-2"  src={item.image}
    alt="Lighting Image" />
    </Link>
    <div className="flex flex-col gap-4 justify-center">
    <Link href="/productinfo/:lighting1" className="text-black text-[28px] font-semibold font-chillax  hover:text-pink active:text-pink">{item.title}</Link >
    
    <div className="w-32 h-10">
                <div className="w-32 h-10 bg-pink/20 rounded-full border-2 border-pink" />
                
                <div className="flex flex-row gap-8 justify-center items-center -mt-9">
                <button
                className="w-11 h-8 bg-white rounded-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                onClick={() => decrementQuantity(item.id)}
                disabled={item.quantity === 1}
              >
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="1" x2="16" y2="1" stroke="#F16E7C" strokeWidth="2" />
                </svg>
              </button>                 

                    <button
                        className="w-11 h-8 bg-white rounded-full flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                        onClick={() => incrementQuantity(item.id)}
                        disabled={item.quantity === 5}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="8.14258" y1="4.76342e-08" x2="8.14258" y2="16" stroke="#F16E7C" strokeWidth="2" />
                        <line y1="7.375" x2="16" y2="7.375" stroke="#F16E7C" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
                <div className="text-black text-2xl font-medium font-chillax leading-9 text-center -mt-8">{item.quantity}</div>
            </div>
        </div>
    </div>

<div className="flex flex-col gap-6 mt-2 justify-center">
<div className="text-black/80 text-2xl font-medium font-chillax">{item.totalPrice}$</div>
<button onClick={() => removeItem(item.id)}>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 7.50024H20V6.25024C20 5.25568 19.6049 4.30186 18.9017 3.59859C18.1984 2.89533 17.2446 2.50024 16.25 2.50024H13.75C12.7554 2.50024 11.8016 2.89533 11.0983 3.59859C10.3951 4.30186 10 5.25568 10 6.25024V7.50024H5C4.66848 7.50024 4.35054 7.63194 4.11612 7.86636C3.8817 8.10078 3.75 8.41872 3.75 8.75024C3.75 9.08176 3.8817 9.39971 4.11612 9.63413C4.35054 9.86855 4.66848 10.0002 5 10.0002H6.25V23.7502C6.25 24.7448 6.64509 25.6986 7.34835 26.4019C8.05161 27.1052 9.00544 27.5002 10 27.5002H20C20.9946 27.5002 21.9484 27.1052 22.6517 26.4019C23.3549 25.6986 23.75 24.7448 23.75 23.7502V10.0002H25C25.3315 10.0002 25.6495 9.86855 25.8839 9.63413C26.1183 9.39971 26.25 9.08176 26.25 8.75024C26.25 8.41872 26.1183 8.10078 25.8839 7.86636C25.6495 7.63194 25.3315 7.50024 25 7.50024ZM12.5 6.25024C12.5 5.91872 12.6317 5.60078 12.8661 5.36636C13.1005 5.13194 13.4185 5.00024 13.75 5.00024H16.25C16.5815 5.00024 16.8995 5.13194 17.1339 5.36636C17.3683 5.60078 17.5 5.91872 17.5 6.25024V7.50024H12.5V6.25024ZM21.25 23.7502C21.25 24.0818 21.1183 24.3997 20.8839 24.6341C20.6495 24.8685 20.3315 25.0002 20 25.0002H10C9.66848 25.0002 9.35054 24.8685 9.11612 24.6341C8.8817 24.3997 8.75 24.0818 8.75 23.7502V10.0002H21.25V23.7502Z" fill="#9E9DA5"/>
</svg>
</button>
</div>
</>
))}
</div>

<div className="w-[420px] h-[340px] bg-pink/20 border-2 border-pink rounded-[30px] absolute top-36 right-20">
<div className="flex flex-col gap-4 justify-between items-start px-7">
    <div className="flex flex-row mt-7 gap-28">
    <div className="text-black text-xl font-semibold font-chillax">Smart Ceiling Light</div>
    <div className="text-black text-xl font-medium font-chillax">{calculateTotalPrice()}$</div>
    </div>

    <div className="flex flex-row gap-52">
        <div className="flex flex-row gap-3 items-center">
            <div className="text-black text-xl font-medium font-chillax">Shipping</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17.972C3.903 17.918 3.22 17.755 2.732 17.268C2.244 16.781 2.082 16.097 2.028 15M9 18H15M19 17.972C20.097 17.918 20.78 17.755 21.268 17.268C22 16.535 22 15.357 22 13V11H17.3C16.555 11 16.183 11 15.882 10.902C15.5818 10.8045 15.309 10.6373 15.0859 10.4141C14.8627 10.191 14.6955 9.91815 14.598 9.618C14.5 9.317 14.5 8.945 14.5 8.2C14.5 7.083 14.5 6.525 14.353 6.073C14.2067 5.62277 13.9559 5.21356 13.6212 4.87882C13.2864 4.54408 12.8772 4.2933 12.427 4.147C11.975 4 11.417 4 10.3 4H2M2 8H8M2 11H6" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 6H16.321C17.777 6 18.504 6 19.096 6.354C19.689 6.707 20.034 7.348 20.724 8.63L22 11" stroke="#040204" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="text-black text-xl font-medium font-chillax text-right">0$</div>
    </div>
</div>

<div className="w-[416px] border-2 border-dashed bg-pink mt-6"></div>

<div className="flex flex-row gap-56 px-7 items-center mt-4">
    <div className="text-black text-[28px] font-semibold font-chillax">Total</div>
    <div className="text-black text-2xl font-medium font-chillax">{calculateTotalPrice()}$</div>
</div>

<Link to="/checkout" className="w-[220px] h-20 flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-white  text-pink text-2xl font-medium font-chillax capitalize hover:bg-pink hover:text-white active:bg-pink active:text-white hover:border-white active:border-white mt-5 mx-auto">Checkout</Link>
</div>


<div className="w-full h-[680px] bg-white rounded-[45px] mt-48 card pt-6">
<div className="text-black text-[32px] font-semibold capitalize font-chillax text-left pt-14 ml-20">You might also like</div>
<div className="flex flex-row gap-[80px] pl-16 mt-9 justify-start">
<Link id="lighting4" to="/productinfo/lighting4" className="flex flex-col gap-4 justify-start product-card px-3 pt-2 pb-4 rounded-3xl">
<img className="w-[314px] h-[314px] rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="/images/lighting.jpg" />
    <div className="text-black text-xl font-semibold font-chillax hover:text-pink active:text-pink">Smart Ceiling Lamp</div>
    <div className="text-darkgray text-base font-medium font-chillax -mt-3">360$</div>
<div className="flex justify-end -mt-[68px] items-center">
        <button className="relative hover:bg-white hover:rounded-full">
          <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
          <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C" />
          </svg>
        </button>
</div>
</Link>

<Link id="lighting3" to="/productinfo/lighting3" className="flex flex-col gap-4 justify-start product-card px-3 pt-2 pb-4 rounded-3xl">
<img className="w-[314px] h-[314px] rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="/images/openart-image_eppcqf3B_1719315129653_raw.jpg" />
    <div className="text-black text-xl font-semibold font-chillax hover:text-pink active:text-pink">Smart Ceiling Light </div>
    <div className="text-darkgray text-base font-medium font-chillax -mt-3">390$</div>
<div className="flex justify-end -mt-[68px] items-center">
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

<div className="absolute top-[780px] -right-24">
        <div className="w-48 h-48 bg-pink/45 rounded-full blur-3xl" />
     </div>

     </>
            )}

            <Footer />
        </>
    );
};

export default Cart;