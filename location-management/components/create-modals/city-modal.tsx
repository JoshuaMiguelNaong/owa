"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { citySchema, provinceSchema, regionSchema } from "../../types";
import { City } from "../../schemas";
import { createCity } from "../../services/city-services";
import { z } from "zod";
import { closeModal } from "@/app/utils/modal";


type CityFormData = z.infer<typeof citySchema>;
type ProvinceFormData = z.infer<typeof provinceSchema>;
type RegionFormData = z.infer<typeof regionSchema>;

interface CityAddModalProps {
  id: string;
  provinces: ProvinceFormData[];
  regions: RegionFormData[];
  onCreated?: (city: City) => void; 
}

export default function CityAddModal({
  id,
  provinces = [],
  regions = [],
  onCreated,
}: CityAddModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CityFormData>({
    resolver: zodResolver(citySchema),
    defaultValues: {
      name: "",
      type: "City",
      provinceId: "",
      district: "",
      zipcode: "",
    },
  });

  const provinceWatch = watch("provinceId");

  // Reset form when modal closes
  useEffect(() => {
    const modalElement = document.getElementById(id);
    if (!modalElement) return;

    const handler = () => {
      reset();
      setFormError(null);
    };

    modalElement.addEventListener("hidden.bs.modal", handler);
    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handler);
    };
  }, [id, reset]);

  const submitHandler = async (data: CityFormData) => {
    try {
      setIsSubmitting(true);
      setFormError(null);
      const newCity = await createCity(data);
      onCreated?.(newCity);
      reset();
      closeModal(id);
    } catch (err: any) {
      setFormError(err.message || "Failed to save city");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-find region from selected province
  const selectedProvince = provinces.find((p) => p.id === provinceWatch);
  const selectedRegionName = selectedProvince
    ? regions.find((r) => r.id === selectedProvince.regionId)?.name || ""
    : "";

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
              Add City / Municipality
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="modal-body">
              {formError && (
                <div className="alert alert-danger">{formError}</div>
              )}

              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* Type */}
              <div className="mb-3">
                <label className="form-label">Type</label>
                <select
                  className={`form-select ${errors.type ? "is-invalid" : ""}`}
                  {...register("type")}
                >
                  <option value="">Select Type</option>
                  <option value="City">City</option>
                  <option value="Municipality">Municipality</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type.message}</div>
                )}
              </div>

              {/* Province */}
              <div className="mb-3">
                <label className="form-label">Province</label>
                <select
                  className={`form-select ${
                    errors.provinceId ? "is-invalid" : ""
                  }`}
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
                  value={selectedRegionName}
                  readOnly
                />
              </div>

              {/* District */}
              <div className="mb-3">
                <label className="form-label">District</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.district ? "is-invalid" : ""
                  }`}
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
                  className={`form-control ${
                    errors.zipcode ? "is-invalid" : ""
                  }`}
                  {...register("zipcode")}
                />
                {errors.zipcode && (
                  <div className="invalid-feedback">
                    {errors.zipcode.message}
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
