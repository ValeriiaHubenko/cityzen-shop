import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SuccessfulPayment = () => (
    <>
    <Header />
    <div className="absolute top-[70px] -left-16">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
     </div>

<div className="w-full h-[485px] flex justify-center">
     <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-row gap-3 items-center ml-8">
            <div className="text-black text-[36px] font-medium font-lato">Your payment is successful</div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.3332 10L14.9998 28.3333L6.6665 20" stroke="#F16E7C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="text-black text-6xl font-semibold font-chillax">Thank <span className="text-pink">You</span> for your Order!</div>
        
        <Link href="/products" className="w-[260px] h-24 flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-transparent  text-pink text-2xl font-medium font-chillax capitalize hover:bg-pink hover:text-white hover:border-white active:bg-pink mt-8 mx-auto">Back to shop</Link>
     </div>
     </div>

     <div className="absolute top-[540px] -right-10">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
     </div>
    <Footer />
    </>

);

export default SuccessfulPayment;