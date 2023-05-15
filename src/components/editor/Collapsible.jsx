import React, { useState } from 'react';
import './EditorPanel.css';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Collapsible">
      <button className="Collapsible__toggle" onClick={handleToggle}>
        <span className={`Collapsible__arrow ${isOpen ? 'open' : ''}`}>→</span>
        {title}
      </button>
      {isOpen && <div className="Collapsible__content">{children}</div>}
    </div>
  );
};

export default Collapsible;
