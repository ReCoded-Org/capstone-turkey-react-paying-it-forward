import Slider from 'react-slick';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Testomonial.css';

const texts = [
  ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore .',
  ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  .',
  ' led it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
];

function Testimonial() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    className: 'react__slick__slider__parent',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="min-h-[225px] md:min-h-[225px] p-3 my-6">
      <h1 className="my-12 text-4xl font-bold"> Our Testimonial </h1>
      <Slider className="flex gap-6 my-6 mx-3 " {...settings}>
        {texts.map((text) => (
          <h3 className="sm:gap-4">{text}</h3>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
