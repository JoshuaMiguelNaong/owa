"use client";

import { useState, useEffect } from "react";
import RegionTable from "../../components/table/region-table/table";
import RegionCreateModal, {
  RegionFormData,
} from "../../components/create-modals/region-modal";
import { Region } from "../../schemas";
import { getRegions, createRegion } from "../../services/region-services";

export default function RegionPage() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadRegions = async () => {
      try {
        const regionList = await getRegions();
        setRegions(regionList);
      } catch (err) {
        console.error("Failed to load regions:", err);
      } finally {
        setLoading(false);
      }
    };
    loadRegions();
  }, []);

  const handleCreateRegion = async (data: RegionFormData) => {
    try {
      const newRegion = await createRegion(data);
      setRegions((prev) => [...prev, newRegion]);
      const regionList = await getRegions();
      setRegions(regionList);
    } catch (err) {
      console.error("Failed to create region:", err);
    }
  };

  if (loading) return <p>Loading regions...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Regions</h3>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#regionCreateModal"
        >
          + Add New Region
        </button>
      </div>

      <RegionTable />

      <RegionCreateModal id="regionCreateModal" onSubmit={handleCreateRegion} />
    </div>
  );
}
