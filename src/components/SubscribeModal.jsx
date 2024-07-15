import PropTypes from 'prop-types';

const SubscribeModal  = ({ onClose }) => {
    return (
        <>
        <div className="fixed inset-0 flex flex-col  items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white px-10 border-black border-2 rounded-3xl relative py-28
         mx-auto">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-5 text-darkgray hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>

                <div className="text-center text-pink text-5xl font-semibold font-chillax leading-tight">
                    Glad to see you with us!
                </div>
                <div className="mt-5 mb-6 text-center text-black text-2xl font-regular font-lato">
                    You will receive the latest <span className="text-pink font-semibold">news</span> and <span className="text-pink font-semibold">updates</span> from us
                </div>
        </div>
        </div>
        </> 
    );
};

SubscribeModal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };
export default SubscribeModal;


 
