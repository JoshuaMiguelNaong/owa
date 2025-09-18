"use client";

import CityTable from "../../components/table/city-table/table";
import CityCreateModal from "../../components/create-modals/city-modal";
import { Province } from "../../types";

export default function CityPage() {
  const mockProvinces: Province[] = [
    { id: "1", name: "Cavite", regionId: "4A" },
    { id: "2", name: "Laguna", regionId: "4A" },
    { id: "3", name: "Cebu", regionId: "7" },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Cities</h3>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#cityCreateModal"
        >
          + Add New City
        </button>
      </div>

      {/* Table */}
      <CityTable />

      {/* Modal */}
      <CityCreateModal
        id="cityCreateModal"
        provinces={mockProvinces}
        onSubmit={async (data) => {
          console.log("Submitted City:", data);
        }}
      />
    </div>
  );
}
