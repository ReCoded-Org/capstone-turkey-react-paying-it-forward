import LogoPicture from '../assets/images/logo.png';
import { ABOUT_US, QA, ITEMS, DONATORS, PRICING } from '../routes';
import Members from '../assets/data/Members.json';

function Logo() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 p-4 ">
      <img
        className="w-[109px] h-[95px] m-[-30px]"
        src={LogoPicture}
        alt="Logo"
      />
      <div className="mt-6 text-sm text-[#FFFFFF] mr-[50px] hidden md:block">
        <h5 className="font-bold mb-1">Home</h5>
        <ul className="list-none mb-0">
          <li>
            <a href={ITEMS}>Items</a>
          </li>
          <li>
            <a href={DONATORS}>Donators</a>
          </li>
          <li>
            <a href={PRICING}>Pricing</a>
          </li>
          <li>
            <a href={ABOUT_US}>About Us</a>
          </li>
          <li>
            <a href={QA}>QA</a>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-sm text-[#FFFFFF] hidden md:block">
        <h5 className="font-bold mb-1">Our Team</h5>
        <ul className="list-none mb-0">
          {Members.map((Member) => (
            <li>
              <a href={Member.link} target="_blank" rel="noreferrer">
                {Member.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 text-sm text-[#FFFFFF] hidden md:block">
        <h5 className="font-bold mb-1">Resources</h5>
        <ul className="list-none mb-0">
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
          <li>
            <a href="#!">Terms and Conditions</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Logo;
