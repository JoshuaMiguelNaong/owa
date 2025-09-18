"use client";

import { useEffect, useState } from "react";
import { Barangay, City, Municipality } from "../../types";

interface BarangayViewModalProps {
  id: string;
  barangayId: string | null;
  fetchBarangayById: (id: string) => Promise<Barangay | null>;
  cities: City[];
  municipalities: Municipality[];
}

export default function BarangayViewModal({
  id,
  barangayId,
  fetchBarangayById,
  cities,
  municipalities,
}: BarangayViewModalProps) {
  const [barangay, setBarangay] = useState<Barangay | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadBarangay = async () => {
      if (barangayId) {
        setLoading(true);
        const data = await fetchBarangayById(barangayId);
        setBarangay(data);
        setLoading(false);
      } else {
        setBarangay(null);
      }
    };
    loadBarangay();
  }, [barangayId, fetchBarangayById]);

  const getParentLguName = (lguId: string) => {
    const city = cities.find((c) => c.id === lguId);
    if (city) return `City: ${city.name}`;
    const mun = municipalities.find((m) => m.id === lguId);
    if (mun) return `Municipality: ${mun.name}`;
    return "N/A";
  };

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              View Barangay Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {loading ? (
              <p>Loading...</p>
            ) : barangay ? (
              <>
                <div className="mb-3">
                  <label className="form-label fw-bold">Barangay ID</label>
                  <p className="form-control-plaintext">{barangay.id}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <p className="form-control-plaintext">{barangay.name}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Parent LGU</label>
                  <p className="form-control-plaintext">
                    {getParentLguName(barangay.lguId)}
                  </p>
                </div>
              </>
            ) : (
              <p>No barangay selected.</p>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
