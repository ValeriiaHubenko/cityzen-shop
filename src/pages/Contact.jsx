import { useState } from 'react';
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import SubmitModal from "../components/SubmitModal";
import Footer from "../components/Footer";

const Contact = () => {
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

const handleSubmit = () => {
    if (!emailError && email) {
        setShowModal(true);
        setEmail(''); // Clear the email field
        document.getElementById('name').value = ''; // Clear the name field
        document.getElementById('message').value = ''; // Clear the message field
    }
};
    
return (
    <>
       <Header />

       <div className="w-full h-[860px] bg-white rounded-[50px] card pt-4">
       <div className="absolute top-0 -left-16">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
        </div>
        <div className="text-[38px] text-center text-black font-semibold font-chillax mb-4 mt-12">Get in <span className="text-pink">Touch</span> with Us</div>
        <div className="flex gap-28 mt-10 justify-center items-center">
        <img className="border-2 border-pink rounded-[40px]" src="/images/ImageContact.jpg" />
        <div className="flex flex-col gap-4 items-start justify-start mt-5">
            <div className="flex flex-col gap-1 items-start justify-start">
            <div className="text-[28px] text-black font-semibold font-chillax">Address:</div>
            <div className="text-2xl text-black font-regular font-chillax">123 Modern St, Urban City, Country</div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start">
            <div className="text-[28px] text-black font-semibold font-chillax">Email:</div>
            <div className="text-2xl text-black font-regular font-chillax">cityzen@gmail.com</div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start">
            <div className="text-[28px] text-black font-semibold font-chillax">Phone:</div>
            <div className="text-2xl text-black font-regular font-chillax">123-456-7890</div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start">
            <div className="text-[28px] text-black font-semibold font-chillax">Working hours:</div>
            <div className="text-2xl text-black font-regular font-chillax leading-relaxed"><span className="font-medium">Monday - Friday:</span> 9 AM - 6 PM <br /> <span className="font-medium">Saturday:</span> 10 AM - 4 PM <br /> <span className="font-medium">Sunday:</span> Closed</div>
            </div>

            <div className="absolute top-[340px] -right-16">
             <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
        </div>
        </div>
        </div>
        </div>

        <div className="w-full h-[900px] bg-black rounded-[50px] card pt-8">
            <div className="w-[730px] h-[660px] bg-pink rounded-[40px] mx-auto mt-10 border-2 border-darkgray">
                <div className="text-[32px] text-black font-semibold font-chillax mt-8 text-center">Send Us a Message</div>

            <div className="flex flex-col items-center mt-1">
                <div className="flex flex-col justify-start gap-1">
                <label className="block text-black text-[22px] font-semibold font-chillax mt-3 text-left" htmlFor="name">Your Name:</label>
                <input
                id="name"
                type="name"
                className="w-[600px] h-16 rounded-xl border-2 whitespace-pre-wrap border-darkgray bg-white px-4 text-lg font-normal font-lato placeholder-neutral-900/60 focus:bg-white focus:outline-none focus:border-lightgray"
                placeholder="Your Full Name"/>
                </div>
            </div>

            <div className="flex flex-col items-center">
            <div className="flex flex-col justify-start gap-1">
            <label className="block text-black text-[22px] font-semibold font-chillax mt-3 text-left" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="w-[600px] h-16 rounded-xl border-2 border-darkgray bg-white px-4 text-lg font-normal font-lato placeholder-neutral-900/60 focus:bg-white focus:outline-none focus:border-lightgray
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-darkgray invalid:text-black
              focus:invalid:border-darkgray focus:invalid:ring-darkgray"
              placeholder="cityzen@gmail.com"
              value={email}
              onChange={validateEmail}
              style={{ whiteSpace: 'pre-wrap' }}
            />
             {emailError && <div className="error-message text-black text-sm mt-1">{emailError}</div>}
        </div>
        </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col justify-start gap-1">
                <label className="block text-black text-[22px] font-semibold font-chillax mt-3 text-left" htmlFor="message">Message:</label>
                <textarea
                id="message"
                className="w-[600px] h-36 rounded-xl border-2 border-darkgray bg-white px-4 py-3 text-lg font-normal font-lato placeholder-neutral-900/60  focus:bg-white focus:outline-none focus:border-lightgray "
                placeholder="Write Your Message..."
                style={{ whiteSpace: 'pre-wrap' }}
                />
                </div>
            </div>

            <div className="relative flex justify-center mt-9">
          <button
            onClick={handleSubmit}
            className="w-[220px] h-20 flex justify-center items-center border-4 border-dashed border-white rounded-full text-white text-2xl font-medium font-chillax capitalize hover:bg-white hover:text-pink hover:border-pink hover:border-dashed active:bg-white active:text-pink"
          >
            Submit
          </button>
          </div>
    </div>

         {showModal && <SubmitModal onClose={() => setShowModal(false)} />}
            </div>

            <div className="w-full h-[700px] bg-white rounded-[50px] card pt-8 -mb-10 border-2 border-lightgray">
            <div className="absolute top-0 -left-12">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
        </div>
            
            <div className="text-[48px] text-black font-semibold font-chillax mt-28 text-center"><span className="font-semibold text-pink">Connect</span> with Us</div>

            
            <div className="flex items-center gap-14 justify-center mt-6 ml-3">
            <svg width="81" height="81" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9993 21.3337C16.4138 21.3337 17.7704 20.7718 18.7706 19.7716C19.7708 18.7714 20.3327 17.4148 20.3327 16.0003C20.3327 14.5858 19.7708 13.2293 18.7706 12.2291C17.7704 11.2289 16.4138 10.667 14.9993 10.667C13.5849 10.667 12.2283 11.2289 11.2281 12.2291C10.2279 13.2293 9.66602 14.5858 9.66602 16.0003C9.66602 17.4148 10.2279 18.7714 11.2281 19.7716C12.2283 20.7718 13.5849 21.3337 14.9993 21.3337Z" stroke="#040204" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 21.3333V10.6667C3 8.89856 3.70238 7.20286 4.95262 5.95262C6.20286 4.70238 7.89856 4 9.66667 4H20.3333C22.1014 4 23.7971 4.70238 25.0474 5.95262C26.2976 7.20286 27 8.89856 27 10.6667V21.3333C27 23.1014 26.2976 24.7971 25.0474 26.0474C23.7971 27.2976 22.1014 28 20.3333 28H9.66667C7.89856 28 6.20286 27.2976 4.95262 26.0474C3.70238 24.7971 3 23.1014 3 21.3333Z" stroke="#040204" strokeWidth="2"/>
            <path d="M22.334 8.67879L22.3465 8.66504" stroke="#040204" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg width="80" height="80" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0004 18.125C6.25043 12.5 11.8279 8.125 15.6254 8.125C19.4229 8.125 22.5004 10.1925 22.5004 15C22.5004 18.7975 20.0004 21.25 17.5004 21.25C15.0004 21.25 13.7504 18.75 14.3754 15M15.0004 12.5L11.2504 26.875" stroke="#040204" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z" stroke="#040204" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg width="87" height="87" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.19089C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5994 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM17 26.9537V19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H15V26.9537C12.181 26.6964 9.56971 25.3622 7.7093 23.2287C5.8489 21.0952 4.8826 18.3266 5.0114 15.4988C5.1402 12.671 6.35419 10.0017 8.40085 8.04613C10.4475 6.09057 13.1693 4.9993 16 4.9993C18.8307 4.9993 21.5525 6.09057 23.5992 8.04613C25.6458 10.0017 26.8598 12.671 26.9886 15.4988C27.1174 18.3266 26.1511 21.0952 24.2907 23.2287C22.4303 25.3622 19.819 26.6964 17 26.9537Z" fill="#040204"/>
            </svg>
            </div>
        
            <div className="absolute top-[580px] right-8">
        <div className="w-44 h-44 bg-pink/55 rounded-full blur-3xl" />
        </div>
        </div>

        <Subscribe />
        <Footer />
    </>

);
};
export default Contact;
