import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const About = () => (
    <>
    <div className="absolute inset-0 bg-black h-[700px] z-0"></div>
    <Header />
    <div className="h-screen card" style={{ overflowX: "hidden" }}>
      <video
        className="absolute inset-0 w-full h-[680px] object-cover rounded-[50px] border-pink border-y-2"
        src="public/videos/Gen-2 2287029967, pikaso_texttoimage_3, M 5.mp4"
        autoPlay
        loop
        muted
      ></video>
        <div className="absolute inset-0 h-[680px] bg-black opacity-50 rounded-[50px] card "></div>

        <div className="relative z-10 flex flex-col lg:mt-48">
        <h1 className="text-[56px] text-center text-white font-semibold font-chillax mb-4">
        <span className="text-pink">Bold</span> Design and <span className="text-pink">Smart</span> Living</h1>
        <p className="text-white text-[34px] font-regular font-chillax text-center mt-1 w-[625px] leading-relaxed mx-auto"><span className="text-pink font-semibold">Transforming</span> spaces with <span className="text-pink font-semibold">innovative</span> design and <span className="text-pink font-semibold">smart</span> functionality.</p>
    </div>
    </div>    

    <div className="w-full h-[880px] bg-white rounded-[50px] card">
    <div className="absolute top-[5px] -left-16">
        <div className="w-32 h-32 bg-pink/35 rounded-full blur-2xl" />
     </div>
        <div className="flex items-start justify-center pt-[68px] gap-20">
            <div className="flex flex-col gap-3">
            <div className="text-[38px] text-black font-semibold font-chillax">Who <span className="text-pink">we </span><span className="capitalize">Are</span></div>
            <div className="text-2xl text-black font-medium font-lato w-[516px]">At CityZen, we believe that home decor should be a blend of bold design and smart functionality. Founded in 2024, our journey started with a simple idea: to create a space where style meets technology, enhancing everyday living.</div>
            </div>
            <img className="border-2 border-darkgray rounded-[40px] h-[310px]" src="/images/PictureAbout1.jpg" />
         </div>  

         <div className="flex items-start justify-center mt-10 gap-14">
            <img className="border-2 border-darkgray rounded-[40px] h-[330px]" src="/images/PictureAbout2.jpg" />
            <div className="flex flex-col gap-3">
            <div className="text-[38px] text-black font-semibold font-chillax">Our <span className="text-pink">Mission</span></div>
            <div className="text-2xl text-black font-medium font-lato w-[465px]">Our mission is to bring innovative, stylish, and functional home decor to urban dwellers who appreciate modern aesthetics and smart living solutions. We are dedicated to crafting products that not only look good but also make your life easier.</div>
            </div>
            <img className="border-2 border-darkgray rounded-[40px]" src="public/images/PictureAbout3.jpg" />
         </div>   
    </div>

    <div className="w-full h-[750px] bg-black rounded-[50px] card pt-16 px-20">
    <div className="text-[38px] text-white font-semibold font-chillax">Our <span className="text-pink">Values</span></div>
    <div className="absolute top-0 -right-9">
        <div className="w-32 h-32 bg-pink/25 rounded-full blur-2xl" />
     </div>

    <div className="flex gap-36 items-center justify-center mx-auto">   
    <div className="flex flex-col gap-2 items-center justify-center mt-10">
        <img className="w-[220px] h-[220px] rounded-full border-2 border-pink" src="public/images/Value1.jpg" />
        <div className="text-[32px] text-white font-semibold font-chillax mt-4">Innovation</div>
        <div className="text-xl text-white font-medium font-lato w-[320px]">We constantly strive to integrate the latest technology into our designs, ensuring that our products are at the forefront of smart home solutions.</div>
    </div>
    <div className="flex flex-col gap-2 items-center justify-center mt-10">
        <img className="w-[220px] h-[220px] rounded-full border-2 border-pink" src="public/images/Value2.jpg" />
        <div className="text-[32px] text-white font-semibold font-chillax mt-4">Quality</div>
        <div className="text-xl text-white font-medium font-lato w-[320px]">Quality is at the heart of everything we do. From the materials we use to our craftsmanship, we are committed to excellence.</div>
    </div>
    <div className="flex flex-col gap-2 items-center justify-center mt-10">
        <img className="w-[220px] h-[220px] rounded-full border-2 border-pink" src="public/images/Value3.jpg" />
        <div className="text-[32px] text-white font-semibold font-chillax mt-4">Style</div>
        <div className="text-xl text-white font-medium font-lato w-[320px]">Our designs are bold, modern, and unique. We aim to make a statement with each piece, bringing a touch of urban elegance to your home.</div>
    </div>
    </div>
    </div>

    <Subscribe />
    <Footer />
    </>

);

export default About;
