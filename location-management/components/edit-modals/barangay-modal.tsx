"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  barangaySchema,
  municipalitySchema,
  provinceSchema,
  regionSchema,
} from "../../types";
import { z } from "zod";
import { closeModal } from "@/app/utils/modal";

type BarangayFormData = z.infer<typeof barangaySchema>;
type MunicipalityFormData = z.infer<typeof municipalitySchema>;
type ProvinceFormData = z.infer<typeof provinceSchema>;
type RegionFormData = z.infer<typeof regionSchema>;

interface BarangayEditModalProps {
  id: string;
  barangay: BarangayFormData | null;
  onSubmit: (data: BarangayFormData) => Promise<void>;
  municipalities: MunicipalityFormData[];
  provinces: ProvinceFormData[];
  regions: RegionFormData[];
}

export default function BarangayEditModal({
  id,
  barangay,
  onSubmit,
  municipalities = [],
  provinces = [],
  regions = [],
}: BarangayEditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BarangayFormData>({
    resolver: zodResolver(barangaySchema),
    defaultValues: barangay ?? {
      id: undefined,
      name: "",
      lguId: "", // ✅ updated here
    },
  });

  const lguWatch = watch("lguId"); // ✅ updated here

  useEffect(() => {
    if (barangay) {
      reset(barangay);
    } else {
      reset({
        id: undefined,
        name: "",
        lguId: "", // ✅ updated here
      });
    }
  }, [barangay, reset]);

  const submitHandler = async (data: BarangayFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      closeModal(id);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Get hierarchy based on lguId
  const selectedMunicipality = municipalities.find((m) => m.id === lguWatch);
  const selectedProvince = provinces.find(
    (p) => p.id === selectedMunicipality?.provinceId
  );
  const selectedRegion = regions.find(
    (r) => r.id === selectedProvince?.regionId
  );

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
              Edit Barangay
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
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
                <label className="form-label">LGU</label>
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
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
