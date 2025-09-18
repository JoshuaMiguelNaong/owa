"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { municipalitySchema, provinceSchema, regionSchema } from "../../types";
import { z } from "zod";
import { closeModal } from "@/app/utils/modal";

type MunicipalityFormData = z.infer<typeof municipalitySchema>;
type ProvinceFormData = z.infer<typeof provinceSchema>;
type RegionFormData = z.infer<typeof regionSchema>;

interface MunicipalityEditModalProps {
  id: string;
  municipality: MunicipalityFormData;
  provinces: ProvinceFormData[];
  regions: RegionFormData[];
  onSubmit: (data: MunicipalityFormData) => Promise<void>;
}

export default function MunicipalityEditModal({
  id,
  municipality,
  provinces = [],
  regions = [],
  onSubmit,
}: MunicipalityEditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<MunicipalityFormData>({
    resolver: zodResolver(municipalitySchema),
    defaultValues: municipality,
  });

  // Watch selected province
  const provinceWatch = watch("provinceId");

  // Reset form values when municipality changes
  useEffect(() => {
    reset(municipality);
  }, [municipality, reset]);

  const submitHandler = async (data: MunicipalityFormData) => {
    setIsSubmitting(true);
    await onSubmit(data);
    setIsSubmitting(false);
    closeModal(id);
  };

  const selectedProvince = provinces.find((p) => p.id === provinceWatch);
  const selectedRegion = selectedProvince
    ? regions.find((r) => r.id === selectedProvince.regionId)
    : undefined;

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
              Edit Municipality
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="modal-body">
              {/* Municipality Name */}
              <div className="mb-3">
                <label className="form-label">Municipality Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* Province */}
              <div className="mb-3">
                <label className="form-label">Province</label>
                <select
                  className={`form-select ${errors.provinceId ? "is-invalid" : ""}`}
                  {...register("provinceId")}
                >
                  <option value="">Select Province</option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
                {errors.provinceId && (
                  <div className="invalid-feedback">
                    {errors.provinceId.message}
                  </div>
                )}
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

              {/* Type */}
              <div className="mb-3">
                <label className="form-label">Type</label>
                <select
                  className={`form-select ${errors.type ? "is-invalid" : ""}`}
                  {...register("type")}
                >
                  <option value="">Select Type</option>
                  <option value="Municipality">Municipality</option>
                  <option value="City">City</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type.message}</div>
                )}
              </div>

              {/* District */}
              <div className="mb-3">
                <label className="form-label">District</label>
                <input
                  type="text"
                  className={`form-control ${errors.district ? "is-invalid" : ""}`}
                  {...register("district")}
                />
                {errors.district && (
                  <div className="invalid-feedback">
                    {errors.district.message}
                  </div>
                )}
              </div>

              {/* Zip Code */}
              <div className="mb-3">
                <label className="form-label">Zip Code</label>
                <input
                  type="text"
                  className={`form-control ${errors.zipCode ? "is-invalid" : ""}`}
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <div className="invalid-feedback">
                    {errors.zipCode.message}
                  </div>
                )}
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
