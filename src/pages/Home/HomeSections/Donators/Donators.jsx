import Slider from 'react-slick';

function Donators() {
  const settings = {
    focusOnSelect: true,
    dots: false,
    centerMode: true,
    infinite: true,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <div className="bg-[#D8F4EC] min-h-[500px] md:min-h-[175px] rounded-3xl py-6 mx-7">
      <h1 className="mt-12 mb-12 text-4xl font-bold">Donators</h1>
      <Slider className="mt-3" {...settings}>
        <div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-36 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Donators;
