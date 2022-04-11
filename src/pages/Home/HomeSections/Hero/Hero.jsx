import Slider from 'react-slick';
import donate from '../../../../assets/Home/donate.svg';
import request from '../../../../assets/Home/request.svg';
import './Hero.css';

function Hero() {
  const settings = {
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
  };
  return (
    <div className="my-4 pb-6 mx-2">
      <Slider {...settings} className="">
        <div>
          <div>
            <img
              src={donate}
              className="rounded-2xl w-[30%] mb-2 mx-auto object-contain "
              alt="donate"
            />
          </div>
          <div>
            <h1 className="text-2xl text-black font-bold mb-1">
              Make it super awesome with this headline
            </h1>
            <p className="">
              Realm of the galaxies across the centuries the carbon in our apple
              pies vanquish the impossible
            </p>
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-[#FF4848E8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-4 w-[40%] mt-4 rounded-xl text-2xl tracking-wider md:w-[40%] sm:w-[90%]"
            >
              Donation
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src={request}
              className="rounded-full w-[30%] mb-2 mx-auto"
              alt="request"
            />
          </div>
          <div>
            <h1 className="text-2xl text-black font-bold mb-1">
              Make it super awesome with this headline
            </h1>
            <p>
              Realm of the galaxies across the centuries the carbon in our apple
              pies vanquish the impossible
            </p>
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-[#FF4848E8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-4 w-[40%] mt-4 rounded-xl text-2xl tracking-wider"
            >
              Request
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default Hero;
