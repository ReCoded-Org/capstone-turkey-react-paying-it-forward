import { ABOUT_US, QA, ITEMS, DONATORS, PRICING } from '../../routes';

function FooterHomeLinks() {
  return (
    <div className=" lg:text-[15px] lg:text-[#FFFFFF] lg:mr-[50px] sm:invisible md:invisible lg:visible">
      <h5 className="lg:font-bold mb-1">Home</h5>
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
  );
}

export default FooterHomeLinks;
