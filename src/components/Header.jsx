import { Link } from "wouter";

const Header = () => (
    <>
    <div className="w-full h-24 bg-black flex items-center justify-between rounded-bl-[50px] rounded-br-[50px] px-20 sticky top-0 z-20">
<div className="flex items-center">
  <Link href="/cityzen">
    <img
      className="w-[109px] h-[40px]"
      src="/images/Logo.png"
      alt="CityZen Logo"
    />
  </Link>
</div>

<div className="inline-flex flex-row justify-center items-start gap-10">
<div className="flex justify-center items-start gap-10">
<Link href="/products"
        className="text-white text-[22px] font-medium font-chillax hover:text-pink hover:font-semibold active:text-pink"
        >Products
</Link>
<Link href="/about"
        className="text-white text-[22px]  font-medium font-chillax hover:text-pink hover:font-semibold active:text-pink"
        >About
</Link>
<Link href="/contact"
        className="text-white text-[22px]  font-medium font-chillax hover:text-pink hover:font-semibold active:text-pink"
        >Contact
</Link>
<Link href="/cart">
<svg className="text-white hover:text-pink active:text-pink"
width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M24.25 8.75H20.5V7.5C20.5 6.17392 19.9732 4.90215 19.0355 3.96447C18.0979 3.02678 16.8261 2.5 15.5 2.5C14.1739 2.5 12.9021 3.02678 11.9645 3.96447C11.0268 4.90215 10.5 6.17392 10.5 7.5V8.75H6.75C6.41848 8.75 6.10054 8.8817 5.86612 9.11612C5.6317 9.35054 5.5 9.66848 5.5 10V23.75C5.5 24.7446 5.89509 25.6984 6.59835 26.4017C7.30161 27.1049 8.25544 27.5 9.25 27.5H21.75C22.7446 27.5 23.6984 27.1049 24.4017 26.4017C25.1049 25.6984 25.5 24.7446 25.5 23.75V10C25.5 9.66848 25.3683 9.35054 25.1339 9.11612C24.8995 8.8817 24.5815 8.75 24.25 8.75ZM13 7.5C13 6.83696 13.2634 6.20107 13.7322 5.73223C14.2011 5.26339 14.837 5 15.5 5C16.163 5 16.7989 5.26339 17.2678 5.73223C17.7366 6.20107 18 6.83696 18 7.5V8.75H13V7.5ZM23 23.75C23 24.0815 22.8683 24.3995 22.6339 24.6339C22.3995 24.8683 22.0815 25 21.75 25H9.25C8.91848 25 8.60054 24.8683 8.36612 24.6339C8.1317 24.3995 8 24.0815 8 23.75V11.25H10.5V12.5C10.5 12.8315 10.6317 13.1495 10.8661 13.3839C11.1005 13.6183 11.4185 13.75 11.75 13.75C12.0815 13.75 12.3995 13.6183 12.6339 13.3839C12.8683 13.1495 13 12.8315 13 12.5V11.25H18V12.5C18 12.8315 18.1317 13.1495 18.3661 13.3839C18.6005 13.6183 18.9185 13.75 19.25 13.75C19.5815 13.75 19.8995 13.6183 20.1339 13.3839C20.3683 13.1495 20.5 12.8315 20.5 12.5V11.25H23V23.75Z" fill="currentColor" />
</svg>
</Link>

</div>
</div>
</div>
</>
);

export default Header;