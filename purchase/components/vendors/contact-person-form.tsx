"use client";

import React, { useState } from "react";

const ContactPersonsForm = () => {
  const [contactPersons, setContactPersons] = useState([
    {
      salutation: "",
      firstName: "",
      lastName: "",
      email: "",
      workPhone: "",
      mobile: "",
    },
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...contactPersons];
    updated[index][field] = value;
    setContactPersons(updated);
  };

  const handleAdd = () => {
    setContactPersons([
      ...contactPersons,
      {
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        workPhone: "",
        mobile: "",
      },
    ]);
  };

  const handleRemove = (index: number) => {
    const updated = contactPersons.filter((_, i) => i !== index);
    setContactPersons(updated);
  };

  return (
    <div className="space-y-4">
      {contactPersons.map((person, index) => (
        <div
          key={index}
          className="border border-gray-400 rounded p-4 space-y-2 bg-white shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Salutation</label>
              <select
                className="w-full border border-gray-400 rounded px-2 py-1"
                value={person.salutation}
                onChange={(e) =>
                  handleChange(index, "salutation", e.target.value)
                }
              >
                <option value="">--</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                className="w-full border border-gray-400 rounded px-2 py-1"
                value={person.firstName}
                onChange={(e) =>
                  handleChange(index, "firstName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                className="w-full border border-gray-400 rounded px-2 py-1"
                value={person.lastName}
                onChange={(e) =>
                  handleChange(index, "lastName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-400 rounded px-2 py-1"
                value={person.email}
                onChange={(e) => handleChange(index, "email", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Work Phone</label>
              <input
                className="w-full border border-gray-400 rounded px-2 py-1"
                value={person.workPhone}
                onChange={(e) =>
                  handleChange(index, "workPhone", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Mobile</label>
              <input
                className="w-full border border-gray-400 rounded px-2 py-1"
                value={person.mobile}
                onChange={(e) => handleChange(index, "mobile", e.target.value)}
              />
            </div>
          </div>

          <div className="text-right">
            {contactPersons.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      <div>
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Contact Person
        </button>
      </div>
    </div>
  );
};

export default ContactPersonsForm;
