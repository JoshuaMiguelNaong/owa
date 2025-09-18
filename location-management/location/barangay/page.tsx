"use client";

import { useState, useEffect } from "react";
import BarangayTable from "../../components/table/barangay-table/table";
import BarangayCreateModal from "../../components/create-modals/barangay-modal";
import { Barangay, Municipality, Province, Region } from "../../schemas";
import { getBarangays, createBarangay } from "../../services/barangay-services";
import { getMunicipalities } from "../../services/municipality-services";
import { getProvinces } from "../../services/province-services";
import { getRegions } from "../../services/region-services";

export default function BarangayPage() {
  const [barangays, setBarangays] = useState<Barangay[]>([]);
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [barangayList, municipalityList, provinceList, regionList] =
          await Promise.all([
            getBarangays(),
            getMunicipalities(),
            getProvinces(),
            getRegions(),
          ]);

        setBarangays(barangayList);
        setMunicipalities(municipalityList);
        setProvinces(provinceList);
        setRegions(regionList);
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleCreateBarangay = async (data: Omit<Barangay, "id">) => {
    try {
      const newBarangay = await createBarangay(data);
      setBarangays((prev) => [...prev, newBarangay]);

      // Optionally refresh full list
      const barangayList = await getBarangays();
      setBarangays(barangayList);
    } catch (err) {
      console.error("Failed to create barangay:", err);
    }
  };

  if (loading) return <p>Loading barangays...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Barangays</h3>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#barangayCreateModal"
        >
          + Add New Barangay
        </button>
      </div>

      <BarangayTable
        barangays={barangays}
        municipalities={municipalities}
        provinces={provinces}
        regions={regions}
      />

      <BarangayCreateModal
        id="barangayCreateModal"
        municipalities={municipalities}
        provinces={provinces}
        regions={regions}
        onCreated={handleCreateBarangay}
      />
    </div>
  );
}
