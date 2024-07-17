import { useCart } from './CartContext';
import PropTypes from 'prop-types';
import { Link } from 'wouter';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeItem, calculateTotalPrice } = useCart();


  if (!isOpen) return null;

  return (
    <div className="fixed top-24 right-16 border-2 border-pink rounded-3xl bg-white shadow-lg px-6 py-4 z-50">
      <button onClick={onClose} className="text-right font-chillax text-xl font-semibold absolute top-3 right-5 text-darkgray">X</button>
      <h2 className="text-[30px] font-chillax font-semibold mt-3 text-black mb-2 text-left">Cart</h2>
      <div className="w-full h-0.5 bg-pink mb-4"></div>
      {cart.length === 0 ? (
        <>
        <div className="text-[26px] font-chillax font-medium mt-5 text-black mb-5 text-center">Your cart is empty now :(</div>
        <Link href="/products" className="w-[185px] h-[74px] flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-transparent  text-pink text-[20px] font-medium font-chillax capitalize hover:bg-pink hover:text-white hover:border-white active:bg-pink mt-4 mb-4 mx-auto">Go To Shop</Link>
        </>
      ) : (
        cart.map(item => (
            <>
          <div key={item.id} className="flex flex-row gap-4 mb-4 items-center">
            <img src={item.image} alt={item.title} className="w-[90px] h-[90px] rounded-2xl border border-darkgray"/>
            <div className="flex flex-row gap-12 items-center">
              <div className="flex flex-col gap-1">
              <div className="font-semibold text-[22px] font-chillax text-left text-black">{item.title}</div>
              <div className="flex flex-row gap-10 items-center">
              <div className="font-medium text-[20px] font-chillax text-left text-darkgray">${item.totalPrice}</div>
              <div className="font-medium text-[18px] font-chillax text-left text-black">Qty: {item.quantity}</div>
            </div>
            </div>
            <button onClick={() => removeItem(item.id)}>
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 7.50024H20V6.25024C20 5.25568 19.6049 4.30186 18.9017 3.59859C18.1984 2.89533 17.2446 2.50024 16.25 2.50024H13.75C12.7554 2.50024 11.8016 2.89533 11.0983 3.59859C10.3951 4.30186 10 5.25568 10 6.25024V7.50024H5C4.66848 7.50024 4.35054 7.63194 4.11612 7.86636C3.8817 8.10078 3.75 8.41872 3.75 8.75024C3.75 9.08176 3.8817 9.39971 4.11612 9.63413C4.35054 9.86855 4.66848 10.0002 5 10.0002H6.25V23.7502C6.25 24.7448 6.64509 25.6986 7.34835 26.4019C8.05161 27.1052 9.00544 27.5002 10 27.5002H20C20.9946 27.5002 21.9484 27.1052 22.6517 26.4019C23.3549 25.6986 23.75 24.7448 23.75 23.7502V10.0002H25C25.3315 10.0002 25.6495 9.86855 25.8839 9.63413C26.1183 9.39971 26.25 9.08176 26.25 8.75024C26.25 8.41872 26.1183 8.10078 25.8839 7.86636C25.6495 7.63194 25.3315 7.50024 25 7.50024ZM12.5 6.25024C12.5 5.91872 12.6317 5.60078 12.8661 5.36636C13.1005 5.13194 13.4185 5.00024 13.75 5.00024H16.25C16.5815 5.00024 16.8995 5.13194 17.1339 5.36636C17.3683 5.60078 17.5 5.91872 17.5 6.25024V7.50024H12.5V6.25024ZM21.25 23.7502C21.25 24.0818 21.1183 24.3997 20.8839 24.6341C20.6495 24.8685 20.3315 25.0002 20 25.0002H10C9.66848 25.0002 9.35054 24.8685 9.11612 24.6341C8.8817 24.3997 8.75 24.0818 8.75 23.7502V10.0002H21.25V23.7502Z" fill="#9E9DA5"/>
            </svg>
            </button>
            </div>
          </div>

        <div className="w-full h-0.5 bg-pink border border-dashed mb-3 mt-5"></div>
        <div className="flex gap-72 items-center">
    <div className="text-black text-2xl font-semibold font-chillax">Total</div>
    <div className="text-black text-[20px] font-medium font-chillax">{calculateTotalPrice()}$</div>

        </div>
        <Link href="/checkout" className="w-[185px] h-[74px] flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-transparent  text-pink text-[20px] font-medium font-chillax capitalize hover:bg-pink hover:text-white hover:border-white active:bg-pink mt-3 mb-3 mx-auto">Checkout</Link>
    </>
))
)}
 </div>
  );
};

CartModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };

export default CartModal;
