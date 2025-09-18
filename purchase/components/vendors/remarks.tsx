import React from "react";

const DescriptionField = () => {
  return (
    <div className="card custom-card p-3">
      {/* Billing Address */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Remarks</h4>
      </div>

      {/* Textarea field */}
      <div className="p-4">
        <textarea
          id="description"
          name="description"
          rows={16}
          className="border rounded px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
          placeholder="Enter any notes or additional description here..."
          style={{
            width: "100%",
            minWidth: "800px",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default DescriptionField;
