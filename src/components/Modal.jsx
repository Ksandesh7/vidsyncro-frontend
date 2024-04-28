import React from "react";

function Modal({ closeModalProp }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative bg-white rounded-lg w-96 p-6">
        <button
          className="absolute top-0 right-0 p-2"
          onClick={() => {
            closeModalProp(false);
          }}
        >
          X
        </button>
        <div className="title mb-4">
          <h1 className="text-lg font-bold text-black">Project Name</h1>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
          />
        </div>
        <div className="body mb-4">
          <h1 className="text-lg font-bold text-black">Project Description</h1>
          <textarea
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
          />
        </div>
        <div className="footer flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={() => {
              closeModalProp(false);
            }}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
