import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import donate from '../../../assets/Home/donate.svg';
import request from '../../../assets/Home/request.svg';

let count = 0;
let slideInterval;
const featuredProducts = [donate, request];
const button = ['Donation', 'Request'];
const paragraph = [
  ' Realm of the galaxies across the centuries the carbon in our apple',
  ' Realm of the galaxies across the centuries the carbon in our applpies vanquish the impossible',
];
const header = ['make a donation', 'make a request'];
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={slideRef} className="select-none relative my-4 pb-6 mx-2">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={featuredProducts[currentIndex]}
          className="rounded-2xl w-[30%] mb-2 mx-auto object-contain "
          alt=""
        />
        <h1 className="text-2xl text-black font-bold mb-1">
          {header[currentIndex]}
        </h1>
        <p className="">{paragraph[currentIndex]}</p>
        <button
          type="button"
          className="bg-[#FF4848E8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-4 w-[40%] mt-4 rounded-xl text-2xl tracking-wider mb-4"
        >
          {button[currentIndex]}
        </button>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center invisible md:visible sm:visible">
        <button
          className="bg-white text-black p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
          type="button"
          aria-label="left"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          className="bg-white text-black p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
          type="button"
          aria-label="right"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
