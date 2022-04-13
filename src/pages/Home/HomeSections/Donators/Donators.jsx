import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

let count = 0;
let slideInterval;
function Donators() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  const donatorsImages = [
    'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
  ];
  const donatorNames = ['John', 'doe', 'Doe'];
  const handleOnNextClick = () => {
    count = (count + 1) % donatorsImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = donatorsImages.length;
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
          src={donatorsImages[currentIndex]}
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">
          {donatorNames[currentIndex]}
        </h5>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
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

export default Donators;
