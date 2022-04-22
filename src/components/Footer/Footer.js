import SubscriptionForm from './SubscriptionForm';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import FooterHomeLinks from './FooterHomeLinks';
import FooterTeamLinks from './FooterTeamLinks';
import FooterResourcesLinks from './FooterResourcesLinks';

export default function Footer() {
  return (
    <div className="bg-[#FF7338] md:items-center md:justify-center lg:px-12 lg:py-6  items-start justify-center flex flex-col w-full ">
      <div className=" flex md:justify-center md:items-center lg:justify-start w-full  lg:w-full ">
        <Logo />
        <div className="lg:flex xs:hidden sm:hidden md:flex">
          <FooterHomeLinks />
          <FooterTeamLinks />
          <FooterResourcesLinks />
        </div>
        <div className=" sm:mr-0 md:mr-12 md:ml-0 lg:ml-auto md:self-center md:justify-center flex-col">
          <SubscriptionForm />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}
