import { Link } from "wouter";

const Footer = () => (
    <>
      <div className="w-full h-[245px] bg-black flex items-center justify-between rounded-tl-[50px] rounded-tr-[50px] px-20 sticky mt-10">
        <div className="flex flex-col items-left gap-[14px]">
        <Link href="/cityzen">
            <img
            className="w-[109px] h-[40px]"
            src="/images/Logo.png"
            alt="CityZen Logo"
            />
        </Link>
        <div className="text-white text-lg font-medium font-chillax w-[426px]">
        Blend of a bold urban style, smart functionality and a mindful approach to living.
        </div>
        <div className="text-white text-sm font-medium font-lato mt-3">
        2024. All rights reserved
        </div>
        </div>
        <div className="flex flex-row items-center gap-[70px]">
            <div className="flex flex-col items-left gap-5">
            <svg width="35" height="35" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9993 21.3337C16.4138 21.3337 17.7704 20.7718 18.7706 19.7716C19.7708 18.7714 20.3327 17.4148 20.3327 16.0003C20.3327 14.5858 19.7708 13.2293 18.7706 12.2291C17.7704 11.2289 16.4138 10.667 14.9993 10.667C13.5849 10.667 12.2283 11.2289 11.2281 12.2291C10.2279 13.2293 9.66602 14.5858 9.66602 16.0003C9.66602 17.4148 10.2279 18.7714 11.2281 19.7716C12.2283 20.7718 13.5849 21.3337 14.9993 21.3337Z" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 21.3333V10.6667C3 8.89856 3.70238 7.20286 4.95262 5.95262C6.20286 4.70238 7.89856 4 9.66667 4H20.3333C22.1014 4 23.7971 4.70238 25.0474 5.95262C26.2976 7.20286 27 8.89856 27 10.6667V21.3333C27 23.1014 26.2976 24.7971 25.0474 26.0474C23.7971 27.2976 22.1014 28 20.3333 28H9.66667C7.89856 28 6.20286 27.2976 4.95262 26.0474C3.70238 24.7971 3 23.1014 3 21.3333Z" stroke="#F8F8F8" strokeWidth="2"/>
            <path d="M22.334 8.67879L22.3465 8.66504" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0004 18.125C6.25043 12.5 11.8279 8.125 15.6254 8.125C19.4229 8.125 22.5004 10.1925 22.5004 15C22.5004 18.7975 20.0004 21.25 17.5004 21.25C15.0004 21.25 13.7504 18.75 14.3754 15M15.0004 12.5L11.2504 26.875" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.19089C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5994 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM17 26.9537V19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H15V26.9537C12.181 26.6964 9.56971 25.3622 7.7093 23.2287C5.8489 21.0952 4.8826 18.3266 5.0114 15.4988C5.1402 12.671 6.35419 10.0017 8.40085 8.04613C10.4475 6.09057 13.1693 4.9993 16 4.9993C18.8307 4.9993 21.5525 6.09057 23.5992 8.04613C25.6458 10.0017 26.8598 12.671 26.9886 15.4988C27.1174 18.3266 26.1511 21.0952 24.2907 23.2287C22.4303 25.3622 19.819 26.6964 17 26.9537Z" fill="#F8F8F8"/>
            </svg>
            </div>

            <div className="flex flex-col items-left gap-5">
            <Link href="/products"
            className="text-white text-[22px] font-medium font-chillax hover:text-pink  active:text-pink"
            >Products
            </Link>
            <Link href="/about"
            className="text-white text-[22px]  font-medium font-chillax hover:text-pink  active:text-pink"
            >About
            </Link>
            <Link href="/contact"
            className="text-white text-[22px]  font-medium font-chillax hover:text-pink  active:text-pink"
            >Contact
            </Link>
        </div>

            </div>
        </div>    
  
    </>

);

export default Footer;