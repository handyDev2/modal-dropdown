import React, { useState } from "react";

import Modal from "./Components/Modal/Modal";

import "./App.css";
import Dropdown from "./Components/Dropdown/Dropdown";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="app">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="app_modal">
            <p>This is the text inside Modal</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>
      )}
      <div className="app_nav">
        <div className="app_dropdown">
          <button onClick={() => setShowDropdown(true)}>Dropdown</button>
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </Dropdown>
          )}
        </div>
        <button onClick={() => setShowModal(true)}>Modal</button>
      </div>
    </div>
  );
}

export default App;
