import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import imagefaq from '../images/image-faq.png';

function Faq() {
  return (
    <div className="container mx-auto p-16">
      <div className="flex items-center justify-center p-4">
        <img className="flex items-center" src={imagefaq} alt="faq" />
      </div>
      <div className="flex items-center justify-center p-4">
        <h1 className="font-bold text-2xl">Frequently Asked Questions</h1>
      </div>
      <div className="p-10 bg-[#D8F4EC] text-gray-700 flex flex-col  items-center justify-center">
        <div className="relative w-[700px] overflow-hidden">
          <input
            type="checkbox"
            className="
          peer 
          absolute top-0 inset-x-0 
          w-full h-12 
          opacity-0 z-10 cursor-pointer"
          />
          <div
            className="
        bg-blue-500 
        h-12 w-full pl-5 
        flex items-center"
          >
            <h1 className="text-lg font-semibold text-white">
              What is Paying It Forward?
            </h1>
          </div>
          <div
            className="
        absolute top-3 right-3 
        text-white transition-transform duration-500 
        rotate-0 peer-checked:rotate-180
        "
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div
            className="
        bg-[#D8F4EC]
        overflow-hidden 
        transition-all duration-500 
        max-h-0 peer-checked:max-h-40"
          >
            <div className="p-4">
              <p>
                It is an application that provides donations to students, which
                was established to reduce inequality in the education system.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="relative w-[700px] overflow-hidden">
          <input
            type="checkbox"
            className="
          peer 
          absolute top-0 inset-x-0 
          w-full h-12 
          opacity-0 z-10 cursor-pointer"
          />
          <div
            className="
        bg-blue-500 
        h-12 w-full pl-5 
        flex items-center"
          >
            <h1 className="text-lg font-semibold text-white">
              How can you request an item?
            </h1>
          </div>
          <div
            className="
        absolute top-3 right-3 
        text-white transition-transform duration-500 
        rotate-0 peer-checked:rotate-180
        "
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div
            className="
        bg-[#D8F4EC] 
        overflow-hidden 
        transition-all duration-500 
        max-h-0 peer-checked:max-h-40"
          >
            <div className="p-4">
              <p>
                First of all, you must be a member of the application. After you
                become a member, you must click on the request button on the
                homepage. You can make a request by filling out the form that
                opens.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="relative w-[700px] overflow-hidden">
          <input
            type="checkbox"
            className="
          peer 
          absolute top-0 inset-x-0 
          w-full h-12 
          opacity-0 z-10 cursor-pointer"
          />
          <div
            className="
        bg-blue-500 
        h-12 w-full pl-5 
        flex items-center"
          >
            <h1 className="text-lg font-semibold text-white">
              How can you donate an item?
            </h1>
          </div>
          <div
            className="
        absolute top-3 right-3 
        text-white transition-transform duration-500 
        rotate-0 peer-checked:rotate-180
        "
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div
            className="
        bg-[#D8F4EC] 
        overflow-hidden 
        transition-all duration-500 
        max-h-0 peer-checked:max-h-40"
          >
            <div className="p-4">
              <p>
                First of all, you must be a member of the application. After you
                become a member, you must click on the donation button on the
                homepage. You can donate by filling out the form.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="relative w-[700px] overflow-hidden">
          <input
            type="checkbox"
            className="
          peer 
          absolute top-0 inset-x-0 
          w-full h-12 
          opacity-0 z-10 cursor-pointer"
          />
          <div
            className="
        bg-blue-500 
        h-12 w-full pl-5 
        flex items-center"
          >
            <h1 className="text-lg font-semibold text-white">
              Do I have to pay any fees to request or donate?
            </h1>
          </div>
          <div
            className="
        absolute top-3 right-3 
        text-white transition-transform duration-500 
        rotate-0 peer-checked:rotate-180
        "
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div
            className="
        bg-[#D8F4EC] 
        overflow-hidden 
        transition-all duration-500 
        max-h-0 peer-checked:max-h-40"
          >
            <div className="p-4">
              <p>It is completely free to request or donate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
