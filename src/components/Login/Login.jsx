import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SIGN_UP, HOME } from '../../routes';
import { login } from '../../utils/UserAPI';
import logoc from '../../assets/images/logoc.png';
import Light from '../../assets/images/Light.png';

export default function Login() {
  const dispatch = useDispatch();
  const { isSuccessLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { t } = useTranslation(['common']);
  /* eslint-disable react/jsx-props-no-spreading */

  useEffect(() => {
    if (isSuccessLogin) {
      navigate(HOME);
    }
  }, [isSuccessLogin, navigate]);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username cannot be empty'),
        password: Yup.string().required('Password cannot be empty'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        login(dispatch, values);
        setSubmitting(false);
      }}
    >
      <div className="min-h-screen flex items-center justify-center sm:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:items-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 h-full flex">
            <figure className=" bg-white">
              <div className="w-full max-w-md  rounded-lg  border-primaryBorder shadow-default py-10 px-1 sm:items-center">
                <img
                  className="w-[109px] h-[95px] m-[-25x] mx-[20px]"
                  src={logoc}
                  alt="Logo"
                />
                <div className="text-primary m-6 sm:items-center">
                  <div className="flex items-center mt-3 ">
                    <h1 className="text-left text-6xl font-bold text-primary mx-[40px] mt-16 mb-0">
                      {t('signIn')}
                    </h1>
                  </div>
                  <Form className="flex flex-col p-5 mt-5 space-y-4 text-black bg-white rounded-lg lg:p-10 lg:space-y-6">
                    <Field name="username">
                      {({ field, form }) => (
                        <div className="relative">
                          <label
                            id="username"
                            htmlFor="username"
                            aria-label="Username"
                            className="hidden"
                          >
                            {t('email')}
                          </label>
                          <input
                            {...field}
                            className="w-full h-[48px] p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                            placeholder="User name"
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
                              form.touched.usernamef && form.errors.usernamef
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
                      name="usernamef"
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
                            {t('password')}
                          </label>
                          <input
                            {...field}
                            className="w-full h-[48px]  p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password1"
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
                    <div className="flex items-center mb-4">
                      <input
                        id="checkbox-1"
                        roboto-describedby="checkbox-3"
                        type="checkbox"
                        className="w-3  ml-2 h-3 text-[#38ff9c] bg-gray-100 rounded border-gray-300 focus:ring-[#FF7338] dark:focus:ring-[#FF7338] dark:ring-offset-[#FF7338] focus:ring-2 dark:bg-[#FF7338] dark:border-[#FF7338]"
                      />
                      <label
                        htmlFor="checkbox-3"
                        className="text-sm font-small ml-3 text-gray-900 dark:text-gray-300"
                      >
                        {t('Rememberme')}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#ff4848] text-md hover:bg-[#FF7338] w-80 h-12 text-white font-bold justify-center border border-blue rounded-2xl focus:outline-none focus:border-[#FF7338]"
                      value="Login"
                    >
                      {t('signIn')}
                    </button>
                    <div className="mt-4 text-center">
                      <p className="text-sm">
                        {t('accountyet')}
                        <Link
                          to={SIGN_UP}
                          className="text-black hover:underline font-bold"
                        >
                          {'    '}
                          {t('signUp')}
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </figure>
          </div>
          <div className="bg-[#ff7338] text-green-500 hidden md:block text-lg sm:items-center font-bold text-center p-10 rounded-lg">
            <img className="max-w-sm sm:items-center" src={Light} alt="Light" />
          </div>
        </div>
      </div>
    </Formik>
  );
}
