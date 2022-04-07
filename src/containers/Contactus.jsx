import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactus from '../assets/contactus.svg';

function Contactus() {
  const modelRef = useRef();

  const sendEmail = (values) => {
    console.log(modelRef);
    emailjs
      .send('service_va0wqwg', 'template_l4l91a5', values, 'JrpFs7BlCv1nsgafI')
      .then(
        () => {
          modelRef.current.style.display = 'block';
          modelRef.current.childNodes[0].style.display = 'block';
          modelRef.current.childNodes[1].style.display = 'none';
        },
        () => {
          modelRef.current.style.display = 'block';
          modelRef.current.childNodes[1].style.display = 'block';
          modelRef.current.childNodes[0].style.display = 'none';
        },
      );
  };

  return (
    <section className="text-gray-600 body-font relative">
      <h1 className="text-gray-400 text-5xl p-5 font-medium">CONTACT US.</h1>
      <h2 className="text-3xl font-medium drop-shadow-md px-10">
        Please get in touch and our expert team will answer all your questions.
      </h2>
      <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap flex-col md:flex-row items-center">
        <div className="lg:w-2/3 md:w-1/2 w-full">
          <img src={contactus} alt="Contact Us" />
        </div>
        <div className="rounded lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center p-4">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={(values) => {
              const errors = {};
              if (values.email === '') {
                errors.email = 'Email is required';
              } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address format';
              }
              if (values.name === '') {
                errors.name = 'Name is required';
              }
              if (values.message === '') {
                errors.message = 'Bodys Message is required';
              }
              return errors;
            }}
            onSubmit={(values) => {
              sendEmail(values);
            }}
          >
            <Form>
              <div className="mb-4 text-left">
                <label
                  htmlFor="name"
                  className="uppercase text-sm text-gray-500 font-bold"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </div>
              <div className="mb-4 text-left">
                <label
                  htmlFor="email"
                  className="uppercase text-sm text-gray-500 font-bold"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </div>
              <div className="mb-4 text-left">
                <label
                  htmlFor="message"
                  className="uppercase text-sm text-gray-500 font-bold"
                >
                  Message
                </label>
                <Field
                  type="text"
                  name="message"
                  id="message"
                  as="textarea"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </div>
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div
        className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        ref={modelRef}
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Successful!
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Your message has been sent successfully.
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                type="button"
                onClick={() => {
                  modelRef.current.style.display = 'none';
                }}
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Error!
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Your message has not been sent successfully.
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                type="button"
                onClick={() => {
                  modelRef.current.style.display = 'none';
                }}
                className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const modal = document.getElementById('my-modal');
// const btn = document.getElementById('open-btn');
// const button = document.getElementById('ok-btn');
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// button.onclick = function () {
//   modal.style.display = "none";
// }
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

export default Contactus;
