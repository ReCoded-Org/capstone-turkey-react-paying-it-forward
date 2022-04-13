import speechBubbleIcon from '../../../../assets/Home/speechBubbleIcon.svg';
import donationIcon from '../../../../assets/Home/donationIcon.svg';
import requestIcon from '../../../../assets/Home/requestIcon.svg';

function HowItWorks() {
  return (
    <div className=" mt-6">
      <h1 className="mb-12 text-4xl font-bold">How It Works?</h1>
      <div className="h-[60%] bg-[#D8F4EC] flex flex-col justify-center items-center rounded-2xl px-6 mx-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20 mb-20 ">
          <div className="max-w-sm rounded-2xl shadow-lg bg-white">
            <img
              className=" object-contain w-[40%] ml-24 mt-10 mb-24"
              src={speechBubbleIcon}
              alt="Connect with the donners"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 ">
                Connect with the donners
              </div>
              <p className="text-gray-700 text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              className=" object-contain w-[40%] ml-24 mt-10 mb-20"
              src={requestIcon}
              alt="Make a Donation"
            />
            <div className="px-6 py-4 mb-3">
              <div className="font-bold text-xl mb-2">Make a Donation</div>
              <p className="text-gray-700 text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              className=" object-contain w-[40%] ml-24 mt-10 mb-20"
              src={donationIcon}
              alt="Make a request"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Make a request</div>
              <p className="text-gray-700 text-base mb-2 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
