"use client";

import React, { useState } from "react";

const BulkAddExpenses = () => {
  const [rows, setRows] = useState([
    {
      date: "",
      category: "",
      amount: "",
      vendor: "",
      tax: "",
      customer: "",
      billable: false,
      notes: "",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        date: "",
        category: "",
        amount: "",
        vendor: "",
        tax: "",
        customer: "",
        billable: false,
        notes: "",
      },
    ]);
  };

  const handleChange = (index: number, field: string, value: any) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  return (
    <form>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead
            className="bg-light text-dark dark:bg-gray-800 dark:text-white"
            style={{ borderBottom: "2px solid #dee2e6" }}
          >
            <tr>
              <th style={{ minWidth: "140px" }}>Date</th>
              <th style={{ minWidth: "160px" }}>Category Name</th>
              <th style={{ minWidth: "140px" }}>Amount</th>
              <th style={{ minWidth: "160px" }}>Vendor</th>
              <th style={{ minWidth: "140px" }}>Tax</th>
              <th style={{ minWidth: "180px" }}>Customer Name</th>
              <th style={{ minWidth: "120px" }}>Billable</th>
              <th style={{ minWidth: "220px" }}>Notes (Max 500 chars)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="text-dark dark:text-gray-200">
                {/* Date */}
                <td>
                  <input
                    type="date"
                    className="form-control bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                    value={row.date}
                    onChange={(e) => handleChange(idx, "date", e.target.value)}
                  />
                </td>

                {/* Category */}
                <td>
                  <select
                    className="form-select bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                    value={row.category}
                    onChange={(e) =>
                      handleChange(idx, "category", e.target.value)
                    }
                  >
                    <option value="">Select Category</option>
                    <option value="office">Office</option>
                    <option value="utilities">Utilities</option>
                    <option value="travel">Travel</option>
                  </select>
                </td>

                {/* Amount */}
                <td>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-dark dark:bg-gray-700 dark:text-gray-200">
                      PHP
                    </span>
                    <input
                      type="number"
                      className="form-control bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                      placeholder="0.00"
                      value={row.amount}
                      onChange={(e) =>
                        handleChange(idx, "amount", e.target.value)
                      }
                    />
                  </div>
                </td>

                {/* Vendor */}
                <td>
                  <select
                    className="form-select bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                    value={row.vendor}
                    onChange={(e) =>
                      handleChange(idx, "vendor", e.target.value)
                    }
                  >
                    <option value="">Select Vendor</option>
                    <option value="vendor1">ABC Corp</option>
                    <option value="vendor2">XYZ Co</option>
                  </select>
                </td>

                {/* Tax */}
                <td>
                  <select
                    className="form-select bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                    value={row.tax}
                    onChange={(e) => handleChange(idx, "tax", e.target.value)}
                  >
                    <option value="">Select Tax</option>
                    <option value="vat">VAT (12%)</option>
                    <option value="none">No Tax</option>
                  </select>
                </td>

                {/* Customer */}
                <td>
                  <input
                    type="text"
                    className="form-control bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                    placeholder="Customer name"
                    value={row.customer}
                    onChange={(e) =>
                      handleChange(idx, "customer", e.target.value)
                    }
                  />
                </td>

                {/* Billable */}
                <td className="text-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={row.billable}
                    onChange={(e) =>
                      handleChange(idx, "billable", e.target.checked)
                    }
                  />
                </td>

                {/* Notes */}
                <td>
                  <textarea
                    className="form-control bg-white text-dark dark:bg-gray-900 dark:text-gray-200"
                    rows={2}
                    maxLength={500}
                    placeholder="Internal remarks..."
                    value={row.notes}
                    onChange={(e) => handleChange(idx, "notes", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controls */}
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={addRow}
        >
          + Add Row
        </button>
        <button type="submit" className="btn btn-primary me-2">
          Save All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BulkAddExpenses;
