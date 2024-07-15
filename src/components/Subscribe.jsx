import { useState } from 'react';
import SubscribeModal from './SubscribeModal';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showModal, setShowModal] = useState(false);
  
  const validateEmail = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubscribe = () => {
    if (!emailError && email) {
      setShowModal(true);
      setEmail(''); // Clear the email field
    }
  };

  return (
    <>
    <div className="w-full h-[817px] bg-pink rounded-tl-[50px] rounded-tr-[50px] mt-10 -mb-60 card">
    <img
      src="/images/Ellipse 22.png"
      className="absolute inset-x-1/4 -mt-28 opacity-85 z-0"
      alt="Ellipse"
     />

    <div className="text-black relative z-10 text-[38px] text-center font-semibold font-chillax leading-loose pt-16">Stay Updated!</div>
    <div className="text-black relative z-10 text-[38px] text-center font-medium font-chillax">Subscribe to our newsletter</div>

    <div className="relative z-10 flex justify-center">
        <div>
            <label className="block text-black text-lg font-medium font-lato mb-1 mt-7" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-[620px] h-16 rounded-xl border-2 border-black px-4 text-base font-normal font-lato placeholder-neutral-900/80 bg-transparent focus:bg-white focus:outline-none focus:border-darkgray
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-darkgray invalid:text-black
              focus:invalid:border-darkgray focus:invalid:ring-darkgray"
              placeholder="cityzen@gmail.com"
              value={email}
              onChange={validateEmail}
            />
             {emailError && <div className="error-message text-black text-sm mt-1">{emailError}</div>}
        </div>
    </div>

          <div className="relative z-10 flex justify-center mt-11">
          <button
            onClick={handleSubscribe}
            className="w-[220px] h-20 flex justify-center items-center border-4 border-dashed border-white rounded-full text-white text-2xl font-medium font-chillax capitalize hover:bg-white hover:text-pink hover:border-pink hover:border-dashed active:bg-white active:text-pink"
          >
            Subscribe
          </button>
          </div>
    </div>

         {showModal && <SubscribeModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Subscribe;