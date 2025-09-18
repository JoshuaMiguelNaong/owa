'use client';

import React, { useState } from 'react';

const customerTypes = [
  { name: 'All Customers' },
  { name: 'Active Customers' },
  { name: 'CRM Customers' },
  { name: 'Duplicate Customers' },
  { name: 'Archived Customers' },
];

const CustomerListDropdown = () => {
  const [selected, setSelected] = useState(customerTypes[1]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (type: (typeof customerTypes)[0]) => {
    setSelected(type);
    setIsOpen(false);
  };

  return (
    <>
      <div className="position-relative" style={{ zIndex: 10 }}>
        <div
          className="d-flex align-items-center"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <span className="fw-bold fs-6" style={{ color: '#212529' }}>{selected.name}</span>
          <span className="ms-1 text-black" style={{ fontSize: '1.1rem', color: '#0d6efd' }}>
            &#9662;
          </span>
        </div>

        {isOpen && (
          <ul
            className="dropdown-menu show mt-2"
            style={{
              display: 'block',
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '200px',
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }}
          >
            {customerTypes.map((type) => (
              <li key={type.name}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(type);
                  }}
                >
                  {type.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomerListDropdown;
