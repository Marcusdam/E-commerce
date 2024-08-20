import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");
  onclose = () => {
    if (newAddress.trim() === "") {
      alert("Address cannot be empty");
      return;
    }
    setAddress(newAddress);
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="bg-black p-8">
      <input
        type="text"
        placeholder="Enter you new address"
        onChange={(e) => setNewAddress(e.target.value)}
        className="w-full p-2 rounded-"
      />
      <div className="flex justify-end pt-4">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onclose}
        >
          Save Change
        </button>
      </div>
    </div>
    </>
  );
};

export default ChangeAddress;
