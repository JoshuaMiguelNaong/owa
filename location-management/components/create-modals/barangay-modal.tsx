"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { barangaySchema } from "../../types";
import { Barangay, Municipality, Province, Region } from "../../schemas";
import { createBarangay } from "../../services/barangay-services";
import { z } from "zod";
import { closeModal } from "@/app/utils/modal";

export type BarangayFormData = z.infer<typeof barangaySchema>;

interface BarangayCreateModalProps {
  id: string;
  onCreated?: (barangay: Barangay) => void;
  municipalities: Municipality[];
  provinces: Province[];
  regions: Region[];
}

export default function BarangayCreateModal({
  id,
  onCreated,
  municipalities,
  provinces,
  regions,
}: BarangayCreateModalProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<BarangayFormData>({
    resolver: zodResolver(barangaySchema.omit({ id: true })),
    defaultValues: { name: "", lguId: "" },
  });

  const lguIdWatch = watch("lguId");

  // ✅ Find related Province and Region
  const selectedMunicipality = municipalities.find((m) => m.id === lguIdWatch);
  const selectedProvince = provinces.find(
    (p) => p.id === selectedMunicipality?.provinceId
  );
  const selectedRegion = regions.find(
    (r) => r.id === selectedProvince?.regionId
  );

  const onSubmit = async (data: Omit<Barangay, "id">) => {
    try {
      setLoading(true);
      const newBarangay = await createBarangay(data);
      onCreated?.(newBarangay);
      reset();
      closeModal(id);
    } catch (err) {
      console.error("Failed to create barangay:", err);
    } finally {
      setLoading(false);
    }
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
              Add Barangay
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              {/* Barangay Name */}
              <div className="mb-3">
                <label className="form-label">Barangay Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* LGU (Municipality) */}
              <div className="mb-3">
                <label className="form-label">LGU (Municipality)</label>
                <select
                  className={`form-select ${errors.lguId ? "is-invalid" : ""}`}
                  {...register("lguId")}
                >
                  <option value="">Select LGU</option>
                  {municipalities.map((mun) => (
                    <option key={mun.id} value={mun.id}>
                      {mun.name}
                    </option>
                  ))}
                </select>
                {errors.lguId && (
                  <div className="invalid-feedback">{errors.lguId.message}</div>
                )}
              </div>

              {/* Province (read-only) */}
              <div className="mb-3">
                <label className="form-label">Province</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedProvince?.name || ""}
                  readOnly
                />
              </div>

              {/* Region (read-only) */}
              <div className="mb-3">
                <label className="form-label">Region</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedRegion?.name || ""}
                  readOnly
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
