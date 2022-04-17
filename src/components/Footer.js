import SubscriptionForm from './SubscriptionForm';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer className="bg-[#FF7338] text-left">
      <div className="container p-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 p-4 ">
          <div className="col-5">
            <Logo />
          </div>
          <div className="ml-[35px] h-[150px] w-[500px] col-3 sm:text-left">
            <SubscriptionForm />
          </div>
        </div>
      </div>
      <div className="relative flex py-2 items-center sm:grid-cols-2">
        <SocialMedia />
      </div>
    </footer>
  );
}
