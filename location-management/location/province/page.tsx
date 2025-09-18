"use client";

import { useState, useEffect } from "react";
import ProvinceTable from "../../components/table/province-table/table";
import ProvinceCreateModal, {
  ProvinceFormData,
} from "../../components/create-modals/province-modal";
import { Province, Region } from "../../schemas";
import { getProvinces, createProvince } from "../../services/province-services";
import { getRegions } from "../../services/region-services";

export default function ProvincePage() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);

  // Load provinces + regions on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [provinceList, regionList] = await Promise.all([
          getProvinces(),
          getRegions(),
        ]);
        setProvinces(provinceList);
        setRegions(regionList);
      } catch (err) {
        console.error("Failed to load provinces or regions:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Handle create province
  const handleCreateProvince = async (data: ProvinceFormData) => {
    try {
      const newProvince = await createProvince(data); // { name, regionId }
      setProvinces((prev) => [...prev, newProvince]);
    } catch (err) {
      console.error("Failed to create province:", err);
    }
  };

  if (loading) return <p>Loading provinces...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Provinces</h3>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#provinceCreateModal"
        >
          + Add New Province
        </button>
      </div>

      {/* Table */}
      <ProvinceTable provinces={provinces} regions={regions} />

      {/* Modal */}
      <ProvinceCreateModal
        id="provinceCreateModal"
        regions={regions}
        onSubmit={handleCreateProvince}
      />
    </div>
  );
}
