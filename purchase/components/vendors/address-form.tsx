"use client";

import React, { useState } from "react";

const VendorAddressForm = () => {
  const [copyBilling, setCopyBilling] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    attention: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    fax: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    attention: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    fax: "",
  });

  const handleBillingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...billingAddress, [name]: value };
    setBillingAddress(updated);

    if (copyBilling) {
      setShippingAddress(updated);
    }
  };

  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyBillingToggle = () => {
    setCopyBilling((prev) => {
      if (!prev) {
        setShippingAddress(billingAddress);
      }
      return !prev;
    });
  };

  return (
    <div className="card custom-card p-3">
      {/* Billing Address */}
      <div className="card-header mb-3">
        <h6 className="card-title mb-0">Billing Address</h6>
      </div>
      <div className="row gy-3">
        <div className="col-md-6">
          <label className="form-label">Attention</label>
          <input
            type="text"
            name="attention"
            value={billingAddress.attention}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Country/Region</label>
          <input
            type="text"
            name="country"
            value={billingAddress.country}
            onChange={handleBillingChange}
            className="form-control"
            placeholder="Select or type to add"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Street 1</label>
          <input
            type="text"
            name="address1"
            value={billingAddress.address1}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Street 2</label>
          <input
            type="text"
            name="address2"
            value={billingAddress.address2}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            value={billingAddress.state}
            onChange={handleBillingChange}
            className="form-control"
            placeholder="Select or type to add"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={billingAddress.zip}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={billingAddress.phone}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Fax Number</label>
          <input
            type="text"
            name="fax"
            value={billingAddress.fax}
            onChange={handleBillingChange}
            className="form-control"
          />
        </div>
      </div>

      <hr className="my-4" />

      {/* Copy Checkbox */}
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="copyBilling"
          checked={copyBilling}
          onChange={handleCopyBillingToggle}
        />
        <label className="form-check-label" htmlFor="copyBilling">
          Shipping Address (Copy billing address)
        </label>
      </div>

      {/* Shipping Address */}
      <h6 className="fw-bold border-bottom pb-2">Shipping Address</h6>
      <div className="row gy-3 pt-2">
        <div className="col-md-6">
          <label className="form-label">Attention</label>
          <input
            type="text"
            name="attention"
            value={shippingAddress.attention}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Country/Region</label>
          <input
            type="text"
            name="country"
            value={shippingAddress.country}
            onChange={handleShippingChange}
            className="form-control"
            placeholder="Select or type to add"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Street 1</label>
          <input
            type="text"
            name="address1"
            value={shippingAddress.address1}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Street 2</label>
          <input
            type="text"
            name="address2"
            value={shippingAddress.address2}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={handleShippingChange}
            className="form-control"
            placeholder="Select or type to add"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={shippingAddress.zip}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={shippingAddress.phone}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Fax Number</label>
          <input
            type="text"
            name="fax"
            value={shippingAddress.fax}
            onChange={handleShippingChange}
            className="form-control"
            disabled={copyBilling}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorAddressForm;
