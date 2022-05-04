import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../utils/UserAPI';
import { LOG_IN, HOME } from '../../routes';

import logoc from '../../assets/images/logoc.png';
import Light from '../../assets/images/Light.png';

export default function Signup() {
  const dispatch = useDispatch();
  const { isSuccessLogin, isSuccessRegister, currentUser } = useSelector(
    (state) => state.user,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessLogin) {
      navigate(HOME);
    } else if (isSuccessRegister) {
      navigate(LOG_IN);
    }
  }, [isSuccessLogin, isSuccessRegister, currentUser, navigate]);

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: 'New York US',
        password: '',
        passwordConfirm: '',
        acceptTerms: false,
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username cannot be empty'),
        email: Yup.string()
          .email('Looks like this is not an email')
          .required('Email cannot be empty'),
        firstName: Yup.string().required('First name cannot be empty'),
        lastName: Yup.string().required('Last name cannot be empty'),
        password: Yup.string().required('Password cannot be empty'),
        passwordConfirm: Yup.string()
          .oneOf(
            [Yup.ref('password'), null],
            'The confirm password must be same as password',
          )
          .required('Confirm password cannot be empty'),
        acceptTerms: Yup.bool().oneOf(
          [true],
          'Accept Terms & Conditions is required',
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        register(dispatch, values);
        setSubmitting(false);
      }}
    >
      <div className="min-h-screen flex items-center justify-center md:items-center sm:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:items-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 h-full flex sm:items-center">
            <figure className=" bg-white">
              <div className="w-full max-w-md sm:items-center rounded-lg  border-primaryBorder shadow-default py-10 px-1">
                <blockquote className="text-2xl font-medium text-center">
                  {}
                </blockquote>
                <img
                  className="w-[109px] h-[95px] m-[-25px] mx-[20px]"
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
                    {/*  */}
                    <div className="flex">
                      <div>
                        <Field name="firstName">
                          {({ field, form }) => (
                            <div className="relative">
                              <label
                                htmlFor="firstName"
                                aria-label="firstName"
                                className="hidden"
                              >
                                First Name
                              </label>
                              <input
                                {...field}
                                className="w-full h-[48px] p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                id="firstName"
                                style={
                                  form.touched.firstName &&
                                  form.errors.firstName
                                    ? { border: '2px solid var(--primary-red)' }
                                    : null
                                }
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="absolute w-6 text-red-400 right-8 top-2.5"
                                style={
                                  form.touched.firstName &&
                                  form.errors.firstName
                                    ? { display: 'block' }
                                    : { display: 'none' }
                                }
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </Field>
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-xs italic text-left text-red-700"
                          style={{ marginTop: '0.5rem' }}
                        />
                      </div>
                      <div>
                        <Field name="lastName">
                          {({ field, form }) => (
                            <div className="relative">
                              <label
                                htmlFor="lastName"
                                aria-label="lastName"
                                className="hidden"
                              >
                                Last Name
                              </label>
                              <input
                                {...field}
                                className="w-full h-[48px] p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                id="lastName"
                                style={
                                  form.touched.lastName && form.errors.lastName
                                    ? { border: '2px solid var(--primary-red)' }
                                    : null
                                }
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="absolute w-6 text-red-400 right-8 top-2.5"
                                style={
                                  form.touched.lastName && form.errors.lastName
                                    ? { display: 'block' }
                                    : { display: 'none' }
                                }
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </Field>
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-xs italic text-left text-red-700"
                          style={{ marginTop: '0.5rem' }}
                        />
                      </div>
                    </div>
                    <Field name="username">
                      {({ field, form }) => (
                        <div className="relative">
                          <label
                            htmlFor="username"
                            aria-label="username"
                            className="hidden"
                          >
                            Username
                          </label>
                          <input
                            {...field}
                            className="w-full h-[48px] p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                            placeholder="Username"
                            type="text"
                            name="username"
                            id="username"
                            style={
                              form.touched.username && form.errors.username
                                ? { border: '2px solid var(--primary-red)' }
                                : null
                            }
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="absolute w-6 text-red-400 right-8 top-2.5"
                            style={
                              form.touched.username && form.errors.username
                                ? { display: 'block' }
                                : { display: 'none' }
                            }
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-xs italic text-left text-red-700"
                      style={{ marginTop: '0.5rem' }}
                    />
                    {/*  */}

                    <Field name="email">
                      {({ field, form }) => (
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
                            style={
                              form.touched.email && form.errors.email
                                ? { border: '2px solid var(--primary-red)' }
                                : null
                            }
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="absolute w-6 text-red-400 right-8 top-2.5"
                            style={
                              form.touched.email && form.errors.email
                                ? { display: 'block' }
                                : { display: 'none' }
                            }
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-xs italic text-left text-red-700"
                      style={{ marginTop: '0.5rem' }}
                    />
                    <Field name="password">
                      {({ field, form }) => (
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
                            style={
                              form.touched.password && form.errors.password
                                ? { border: '2px solid var(--primary-red)' }
                                : null
                            }
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="absolute w-6 text-red-400 right-8 top-2.5"
                            style={
                              form.touched.password && form.errors.password
                                ? { display: 'block' }
                                : { display: 'none' }
                            }
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-xs italic text-left text-red-700"
                      style={{ marginTop: '0.5rem' }}
                    />
                    <Field name="passwordConfirm">
                      {({ field, form }) => (
                        <div className="relative">
                          <label
                            htmlFor="passwordConfirm"
                            aria-label="passwordConfirm"
                            className="hidden"
                          >
                            Confirm Password
                          </label>
                          <input
                            {...field}
                            className="w-full h-[48px]  p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                            placeholder="Retype Password"
                            type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            style={
                              form.touched.passwordConfirm &&
                              form.errors.passwordConfirm
                                ? { border: '2px solid var(--primary-red)' }
                                : null
                            }
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="absolute w-6 text-red-400 right-8 top-2.5"
                            style={
                              form.touched.passwordConfirm &&
                              form.errors.passwordConfirm
                                ? { display: 'block' }
                                : { display: 'none' }
                            }
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="passwordConfirm"
                      component="div"
                      className="text-xs italic text-left text-red-700"
                      style={{ marginTop: '0.5rem' }}
                    />
                    <div className="flex items-center mb-4">
                      <Field
                        type="checkbox"
                        name="acceptTerms"
                        className="w-3  ml-2 h-3 text-[#FF7338] bg-gray-100 rounded border-gray-300 focus:ring-[#FF7338] dark:focus:ring-[#FF7338] dark:ring-offset-[#FF7338] focus:ring-2 dark:bg-[#FF7338] dark:border-[#FF7338]"
                      />
                      <p className="text-sm ml-3">
                        I accept
                        <Link
                          to={LOG_IN}
                          className="text-black font-bold hover:underline text-sm font-small"
                        >
                          {'    '}
                          Terms & Conditions
                        </Link>
                      </p>
                    </div>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-xs italic text-left text-red-700"
                    />
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
                          to={LOG_IN}
                          className="text-black hover:underline font-bold"
                        >
                          {'    '}
                          Sign In!
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </figure>
          </div>
          <div className="bg-[#ff7338] text-green-500 hidden md:block text-lg font-bold text-center p-10 rounded-lg">
            <img className="max-w-sm" src={Light} alt="Light" />
          </div>
        </div>
      </div>
    </Formik>
  );
}
