import PropTypes from 'prop-types';

const SubmitModal  = ({ onClose }) => {
    return (
        <>
        <div className="fixed inset-0 flex flex-col  items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white px-10 border-darkgray border-2 rounded-3xl relative py-28
         mx-auto">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-5 text-darkgray hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>

                <div className="text-center text-pink text-5xl font-semibold font-chillax leading-tight mb-4">
                    Thanks for your Message!
                </div>
                <div className="text-center text-black text-2xl font-medium font-lato leading-tight mb-5">
                    We will answear you as soon as possible
                </div>
        </div>
        </div>
        </> 
    );
};

SubmitModal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };
export default SubmitModal;


 
