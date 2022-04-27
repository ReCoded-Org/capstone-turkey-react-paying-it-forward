import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function ItemCard({ data, onResponse }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function openModal(id) {
    fetch(`https://payingitforward.re-coded.com/api/items/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setLoading(false);
        console.log(response);
      });
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const onRequestDonatedItem = () => {
    fetch(`${process.env.REACT_APP_API_URI}/items/donate`, {
      headers: {
        accept: 'application/json',
      },
      body: {
        donateItemId: data._id,
        borrowerId: data.owner,
      },
      method: 'PUT',
    })
      .then((resp) => {
        if (!resp.ok) return Promise.reject(resp);
        return resp.json();
      })
      .then(() => {
        onResponse({
          status: 'success',
          message: 'Thank you for helping people',
        });
      })
      .catch((error) => {
        error.json().then((e) => onResponse({ status: 'failed', ...e }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex w-[300px] flex-col space-y-3 rounded-md bg-[#ECF1F8] p-4 justify-center mb-3">
      <Link to={`donated/${data._id}`}>
        <input
          type="image"
          className="h-[354px] cursor-pointer"
          alt={data.name}
          src="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
          onClick={() => {
            openModal(data._id);
          }}
        />
      </Link>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#006EFF"
            />
            <mask
              id="mask0_151_5479"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_151_5479)">
              <rect width="24" height="24" fill="url(#pattern0)" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use transform="scale(0.005)" />
              </pattern>
              <image
                id="image0_151_5479"
                width="200"
                height="200"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <div className="flex flex-col ml-2">
            <span className="text-xs text-left">
              {data.owner
                ? `${data.owner.firstName} ${data.owner.lastName}`
                : 'Unknown'}
            </span>
            <span className="text-xs">
              <svg
                width="83"
                height="12"
                viewBox="0 0 83 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6082 12C9.43133 12 9.27411 11.9437 9.13654 11.8687L6.3459 10.125C6.3066 10.1063 6.28695 10.1063 6.24764 10.125L3.457 11.8687C3.29978 11.9437 3.14256 12 2.96569 12C2.69056 12 2.43508 11.8875 2.27786 11.6812C2.10099 11.475 2.04203 11.2125 2.12064 10.9688L2.90674 7.6875C2.90674 7.65 2.90674 7.6125 2.86743 7.59375L0.292968 5.38125C0.0374866 5.15625 -0.0607753 4.8 0.0374866 4.48125C0.155401 4.1625 0.450187 3.9375 0.80393 3.91875L4.12518 3.675C4.16449 3.675 4.18414 3.65625 4.20379 3.61875L5.44189 0.54375C5.59911 0.20625 5.91355 0 6.28695 0C6.66034 0 6.97478 0.20625 7.11235 0.54375L8.35045 3.61875C8.3701 3.65625 8.38975 3.675 8.42906 3.675L11.7503 3.91875C12.1041 3.9375 12.3988 4.1625 12.5168 4.48125C12.6347 4.8 12.5364 5.15625 12.2613 5.38125L9.68681 7.59375C9.66716 7.6125 9.64751 7.65 9.64751 7.6875L10.4533 10.9688C10.5122 11.2125 10.4533 11.475 10.296 11.6812C10.1388 11.8875 9.86368 12 9.6082 12Z"
                  fill="#FF9138"
                />
                <path
                  d="M26.7451 11.8687C26.8827 11.9437 27.0399 12 27.2167 12C27.4722 12 27.7474 11.8875 27.9046 11.6812C28.0618 11.475 28.1208 11.2125 28.0618 10.9688L27.2561 7.6875C27.2561 7.65 27.2757 7.6125 27.2954 7.59375L29.8698 5.38125C30.145 5.15625 30.2432 4.8 30.1253 4.48125C30.0074 4.1625 29.7126 3.9375 29.3589 3.91875L26.0376 3.675C25.9983 3.675 25.9786 3.65625 25.959 3.61875L24.7209 0.54375C24.5833 0.20625 24.2689 0 23.8955 0C23.5221 0 23.2077 0.20625 23.0504 0.54375L21.8123 3.61875C21.7927 3.65625 21.773 3.675 21.7337 3.675L18.4125 3.91875C18.0587 3.9375 17.7639 4.1625 17.646 4.48125C17.5478 4.8 17.646 5.15625 17.9015 5.38125L20.476 7.59375C20.5153 7.6125 20.5153 7.65 20.5153 7.6875L19.7292 10.9688C19.6506 11.2125 19.7095 11.475 19.8864 11.6812C20.0436 11.8875 20.2991 12 20.5742 12C20.7511 12 20.9083 11.9437 21.0655 11.8687L23.8562 10.125C23.8955 10.1063 23.9151 10.1063 23.9544 10.125L26.7451 11.8687Z"
                  fill="#FF9138"
                />
                <path
                  d="M44.8253 12C44.6484 12 44.4912 11.9437 44.3536 11.8687L41.563 10.125C41.5237 10.1063 41.504 10.1063 41.4647 10.125L38.6741 11.8687C38.5169 11.9437 38.3597 12 38.1828 12C37.9076 12 37.6522 11.8875 37.4949 11.6812C37.3181 11.475 37.2591 11.2125 37.3377 10.9688L38.1238 7.6875C38.1238 7.65 38.1238 7.6125 38.0845 7.59375L35.5101 5.38125C35.2546 5.15625 35.1563 4.8 35.2546 4.48125C35.3725 4.1625 35.6673 3.9375 36.021 3.91875L39.3423 3.675C39.3816 3.675 39.4012 3.65625 39.4209 3.61875L40.659 0.54375C40.8162 0.20625 41.1306 0 41.504 0C41.8774 0 42.1919 0.20625 42.3294 0.54375L43.5675 3.61875C43.5872 3.65625 43.6068 3.675 43.6461 3.675L46.9674 3.91875C47.3211 3.9375 47.6159 4.1625 47.7338 4.48125C47.8518 4.8 47.7535 5.15625 47.4784 5.38125L44.9039 7.59375C44.8842 7.6125 44.8646 7.65 44.8646 7.6875L45.6703 10.9688C45.7293 11.2125 45.6703 11.475 45.5131 11.6812C45.3559 11.8875 45.0808 12 44.8253 12Z"
                  fill="#FF9138"
                />
                <path
                  d="M61.9622 11.8687C62.0997 11.9437 62.257 12 62.4338 12C62.6893 12 62.9644 11.8875 63.1217 11.6812C63.2789 11.475 63.3378 11.2125 63.2789 10.9688L62.4731 7.6875C62.4731 7.65 62.4928 7.6125 62.5124 7.59375L65.0869 5.38125C65.362 5.15625 65.4603 4.8 65.3424 4.48125C65.2245 4.1625 64.9297 3.9375 64.5759 3.91875L61.2547 3.675C61.2154 3.675 61.1957 3.65625 61.1761 3.61875L59.938 0.54375C59.8004 0.20625 59.486 0 59.1126 0C58.7392 0 58.4247 0.20625 58.2675 0.54375L57.0294 3.61875C57.0098 3.65625 56.9901 3.675 56.9508 3.675L53.6296 3.91875C53.2758 3.9375 52.981 4.1625 52.8631 4.48125C52.7649 4.8 52.8631 5.15625 53.1186 5.38125L55.6931 7.59375C55.7324 7.6125 55.7324 7.65 55.7324 7.6875L54.9463 10.9688C54.8677 11.2125 54.9266 11.475 55.1035 11.6812C55.2607 11.8875 55.5162 12 55.7913 12C55.9682 12 56.1254 11.9437 56.2826 11.8687L59.0733 10.125C59.1126 10.1063 59.1322 10.1063 59.1715 10.125L61.9622 11.8687Z"
                  fill="#FF9138"
                />
                <path
                  d="M79.5707 11.8687C79.7083 11.9437 79.8655 12 80.0424 12C80.2979 12 80.573 11.8875 80.7302 11.6812C80.8874 11.475 80.9464 11.2125 80.8874 10.9688L80.0817 7.6875C80.0817 7.65 80.1013 7.6125 80.121 7.59375L82.6955 5.38125C82.9706 5.15625 83.0688 4.8 82.9509 4.48125C82.833 4.1625 82.5382 3.9375 82.1845 3.91875L78.8632 3.675C78.8239 3.675 78.8043 3.65625 78.7846 3.61875L77.5465 0.54375C77.409 0.20625 77.0945 0 76.7211 0C76.3477 0 76.0333 0.20625 75.8761 0.54375L74.638 3.61875C74.6183 3.65625 74.5987 3.675 74.5594 3.675L71.2381 3.91875C70.8844 3.9375 70.5896 4.1625 70.4717 4.48125C70.3734 4.8 70.4717 5.15625 70.7271 5.38125L73.3016 7.59375C73.3409 7.6125 73.3409 7.65 73.3409 7.6875L72.5548 10.9688C72.4762 11.2125 72.5352 11.475 72.712 11.6812C72.8693 11.8875 73.1247 12 73.3999 12C73.5767 12 73.734 11.9437 73.8912 11.8687L76.6818 10.125C76.7211 10.1063 76.7408 10.1063 76.7801 10.125L79.5707 11.8687Z"
                  fill="#FF9138"
                />
              </svg>
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-medium text-[#3F3B3B]">{data.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded bg-[#DEC4C4] py-1 px-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 7.44949C24 7.03867 23.8555 6.68317 23.5664 6.38296C23.2773 6.08275 22.9219 5.93265 22.5 5.93265H19.9453C20.2734 5.61664 20.5352 5.24138 20.7305 4.80687C20.9258 4.37235 21.0234 3.8865 21.0234 3.34928C21.0234 2.68566 20.8125 2.06155 20.3906 1.47693C19.9687 0.892311 19.2344 0.600006 18.1875 0.600006C17.5 0.600006 16.8438 0.765909 16.2188 1.09772C15.5937 1.42953 15.0156 1.83244 14.4844 2.30645C13.9531 2.78047 13.4805 3.28212 13.0664 3.81144C12.6523 4.34076 12.3125 4.81872 12.0469 5.24533C11.7812 4.81872 11.4375 4.34076 11.0156 3.81144C10.5937 3.28212 10.1133 2.78047 9.57422 2.30645C9.03515 1.83244 8.44922 1.42953 7.81641 1.09772C7.18359 0.765909 6.52344 0.600006 5.83594 0.600006C4.78906 0.600006 4.05469 0.892311 3.63281 1.47693C3.21094 2.06155 3 2.68566 3 3.34928C3 3.8865 3.09766 4.37235 3.29297 4.80687C3.48828 5.24138 3.75781 5.62454 4.10156 5.95635H1.5C1.07812 5.95635 0.722658 6.1025 0.433594 6.39481C0.14453 6.68712 0 7.04657 0 7.47319V12H1.52344V21.8832C1.52344 22.294 1.66797 22.6495 1.95703 22.9497C2.2461 23.2499 2.60156 23.4 3.02344 23.4H21C21.4219 23.4 21.7773 23.2499 22.0664 22.9497C22.3555 22.6495 22.5 22.294 22.5 21.8832V12H24V7.44949ZM18.1875 2.11685C18.6563 2.11685 18.9961 2.21955 19.207 2.42495C19.418 2.63036 19.5234 2.93847 19.5234 3.34928C19.5234 4.1867 19.1406 4.82662 18.375 5.26903C17.6094 5.71144 16.7891 5.93265 15.9141 5.93265H13.3828C13.9141 5.14262 14.6133 4.30916 15.4805 3.43223C16.3477 2.5553 17.25 2.11685 18.1875 2.11685ZM5.83594 2.11685C6.77344 2.11685 7.6875 2.5553 8.57812 3.43223C9.46875 4.30916 10.1797 5.14262 10.7109 5.93265H8.17969C7.30468 5.93265 6.47266 5.70749 5.68359 5.25718C4.89453 4.80686 4.5 4.163 4.5 3.32558C4.5 2.91476 4.60547 2.61061 4.81641 2.4131C5.02734 2.2156 5.36719 2.11685 5.83594 2.11685ZM22.5 10.4832H12.75V7.44949H22.5V10.4832ZM1.5 7.44949H11.25V10.4832H1.5V7.44949ZM3.02344 12H11.25V21.8832H3.02344V12ZM21 21.8832H12.75V12H21V21.8832Z"
                fill="#3F3B3B"
              />
            </svg>
            <span className="ml-5 rounded-full bg-[#8D3030] px-2 py-1 text-xs text-white">
              {data.count}
            </span>
          </div>
          <button
            className="inline-flex items-center rounded-full bg-[#FF7338] py-2 px-6 text-sm text-white"
            type="button"
            onClick={onRequestDonatedItem}
          >
            {setLoading && (
              <svg
                className="animate-spin mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            Make Request
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button type="button" onClick={closeModal}>
            x
          </button>
        </div>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div>
            <div className="object-cover flex justify-center mt-2">
              <img
                alt={items.name}
                src={items.photo}
                style={{ width: '300px' }}
              />
            </div>
            <div className="flex justify-center mt-1">{items.name}</div>
            <div className="flex justify-center mt-1">{items.description}</div>
            <div className="flex justify-center mt-1">
              {items.owner.firstName}
            </div>
            <div className="flex justify-center mt-1">
              {items.owner.lastName}
            </div>
            <div className="flex justify-center mt-1" />
          </div>
        )}
      </Modal>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    count: PropTypes.number.isRequired,
  }).isRequired,
  onResponse: PropTypes.func.isRequired,
};

export default ItemCard;
