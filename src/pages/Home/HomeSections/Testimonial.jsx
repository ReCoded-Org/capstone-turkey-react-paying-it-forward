import { useState, useEffect, useRef, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Testimonial() {
  const text = [
    ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore .',
    ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy .',
    ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const handleOnClick = useCallback(
    (direction) => {
      if (direction === 'left') {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : text.length - 1);
      } else {
        setCurrentIndex(currentIndex < text.length - 1 ? currentIndex + 1 : 0);
      }
      slideRef.current.classList.add('fade-anim');
    },
    [currentIndex, text.length],
  );
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleOnClick('right');
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [handleOnClick]);

  return (
    <div ref={slideRef} className=" select-none relative mx-1 my-10 py-6">
      <h1 className="mb-12 text-4xl font-bold my-4"> Our Testimonial </h1>
      <div className="aspect-w-16 aspect-h-10 ">
        <p className="mx-10">{text[currentIndex]}</p>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center ">
        <button
          className=" text-blacl p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={() => handleOnClick('left')}
          type="submit"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          className=" text-black p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={() => handleOnClick('right')}
          type="submit"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
