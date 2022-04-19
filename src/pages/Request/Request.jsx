import { useSearchParams } from 'react-router-dom';

import { useRef, useState } from 'react';

import RequestList from './RequestList';
import Filter from './Filter';
import donateImg from '../../assets/donation.svg';

function Request() {
  const [searchParams, setSearchParams] = useSearchParams({ filter: 'All' });
  const [msg, setMsg] = useState('');
  const modelRef = useRef();

  const filterTerm =
    searchParams.get('filter') === null ? 'All' : searchParams.get('filter');

  const filterBy = (p) => {
    setSearchParams({ filter: p });
  };

  const handleRespone = (resp) => {
    setMsg(resp.message);
    if (resp.status === 'success') {
      modelRef.current.style.display = 'block';
      modelRef.current.childNodes[0].style.display = 'block';
      modelRef.current.childNodes[1].style.display = 'none';
    } else {
      modelRef.current.style.display = 'block';
      modelRef.current.childNodes[1].style.display = 'block';
      modelRef.current.childNodes[0].style.display = 'none';
    }
  };

  return (
    <>
      <img src={donateImg} alt="Donate Logo" className="mx-auto mt-8" />
      <h1 className="text-[#212121] font-bold text-4xl my-2">Needed Items</h1>
      <Filter filterBy={filterBy} searchParams={filterTerm} />
      <RequestList searchParams={filterTerm} handleRespone={handleRespone} />
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
              <p className="text-sm text-gray-500">{msg}</p>
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
              <p className="text-sm text-gray-500">{msg}</p>
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
    </>
  );
}

export default Request;