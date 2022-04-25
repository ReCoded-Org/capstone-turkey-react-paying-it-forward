import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import iconProfile from '../../assets/images/profile.svg';
import {
  HOME,
  ABOUT_US,
  DONATION,
  HOW_IT_WORKS,
  LOG_OUT,
  REQUEST,
  SIGN_UP,
} from '../../routes';

function Navbar({ isLogin }) {
  const [lang, setLang] = useState('en');

  const menu = useRef();

  return (
    <nav className="bg-primary">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between lg:flex-row flex-col p-4">
          <div className="absolute inset-y-0 right-0 flex items-center mdd:hidden">
            <button
              type="button"
              id="toggle-navbar"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => menu.current.classList.toggle('hidden')}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z"
                  fill="white"
                />
                <path
                  d="M12.5 25C12.5 28.4518 9.70178 31.25 6.25 31.25C2.79822 31.25 0 28.4518 0 25C0 21.5482 2.79822 18.75 6.25 18.75C9.70178 18.75 12.5 21.5482 12.5 25Z"
                  fill="white"
                />
                <path
                  d="M6.25 50C9.70178 50 12.5 47.2018 12.5 43.75C12.5 40.2982 9.70178 37.5 6.25 37.5C2.79822 37.5 0 40.2982 0 43.75C0 47.2018 2.79822 50 6.25 50Z"
                  fill="white"
                />
                <path
                  d="M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z"
                  fill="white"
                />
                <path
                  d="M25 31.25C28.4518 31.25 31.25 28.4518 31.25 25C31.25 21.5482 28.4518 18.75 25 18.75C21.5482 18.75 18.75 21.5482 18.75 25C18.75 28.4518 21.5482 31.25 25 31.25Z"
                  fill="white"
                />
                <path
                  d="M31.25 43.75C31.25 47.2018 28.4518 50 25 50C21.5482 50 18.75 47.2018 18.75 43.75C18.75 40.2982 21.5482 37.5 25 37.5C28.4518 37.5 31.25 40.2982 31.25 43.75Z"
                  fill="white"
                />
                <path
                  d="M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z"
                  fill="white"
                />
                <path
                  d="M50 25C50 28.4518 47.2018 31.25 43.75 31.25C40.2982 31.25 37.5 28.4518 37.5 25C37.5 21.5482 40.2982 18.75 43.75 18.75C47.2018 18.75 50 21.5482 50 25Z"
                  fill="white"
                />
                <path
                  d="M43.75 50C47.2018 50 50 47.2018 50 43.75C50 40.2982 47.2018 37.5 43.75 37.5C40.2982 37.5 37.5 40.2982 37.5 43.75C37.5 47.2018 40.2982 50 43.75 50Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={HOME}>
                <h5 className="block lg:hidden text-4xl font-bold text-center text-white">
                  PayingIt
                </h5>
                <h5 className="hidden lg:block text-4xl font-bold text-center text-white">
                  PayingIt
                </h5>
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto lg:ml-6 sm:pr-0">
            <div className="hidden mdd:block lg:ml-6">
              <div className="flex space-x-2 items-center">
                <Link
                  to={HOME}
                  className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                {isLogin && (
                  <>
                    <div className="dropdown inline-block relative">
                      <button
                        type="button"
                        className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium py-2 rounded inline-flex items-center"
                      >
                        <span className="mr-1">Donation For</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute z-40 hidden text-white pt-1 flex flex-row">
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={DONATION}
                          >
                            Books
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={DONATION}
                          >
                            Stationery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={DONATION}
                          >
                            Furniture
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={DONATION}
                          >
                            School Books
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={DONATION}
                          >
                            Novels
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={DONATION}
                          >
                            Exam Books
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                      <button
                        type="button"
                        className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium py-2 rounded inline-flex items-center"
                      >
                        <span className="mr-1">Request For</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute z-40 hidden text-white pt-1 flex flex-row">
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={REQUEST}
                          >
                            Books
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={REQUEST}
                          >
                            Stationery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={REQUEST}
                          >
                            Furniture
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={REQUEST}
                          >
                            School Books
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={REQUEST}
                          >
                            Novels
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                            to={REQUEST}
                          >
                            Exam Books
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                <Link
                  to={HOW_IT_WORKS}
                  className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  How it works?
                </Link>
                <Link
                  to={ABOUT_US}
                  className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                {!isLogin && (
                  <Link
                    to={SIGN_UP}
                    className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign up
                  </Link>
                )}

                {isLogin && (
                  <div className="dropdown inline-block relative">
                    <button
                      type="button"
                      className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium rounded inline-flex items-center"
                    >
                      <img src={iconProfile} alt="user-icon" />
                    </button>
                    <ul className="dropdown-menu absolute z-40 hidden text-white flex flex-row">
                      <li>
                        <Link
                          className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap"
                          to={LOG_OUT}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => {
                    if (lang === 'en') {
                      setLang('tr');
                    } else {
                      setLang('en');
                    }
                  }}
                >
                  <span
                    className={
                      lang === 'en'
                        ? 'font-bold bg-green-300 p-1 rounded'
                        : 'cursor-pointer'
                    }
                  >
                    EN
                  </span>{' '}
                  |{' '}
                  <span
                    className={
                      lang === 'tr'
                        ? 'font-bold bg-green-300 p-1 rounded'
                        : 'cursor-pointer'
                    }
                  >
                    TR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden" id="mobile-menu" ref={menu}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to={HOME}
            className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          {isLogin && (
            <>
              <Link
                to={HOME}
                className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Donation For
              </Link>
              <Link
                to={HOME}
                className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Request For
              </Link>
            </>
          )}
          <Link
            to={HOW_IT_WORKS}
            className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            How it works?
          </Link>
          <Link
            to={ABOUT_US}
            className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
          {!isLogin && (
            <Link
              to={SIGN_UP}
              className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign up
            </Link>
          )}
          {isLogin && (
            <Link
              to={LOG_OUT}
              className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default Navbar;
