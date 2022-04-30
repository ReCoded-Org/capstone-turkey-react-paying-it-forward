import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

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

function RequestModalItem({ id, setCompIsShown, onDonatedItem }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  function openModal(itemId) {
    fetch(`https://payingitforward.re-coded.com/api/requests/${itemId}`)
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        fetch(
          `https://payingitforward.re-coded.com/api/users/${response.owner}`,
        )
          .then((res) => res.json())
          .then((res) => {
            setUsers(res);
            setLoading(false);
          });
      });

    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setCompIsShown(false);
  }

  useEffect(() => {
    openModal(id);
  }, [id]);
  return (
    <div>
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
          <div className="flex">
            <div className="object-cover flex justify-center mt-2">
              <img
                alt={items.name}
                src={items.photo}
                style={{ width: '300px' }}
              />
            </div>
            <div className="ml-10 flex flex-col justify-center items-center">
              <div className="flex justify-center mt-1 font-bold">
                Item Name
              </div>
              <div className="flex justify-center mt-1">{items.name}</div>
              <div className="flex justify-center mt-1 font-bold">
                Description
              </div>
              <div className="flex justify-center mt-1">
                {items.description}
              </div>
              <div className="flex justify-center mt-1 font-bold">
                Item Owner Information
              </div>
              <div className="flex justify-center mt-1">
                {users.firstName} {users.lastName}
              </div>
              <div className="flex justify-center mt-1">{users.email}</div>
              <div className="flex justify-center mt-1">{users.address}</div>
              <button
                className="flex items-center justify-between rounded-full bg-[#FF7338] py-2 px-6 text-2sm text-white mt-6"
                type="button"
                onClick={() => {
                  onDonatedItem();
                  closeModal();
                }}
              >
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
                    fill="#fff"
                  />
                </svg>
                <span className="font-bold text-4sm ml-2">Donate</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

RequestModalItem.propTypes = {
  id: PropTypes.string.isRequired,
  setCompIsShown: PropTypes.bool.isRequired,
  onDonatedItem: PropTypes.func.isRequired,
};

export default RequestModalItem;
