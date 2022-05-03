import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

const texts = ['reference'];

function Testimonial() {
  const { t } = useTranslation(['common']);

  const settings = {
    infinite: true,
    speed: 400,
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
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div className="min-h-[225px] md:min-h-[225px] p-3 my-6">
      <h1 className="my-12 text-xl font-bold"> {t('ourTestimonial')} </h1>
      <Slider className="flex gap-6 my-6 mx-3 " {...settings}>
        {texts.map((text) => (
          <h3 className="sm:gap-4" key={text}>
            {t(text)}
          </h3>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
