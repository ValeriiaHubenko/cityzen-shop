import { Link } from "wouter";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => (
    <>
    <div className="absolute inset-0 bg-black h-[800px] z-0 card"></div>
    
    <Header />

    <div className="h-screen card" style={{ overflowX: "hidden" }}>
      <video
        className="absolute inset-0 w-full h-[800px] object-cover rounded-[50px] border-pink border-y-2"
        src="/videos/Gen-2 2033350013, pikaso_texttoimage_3, M 5.mp4"
        autoPlay
        loop
        muted
      ></video>
        <div className="absolute inset-0 h-[794px] bg-black opacity-50 rounded-[50px] mt-1 card"></div>

        <div className="relative z-10 pt-32">
        <h1 className="text-[78px] text-center text-white font-semibold font-chillax">
        Discover the <span className="text-pink">Zen</span> in Urban Living</h1>
        <p className="text-white text-3xl font-regular font-chillax text-center mt-1"> Innovative, Unique, Stylish & Practical Decor Items</p>

        <div className="flex justify-center mt-60">
          <Link href="/products" className="w-[220px] h-20 flex justify-center items-center border-4 border-dashed border-white rounded-full bg-pink/85  text-white text-2xl font-medium font-chillax capitalize hover:bg-pink active:bg-pink">Shop Now</Link>
          </div>
        <div className="flex items-center justify-center mt-12">
          <svg width="16" height="71" viewBox="0 0 16 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.29289 70.7071C7.68341 71.0976 8.31658 71.0976 8.7071 70.7071L15.0711 64.3431C15.4616 63.9526 15.4616 63.3195 15.0711 62.9289C14.6805 62.5384 14.0474 62.5384 13.6569 62.9289L8 68.5858L2.34314 62.9289C1.95262 62.5384 1.31945 62.5384 0.928929 62.9289C0.538405 63.3195 0.538405 63.9526 0.928929 64.3431L7.29289 70.7071ZM7 -4.37114e-08L7 70L9 70L9 4.37114e-08L7 -4.37114e-08Z" fill="#9E9DA5"/>
        </svg>
        </div>
        </div>
    </div>


    <div className="w-full h-[790px] bg-white rounded-[50px] card">
    <div className="text-black text-[28px] font-medium font-chillax text-center w-[922px] mx-auto pt-20 m-16">
    <span className="text-pink font-semibold">CityZen</span> blends <span className="text-pink font-semibold">bold</span> urban style with a <span className="text-pink font-semibold">mindful</span> approach to living. Our designs prioritize <span className="text-pink font-semibold">functionality</span> without sacrificing <span className="text-pink font-semibold">style</span>.
    </div>

    <div className="w-full h-[500px] flex flex-row gap-5 ml-16">

    <video className="w-[630px] h-[500px] bg-black rounded-3xl object-cover"
    src="/videos/Gen-2 3649693093, Pictpng, M 5.mp4"
    autoPlay
    loop
    muted />
    <div className="flex flex-col gap-5">
    <video className="w-60 h-60 bg-black rounded-3xl object-cover"
    src="public/videos/Gen-2 1025406950, Animate only the bac, Дизайн без названия, M 5.mp4"
    autoPlay
    loop
    muted />
    <video className="w-60 h-60 bg-black rounded-3xl object-cover" 
    src="/videos/Gen-2 1174112271, pikaso_texttoimage_C, brush_H 4, brush_P 25, brush_A 18.mp4"
    autoPlay
    loop
    muted/>
    </div>

    <div className="flex flex-col items-left justify-center gap-12">
        <div className="flex flex-row gap-7 ml-8 items-center">
            <div className="w-5 h-5 bg-pink rounded-full blur-md" />
            <div className="text-black text-[32px] font-medium font-chillax">Bold Urban Style</div>
        </div>
        <div className="flex flex-row gap-7 ml-8 items-center">
            <div className="w-5 h-5 bg-pink rounded-full blur-md" />
            <div className="text-black text-[32px] font-medium font-chillax leading-10">Smart Functionality</div>
        </div>
        <div className="flex flex-row gap-8 ml-7 items-center">
            <div className="w-5 h-5 bg-pink rounded-full blur-md" />
            <div className="text-black text-[32px] font-medium font-chillax leading-10">Mindful Living</div>
        </div>
        <div className="flex justify-center ml-2">
          <Link href="/products" className="w-[230px] h-20 flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-white text-pink text-2xl font-medium font-chillax capitalize hover:bg-pink hover:text-white active:bg-pink active:text-white">Explore more</Link>
        </div>
    </div>
    </div>
</div>

    <div className="w-full h-[880px] bg-black rounded-[50px] card">
        <div className="text-pink text-[38px] font-semibold font-chillax text-center pt-14">Featured Products</div>
    <div className="flex flex-row gap-[80px] px-[60px] mt-10">

    <div className="flex flex-col gap-5 justify-start">
    <img className="w-96 h-96 rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="public/images/Rectangle 9.png" />
        <div className="text-white text-3xl font-semibold font-chillax mt-1 hover:text-pink active:text-pink">Smart Wall Art</div>
        <div className="text-darkgray text-lg font-medium font-chillax -mt-4">500$</div>
    <div className="flex justify-end -mt-20 items-center">
        <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
        <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C"/>
        </svg>
        </div>
    </div>

    </div>

    <div className="flex flex-col gap-5 justify-start">
    <img className="w-96 h-96 rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="public/images/Rectangle 10.png" />
        <div className="text-white text-3xl font-semibold font-chillax mt-1 hover:text-pink active:text-pink">Smart Lighting </div>
        <div className="text-darkgray text-lg font-medium font-chillax -mt-4">770$</div>
    <div className="flex justify-end -mt-20 items-center">
        <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
        <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C"/>
        </svg>
        </div>
    </div>
    </div>

    <div className="flex flex-col gap-5 justify-start">
    <img className="w-96 h-96 rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src="public/images/Rectangle 8.png" />
        <div className="text-white text-3xl font-semibold font-chillax hover:text-pink active:text-pink mt-1">Smart Mirror</div>
        <div className="text-darkgray text-lg font-medium font-chillax -mt-4">690$</div>
    <div className="flex justify-end -mt-20 items-center">
        <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
        <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C"/>
        </svg>
        </div>
    </div>
    </div>
    </div>

    <div className="flex justify-center mt-10">
          <Link href="/products" className="w-[220px] h-20 flex justify-center items-center border-4 border-dashed border-pink rounded-full bg-transparent  text-pink text-2xl font-medium font-chillax capitalize hover:bg-pink hover:text-white active:bg-pink active:text-white">Shop Now</Link>
          </div>

    </div>
   
    <div className="w-full h-[690px] bg-white rounded-[50px] z-0 card">
    <div className="text-black text-[38px] font-semibold font-chillax text-center pt-20">Innovative <span className="text-pink font-semibold">Smart</span> Home Decor</div>
    
    <img className="absolute inset-x-0 mt-36 z-0" src="public/images/Vector 1.png" alt="line" />

    <div className="flex flex-row gap-28 mx-20 relative z-0">
    <div className="flex flex-col gap-4 items-center mt-10">
        <div className="text-pink text-[28px] font-semibold font-chillax text-center leading-10">
        Voice Control </div>
        <img className="w-[220px] h-[220px] rounded-full z-10" src="public/images/Ellipse 18.jpg" />
        <img className="rounded-full -mt-36 z-0" src="public/images/Ellipse 27.png" />
    </div>    

    <div className="flex flex-col gap-4 items-center mt-16">
        <img className="rounded-full z-0" src="public/images/Ellipse 27.png" />
        <img className="w-[220px] h-[220px] rounded-full -mt-36 z-10" src="public/images/Ellipse 21.jpg" />
        <div className="text-pink text-[28px] font-semibold font-chillax text-center leading-10">
        Ambient Mode </div>
    </div>    

    <div className="flex flex-col gap-4 items-center mt-10">
        <div className="text-pink text-[28px] font-semibold font-chillax text-center leading-10">
        Motion Sensing </div>
        <img className="w-[220px] h-[220px] rounded-full z-10" src="public/images/Ellipse 19.jpg" />
        <img className="rounded-full -mt-36 z-0" src="public/images/Ellipse 27.png" />
    </div>    

    <div className="flex flex-col gap-4 items-center mt-16">
    <img className="rounded-full z-0" src="public/images/Ellipse 27.png" />
        <img className="w-[220px] h-[220px] rounded-full -mt-36 z-10" src="public/images/Ellipse 20.jpg" />
        <div className="text-pink text-[28px] font-semibold font-chillax text-center leading-10">
        Energy Efficient </div>
    </div>    

</div>
    </div>

    <Subscribe />
    <Footer />
    </>

);

export default Home;
