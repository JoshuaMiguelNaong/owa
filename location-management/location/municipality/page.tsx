"use client";

import { useEffect, useState } from "react";
import MunicipalityTable from "../../components/table/municipality-table/table";
import MunicipalityCreateModal from "../../components/create-modals/municipality-modal";
import { Municipality, Province } from "../../schemas";
import { getMunicipalities } from "../../services/municipality-services";
import { getProvinces } from "../../services/province-services";

export default function MunicipalityPage() {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [municipalityData, provinceData] = await Promise.all([
          getMunicipalities(),
          getProvinces(),
        ]);
        setMunicipalities(municipalityData);
        setProvinces(provinceData);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, []);

  const handleCreated = (municipality: Municipality) => {
    setMunicipalities((prev) => [...prev, municipality]);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Municipalities</h3>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#municipalityCreateModal"
        >
          + Add New Municipality
        </button>
      </div>

      {/* Table */}
      <MunicipalityTable
        municipalities={municipalities}
        provinces={provinces}
      />

      {/* Modal */}
      <MunicipalityCreateModal
        id="municipalityCreateModal"
        onCreated={handleCreated}
      />
    </div>
  );
}
