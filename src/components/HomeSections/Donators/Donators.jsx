import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DonatorsData = [
  {
    name: 'donator 1',
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    id: 1,
  },
  {
    name: 'donator 2',
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    id: 2,
  },
  {
    name: 'donator 3',
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    id: 3,
  },
  {
    name: 'donator 4',
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    id: 4,
  },
  {
    name: 'donator 5',
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    id: 5,
  },
  {
    name: 'donator 6',
    img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
    id: 6,
  },
];
function Donators() {
  const settings = {
    focusOnSelect: true,
    dots: false,
    centerMode: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    className: 'react__slick__slider__parent',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#D8F4EC] min-h-[500px] md:min-h-[175px] rounded-3xl py-8 mx-7">
      <h1 className=" mb-16 text-xl font-bold">Donators</h1>
      <Slider className="mt-3" {...settings}>
        {DonatorsData.map((Donator) => (
          <div className="w-full" key={Donator.id}>
            <div>
              <img
                src={Donator.img}
                className="rounded-full w-36 mb-4 mx-auto"
                alt="Avatar"
              />
              <h5 className="text-xl font-medium leading-tight mb-2">
                {Donator.name}
              </h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Donators;
