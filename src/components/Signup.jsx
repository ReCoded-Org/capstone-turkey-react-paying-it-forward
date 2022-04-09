// "jsx-a11y/label-has-associated-control": "off";
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line object-curly-newline

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import logoc from '../logoc.png';
import Light from '../Light.png';

export default function Signup() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('').required(''),
        password: Yup.string().required(''),
      })}
      onSubmit={(actions) => {
        setTimeout(() => {
          actions.resetForm();
        }, 1000);
      }}
    >
      <body className="font-roboto justify-center bg-[#FFFF]">
        {/* <!-- Container --> */}
        <div className="container mx-auto ">
          <div className="flex justify-center px-6 my-12">
            {/* <!-- Row --> */}
            <div className="w-full xl:w-3/4 lg:w-11/12 h-full flex">
              {/* <!-- Col --> */}
              <figure className=" bg-white">
                <div className="w-full max-w-md  rounded-lg  border-primaryBorder shadow-default py-10 px-1">
                  <blockquote className="text-2xl font-medium text-center">
                    {}
                  </blockquote>
                  <img
                    className="w-[109px] h-[95px] m-[-30px]"
                    src={logoc}
                    alt="Logo"
                  />
                  <div className="text-primary m-6">
                    <div className="flex items-center mt-3 ">
                      <h1 className="text-left text-6xl font-bold text-primary mx-[40px] mt-16 mb-0">
                        Sign Up
                      </h1>
                    </div>
                    <Form className="flex flex-col p-5 mt-5 space-y-4 text-black bg-white rounded-lg lg:p-10 lg:space-y-6">
                      <Field name="email">
                        {({ field }) => (
                          <div className="relative">
                            <label
                              htmlFor="email"
                              aria-label="Email"
                              className="hidden"
                            >
                              Email
                            </label>
                            <input
                              {...field}
                              className="w-full h-[48px] p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                              placeholder="Email"
                              type="text"
                              name="email"
                              id="email"
                            />
                          </div>
                        )}
                      </Field>
                      <Field name="password">
                        {({ field }) => (
                          <div className="relative">
                            <label
                              htmlFor="password"
                              aria-label="Password"
                              className="hidden"
                            >
                              Password
                            </label>
                            <input
                              {...field}
                              className="w-full h-[48px]  p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                              placeholder="Password"
                              type="password"
                              name="password"
                              id="password"
                            />
                          </div>
                        )}
                      </Field>
                      <Field name="password2">
                        {({ field }) => (
                          <div className="relative">
                            <label
                              htmlFor="password2"
                              aria-label="Password"
                              className="hidden"
                            >
                              Password
                            </label>
                            <input
                              {...field}
                              className="w-full h-[48px]  p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                              placeholder="Retype Password"
                              type="password"
                              name="password2"
                              id="password"
                            />
                          </div>
                        )}
                      </Field>
                      <div className="flex items-center mb-4">
                        <input
                          id="checkbox-3"
                          roboto-describedby="checkbox-3"
                          type="checkbox"
                          className="w-3  ml-2 h-3 text-[#FF7338] bg-gray-100 rounded border-gray-300 focus:ring-[#FF7338] dark:focus:ring-[#FF7338] dark:ring-offset-[#FF7338] focus:ring-2 dark:bg-[#FF7338] dark:border-[#FF7338]"
                        />
                        <p className="text-sm ml-3">
                          I accept
                          <Link
                            to="/#"
                            className="text-black font-bold hover:underline text-sm font-small"
                          >
                            {'    '}
                            Terms & Conditions
                          </Link>
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="bg-[#ff4848] text-md hover:bg-[#FF7338] w-80 h-12 text-white font-bold justify-center border border-blue rounded-2xl focus:outline-none focus:border-[#FF7338]"
                        value="Login"
                      >
                        Sign Up
                      </button>
                      <div className="mt-4 text-center">
                        <p className="text-sm">
                          Already have an account?
                          <Link
                            to="/login"
                            class="text-black hover:underline font-bold"
                          >
                            {'    '}
                            Log In!
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </div>
              </figure>
              <div className="hidden sm:block w-full lg:w-25/25 lg:w-5/12 bg-[#ff7338]" />
              <img
                className="hidden sm:block w-[330px] h-[530px] mx-[-395px] my-[100px]"
                src={Light}
                alt="Light"
              />
            </div>
          </div>
        </div>
      </body>
    </Formik>
  );
}
