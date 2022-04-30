import Donators from '../../components/HomeSections/Donators/Donators';
import Hero from '../../components/HomeSections/Hero/Hero';
import HowItWorks from '../../components/HomeSections/HowItWorks/HowItWorks';
import Testimonial from '../../components/HomeSections/Testimonial/Testimonial';
import Team from '../../components/HomeSections/Team/Team';

function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Testimonial />
      <Donators />
      <Team />
    </div>
  );
}

export default Home;
