import { Formik, Form, Field, ErrorMessage } from 'formik';
import contactus from '../assets/contactus.svg';

function Contactus() {
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
              // Todo
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
    </section>
  );
}

export default Contactus;
