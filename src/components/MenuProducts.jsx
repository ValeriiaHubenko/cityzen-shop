import PropTypes from 'prop-types';

const MenuProducts = ({ selectedCategory, setSelectedCategory }) => (
    <>

<div className="flex justify-center items-start gap-28 pt-14">

<button 
    onClick={() => setSelectedCategory('lighting')}
    className={`text-[28px] font-chillax leading-relaxed border-b-4 border-dashed ${selectedCategory === 'lighting' ? 'text-pink font-semibold border-pink ' : 'text-white font-medium border-white'} hover:text-pink hover:font-semibold hover:border-pink active:text-pink active:border-pink`}
        >Lighting
</button>
<button 
 onClick={() => setSelectedCategory('mirrors')}
 className={`text-[28px] font-chillax leading-relaxed border-b-4 border-dashed ${selectedCategory === 'mirrors' ? 'text-pink font-semibold border-pink' : 'text-white font-medium'} hover:text-pink hover:font-semibold hover:border-pink active:text-pink active:border-pink`}
        >Mirrors
</button>
<button 
onClick={() => setSelectedCategory('wallart')}
className={`text-[28px] font-chillax leading-relaxed border-b-4 border-dashed ${selectedCategory === 'wallart' ? 'text-pink font-semibold border-pink' : 'text-white font-medium'} hover:text-pink hover:font-semibold hover:border-pink active:text-pink active:border-pink`}
        >Wall Art
</button>
<button
  onClick={() => setSelectedCategory('planters')}
  className={`text-[28px] font-chillax leading-relaxed border-b-4 border-dashed ${selectedCategory === 'planters' ? 'text-pink font-semibold border-pink' : 'text-white font-medium'} hover:text-pink hover:font-semibold hover:border-pink active:text-pink active:border-pink`}
        >Planters
</button>
<button 
 onClick={() => setSelectedCategory('cushions')}
       className={`text-[28px] font-chillax leading-relaxed border-b-4 border-dashed ${selectedCategory === 'cushions' ? 'text-pink font-semibold border-pink' : 'text-white font-medium'} hover:text-pink hover:font-semibold hover:border-pink active:text-pink active:border-pink`}
        >Cushions
</button>
<button 
 onClick={() => setSelectedCategory('clocks')}
       className={`text-[28px] font-chillax leading-relaxed border-b-4 border-dashed ${selectedCategory === 'clocks' ? 'text-pink font-semibold border-pink' : 'text-white font-medium'} hover:text-pink hover:font-semibold hover:border-pink active:text-pink active:border-pink`}
        >Clocks
</button>

</div>
    </>

);
MenuProducts.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
  };
export default MenuProducts;




    
