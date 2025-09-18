"use client";

import { useState } from "react";
import RegionPage from "./location/region/page";
import ProvincePage from "./location/province/page";
import MunicipalityPage from "./location/municipality/page";
import BarangayPage from "./location/barangay/page";

export default function LocationManagementPage() {
  const [activeTab, setActiveTab] = useState("region");

  return (
    <div className="container mt-4">
      <h2>Location Management</h2>
      <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "region" ? "active" : ""}`}
            onClick={() => setActiveTab("region")}
          >
            Regions
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "province" ? "active" : ""}`}
            onClick={() => setActiveTab("province")}
          >
            Provinces
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "municipality" ? "active" : ""}`}
            onClick={() => setActiveTab("municipality")}
          >
            Municipalities
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "barangay" ? "active" : ""}`}
            onClick={() => setActiveTab("barangay")}
          >
            Barangays
          </button>
        </li>
      </ul>

      <div className="mt-4">
        {activeTab === "region" && <RegionPage />}
        {activeTab === "province" && <ProvincePage />}
        {activeTab === "municipality" && <MunicipalityPage />}
        {activeTab === "barangay" && <BarangayPage />}
      </div>
    </div>
  );
}
