import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "wouter";

    const allProducts = {
        lighting: [
            { id: "lighting1", image: "public/images/Rectangle 10.png", title: "Smart Ceiling Light", price: "310$" },
            { id: "lighting2", image: "public/images/openart-image_lwq3Uk9E_1719314965232_raw.jpg", title: "Smart Ceiling Light", price: "330$"},
            { id: "lighting3", image: "public/images/openart-image_eppcqf3B_1719315129653_raw.jpg", title: "Smart Ceiling Light", price: "390$"},
            { id: "lighting4", image: "public/images/lighting.jpg", title: "Smart Ceiling Lamp", price: "360$"},
        ],
        mirrors: [
            { id: "mirror5", image: "public/images/Mirror3.jpg", title: "Smart Mirror", price: "690$" },
            { id: "mirror6", image: "public/images/Mirror1.jpg", title: "Modern Wall Mirror", price: "450$" },
            { id: "mirror7", image: "public/images/Mirror6.jpg", title: "Smart Wall Mirror", price: "850$" },
            { id: "mirror8", image: "public/images/Rectangle 8.png", title: "Smart Mirror", price: "690$" },
            { id: "mirror10", image: "public/images/Mirror2.jpg", title: "Modern Smart Mirror", price: "450$" },
            { id: "mirror12", image: "public/images/Mirror9.jpg", title: "Smart Big Mirror", price: "650$" },
            { id: "mirror13", image: "public/images/Mirror5.jpg", title: "Modern Wall Mirror", price: "470$" },
            { id: "mirror14", image: "public/images/Mirror10.jpg", title: "Smart Standing Mirror", price: "580$" },
            { id: "mirror15", image: "public/images/Mirror11.jpg", title: "Modern Table Mirror", price: "350$" },
        ],
        wallart: [
            { id: "wallart16", image: "public/images/Rectangle 9.png", title: "Abstract Wall Art", price: "150$" },
            { id: "wallart17", image: "public/images/Wallart2.jpg", title: "Modern Wall Art", price: "120$" },
            { id: "wallart18", image: "public/images/Wallart3.jpg", title: "Smart Wall Art", price: "160$"},
            { id: "wallart19", image: "public/images/Wallart4.jpg", title: "Abstract Wall Art", price: "150$" },
            { id: "wallart20", image: "public/images/Wallart5.jpg", title: "Modern Wall Art", price: "120$" },
            { id: "wallart21", image: "public/images/Wallart6.jpg", title: "Smart Wall Art", price: "160$"},
            { id: "wallart22", image: "public/images/Wallart7.jpg", title: "Abstract Wall Art", price: "180$" },
            { id: "wallart23", image: "public/images/Wallart8.jpg", title: "Modern Wall Art", price: "190$" },
            { id: "wallart24", image: "public/images/Wallart9.jpg", title: "Smart Wall Art", price: "160$"},
        ],
        planters: [
            { id: "planter25", image: "public/images/Planter1.jpg", title: "Indoor Smart Planter", price: "80$" },
            { id: "planter26", image: "public/images/Planter2.jpg", title: "Smart Plant Pot", price: "60$" },
            { id: "planter27", image: "public/images/Planter3.jpg", title: "Smart Planter", price: "70$" },
            { id: "planter28", image: "public/images/Planter4.jpg", title: "Indoor Smart Planter", price: "80$" },
            { id: "planter29", image: "public/images/Planter5.jpg", title: "Smart Plant Pot", price: "120$" },
            { id: "planter30", image: "public/images/Planter6.jpg", title: "Smart Planter", price: "110$" },
            { id: "planter31", image: "public/images/Planter7.jpg", title: "Indoor Smart Planter", price: "90$" },
            { id: "planter32", image: "public/images/Planter8.jpg", title: "Smart Plant Pot", price: "850$" },
            { id: "planter33", image: "public/images/Planter9.jpg", title: "Smart Planter", price: "100$" },
        ],
        cushions: [
            { id: "cushion34", image: "public/images/Cushion1.jpg", title: "Smart Cushion", price: "60$" },
            { id: "cushion35", image: "public/images/Cushion2.jpg", title: "Smart Cushion", price: "50$" },
            { id: "cushion36", image: "public/images/Cushion3.jpg", title: "Smart Cushion", price: "70$" },
            { id: "cushion37", image: "public/images/Cushion4.jpg", title: "Smart Cushion", price: "60$" },
            { id: "cushion38", image: "public/images/Cushion5.jpg", title: "Smart Cushion", price: "80$" },
            { id: "cushion39", image: "public/images/Cushion6.jpg", title: "Smart Cushion", price: "70$" },
            { id: "cushion40", image: "public/images/Cushion7.jpg", title: "Smart Cushion", price: "90$" },
            { id: "cushion41", image: "public/images/Cushion8.jpg", title: "Smart Cushion", price: "80$" },
        ],
        clocks: [
            { id: "clock42", image: "public/images/clock1.jpg", title: "Smart Wall Clock", price: "120$" },
            { id: "clock43", image: "public/images/clock2.jpg", title: "Smart Table Clock", price: "100$" },
            { id: "clock44", image: "public/images/clock3.jpg", title: "Smart Table Clock", price: "150$" },
            { id: "clock45", image: "public/images/clock4.jpg", title: "Smart Wall Clock", price: "120$" },
            { id: "clock46", image: "public/images/Clock5.jpg", title: "Smart Table Clock", price: "130$" },
            { id: "clock47", image: "public/images/Clock6.jpg", title: "Smart Wall Clock", price: "140$" },
            { id: "clock48", image: "public/images/Clock7.jpg", title: "Smart Table Clock", price: "110$" },
        ],
    };

    const PRODUCTS_PER_PAGE = 3;

const ProductsRange = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setProducts(allProducts[selectedCategory] || []);
        setCurrentPage(0); // Reset page when category changes
      }, [selectedCategory]);

      const startIndex = currentPage * PRODUCTS_PER_PAGE;
      const displayedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    
      const handleNextPage = () => {
        if (startIndex + PRODUCTS_PER_PAGE < products.length) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePreviousPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };      

  return (
    <>
    <div className="flex mx-24">
    <div className="flex flex-wrap justify-start items-start gap-16">
    {displayedProducts.map((product, index) => (
        <Link key={index}  to={`/productinfo/${product.id}`} className="flex flex-col gap-4 justify-start product-card px-3 pt-2 pb-4 rounded-3xl">
          <img className="w-[340px] h-[340px] rounded-3xl border-2 border-darkgray hover:border-pink hover:border-2" src={product.image} alt={product.title} />
          <div className="text-white text-2xl font-semibold font-chillax mt-1 hover:text-pink active:text-pink">{product.title}</div>
          <div className="text-darkgray text-lg font-medium font-chillax -mt-3">{product.price}</div>
          
          <div className="flex justify-end -mt-[72px]">
            <button className="relative hover:bg-white hover:rounded-full">
              <div className="w-12 h-12 rounded-full border-2 border-pink border-dashed" />
              <svg className="absolute left-4 top-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.625901 14.7929C0.235377 15.1834 0.235377 15.8166 0.625901 16.2071C1.01643 16.5976 1.64959 16.5976 2.04011 16.2071L0.625901 14.7929ZM16.4751 1.35786C16.4751 0.80558 16.0274 0.357865 15.4751 0.357865L6.47514 0.357865C5.92286 0.357865 5.47514 0.80558 5.47514 1.35786C5.47514 1.91015 5.92286 2.35786 6.47514 2.35786H14.4751V10.3579C14.4751 10.9101 14.9229 11.3579 15.4751 11.3579C16.0274 11.3579 16.4751 10.9101 16.4751 10.3579L16.4751 1.35786ZM2.04011 16.2071L16.1822 2.06497L14.768 0.650758L0.625901 14.7929L2.04011 16.2071Z" fill="#F16E7C" />
              </svg>
            </button>
            </div>
        </Link>
      ))}
    </div>
    </div>
    <div className="flex justify-between px-28 pt-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          <svg className={`w-8 h-8 ${currentPage === 0 ? 'text-darkgray/60' : 'text-white hover:text-pink'}`} width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 12.5V9.5H5.35897L12.1795 2L10.7179 0L0 11L10.7179 22L12.1795 20L5.35897 12.5H38Z" fill="currentColor" />
          </svg>
        </button>
        <button onClick={handleNextPage} disabled={startIndex + PRODUCTS_PER_PAGE >= products.length}>
          <svg className={`w-8 h-8 ${startIndex + PRODUCTS_PER_PAGE >= products.length ? 'text-darkgray' : 'text-white hover:text-pink'}`} width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5V9.5H32.641L25.8205 2L27.2821 0L38 11L27.2821 22L25.8205 20L32.641 12.5H0Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </>
  );
};

ProductsRange.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
  };

export default ProductsRange;




