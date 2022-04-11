import Hero from './HomeSections/Hero/Hero';
import Donators from './HomeSections/Donators/Donators';
import Testimonial from './HomeSections/Testimonial';
import Team from './HomeSections/Team/Team';
import HowItWorks from './HomeSections/HowItWorks/HowItWorks';

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
