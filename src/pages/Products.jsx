import { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuProducts from '../components/MenuProducts';
import ProductsRange from '../components/ProductsRange';
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const categoryHeadings = {
  lighting: "Illuminate your space smart with style",
  mirrors: "Reflect your style with our smart mirrors",
  wallart: "Adorn your walls with creative art",
  planters: "Green up your space with stylish planters",
  cushions: "Comfortable cushions that make a statement",
  clocks: "Timeless pieces that make a statement",
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("lighting");
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: "public/images/Rectangle 3.jpg",
      heading: "Intersection of bold style and smart functionality",
    },
    {
      image: "public/images/Rectangle 19.jpg",
      heading: "Innovative solutions for a smarter home",
    },
    {
      image: "public/images/Rectangle 2.jpg",
      heading: "Functional pieces that make a statement",
    }
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2800); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="absolute inset-0 bg-black h-[570px] z-0 card"></div>
      
      <Header />

      <div className="h-[570px] card mb-16" style={{ overflowX: "hidden" }}>
        <img
          className="absolute inset-0 w-full h-[570px] object-cover rounded-[50px] border-pink border-y-2"
          src={slides[activeSlide].image}
          alt="Slide Image"
        />
        <div className="absolute inset-0 h-[570px] bg-black opacity-50 rounded-[50px] card"></div>

        <div className="relative z-10 mt-52">
          <h2 className="text-5xl text-center text-white font-semibold font-chillax leading-normal">
            <span className="text-white">{slides[activeSlide].heading}</span>
          </h2>

          <div className="flex flex-row gap-4 absolute top-80 inset-x-0 justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-pink' : 'bg-lightgray'}`}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div id="productsrange" className="w-full lg:h-[860px] bg-black rounded-[50px] card">
        <div className="relative z-10 mt-20">
          <MenuProducts selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>

        <h2 className="text-white text-[38px] font-medium font-chillax text-center pt-10">
          <span className="text-white">{categoryHeadings[selectedCategory]}</span>
        </h2>    

        <div className="relative z-10 mt-10">
          <ProductsRange selectedCategory={selectedCategory} />
        </div>
      </div>    

      <Subscribe />
      <Footer />
    </>
  );
};

export default Products;

