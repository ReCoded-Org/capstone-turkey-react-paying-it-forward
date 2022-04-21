import imagefaq from '../../assets/images/image-faq.png';

function Faq() {
  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <img className="flex items-center" src={imagefaq} alt="faq" />
      </div>
      <div className="accordion accordion-flush px-20">
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-[#D8F4EC] border border-gray-200 mb-10">
          <h2
            className="accordion-header mb-0"
            id="flush-headingOne"
            data-testid="faq-1"
          >
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-[#D8F4EC]
    border-0
    rounded-none
    transition
    focus:outline-none
    p-10
    font-bold
    text-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is Paying It Forward?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5 bg-[#D8F4EC] font-semibold">
              It is an application that provides donations to students, which
              was established to reduce inequality in the education system.
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-[#D8F4EC] border border-gray-200 mb-10">
          <h2 className="accordion-header mb-0" id="flush-headingTwo">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-[#D8F4EC]
    border-0
    rounded-none
    transition
    focus:outline-none
    font-bold
    text-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <div>How can you request an item?</div>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5 bg-[#D8F4EC] font-semibold">
              First of all, you must be a member of the application. After you
              become a member, you must click on the request button on the
              homepage. You can make a request by filling out the form that
              opens.
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-[#D8F4EC] border border-gray-200 mb-10">
          <h2 className="accordion-header mb-0" id="flush-headingThree">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-[#D8F4EC]
    border-0
    rounded-none
    transition
    focus:outline-none
    font-bold
    text-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              How can you donate an item?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5 bg-[#D8F4EC] font-semibold">
              First of all, you must be a member of the application. After you
              become a member, you must click on the donation button on the
              homepage. You can donate by filling out the form.
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-[#D8F4EC] border border-gray-200 mb-10">
          <h2 className="accordion-header mb-0" id="flush-headingFour">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-[#D8F4EC]
    border-0
    rounded-none
    transition
    focus:outline-none
    font-bold
    text-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Do I have to pay any fees to request or donate?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5 bg-[#D8F4EC] font-semibold">
              It is completely free to request or donate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
