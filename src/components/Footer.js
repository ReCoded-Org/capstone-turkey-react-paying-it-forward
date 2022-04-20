import SubscriptionForm from './SubscriptionForm';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import FooterHomeLinks from './FooterHomeLinks';
import FooterTeamLinks from './FooterTeamLinks';
import FooterResourcesLinks from './FooterResourcesLinks';

export default function Footer() {
  return (
    <footer className="bg-[#FF7338] flex flex-col justify-center    ">
      <div className='container mx-auto flex flex-row text-center'>
        <Logo />
        <FooterHomeLinks />
        <FooterTeamLinks />
        <FooterResourcesLinks />
      </div>
      <div className="ml-[35px] h-[150px] w-[500px] col-3 sm:text-left">
        <SubscriptionForm />
      </div>

      <div className="relative flex py-2 items-center sm:grid-cols-2">
        <SocialMedia />
      </div>
    </footer>
  );
}
