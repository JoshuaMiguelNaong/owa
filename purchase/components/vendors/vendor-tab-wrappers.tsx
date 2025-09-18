"use client";

import { useState } from "react";
import VendorForm from "@/app/admin/v2/purchase/components/vendors/add-new-vendor";
import OtherDetailsTab from "@/app/admin/v2/purchase/components/vendors/other-details";
import AddressTab from "@/app/admin/v2/purchase/components/vendors/address-form";
import ContactPersonsTab from "@/app/admin/v2/purchase/components/vendors/contact-person-form";
import CustomFieldsTab from "@/app/admin/v2/purchase/components/vendors/custom-field-tags";
import ReportingTagsTab from "@/app/admin/v2/purchase/components/vendors/reporting-tags";
import RemarksTab from "@/app/admin/v2/purchase/components/vendors/remarks";

export default function VendorRegistrationPage() {
  const [activeTab, setActiveTab] = useState("other");

  return (
    <main className="container py-4">
      {/* Main Vendor Form */}
      <VendorForm />

      {/* Bootstrap Navigation Tabs */}
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "other" ? "active" : ""}`}
            onClick={() => setActiveTab("other")}
          >
            Other Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "address" ? "active" : ""}`}
            onClick={() => setActiveTab("address")}
          >
            Address
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "contacts" ? "active" : ""}`}
            onClick={() => setActiveTab("contacts")}
          >
            Contact Persons
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "custom" ? "active" : ""}`}
            onClick={() => setActiveTab("custom")}
          >
            Custom Fields
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "reporting" ? "active" : ""}`}
            onClick={() => setActiveTab("reporting")}
          >
            Reporting Tags
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "remarks" ? "active" : ""}`}
            onClick={() => setActiveTab("remarks")}
          >
            Remarks
          </button>
        </li>
      </ul>

      {/* Tab Content Rendering */}
      {activeTab === "other" && <OtherDetailsTab />}
      {activeTab === "address" && <AddressTab />}
      {activeTab === "contacts" && <ContactPersonsTab />}
      {activeTab === "custom" && <CustomFieldsTab />}
      {activeTab === "reporting" && <ReportingTagsTab />}
      {activeTab === "remarks" && <RemarksTab />}
    </main>
  );
}
