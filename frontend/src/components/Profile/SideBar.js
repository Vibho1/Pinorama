import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import Modal from "./Modal";
import Upload from "../../pages/Upload";

export default function SideBar({ loggedUser, setCount }) {
  const [showModal, setShowModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-screen">
      <div className="w-96 text-white p-6" >
        <img
          className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
          src={loggedUser.dp}
          alt="Profile"
        />
        <h1 className="text-xl font-bold text-center mb-2">{loggedUser.username}</h1>
        <p className="text-sm text-center mb-4">{loggedUser.fullname}</p>
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex justify-center items-center mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <FaPlusCircle className="mr-2" />
            New Post
          </button>
          <button
            onClick={handleToggleModal}
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            Settings
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          loggedUser={loggedUser}
          setCount={setCount}
          handleCloseModal={handleCloseModal}
          handleSubmitForm={handleSubmitForm}
        />
      )}
      {showUploadModal && (
        <Upload
          setCount={setCount}
          setShowUploadModal={setShowUploadModal}
          loggedUser={loggedUser}
        />
      )}
    </div>
  );
}
