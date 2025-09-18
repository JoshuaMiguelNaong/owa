"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { municipalitySchema } from "../../types";
import { Municipality, Province } from "../../schemas";
import { createMunicipality } from "../../services/municipality-services";
import { getProvinces } from "../../services/province-services";
import { z } from "zod";
import { closeModal } from "@/app/utils/modal";

type MunicipalityFormData = z.infer<typeof municipalitySchema>;

interface MunicipalityCreateModalProps {
  id: string;
  onCreated?: (municipality: Municipality) => void;
}

export default function MunicipalityCreateModal({
  id,
  onCreated,
}: MunicipalityCreateModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loadingProvinces, setLoadingProvinces] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MunicipalityFormData>({
    resolver: zodResolver(municipalitySchema.omit({ id: true })),
    defaultValues: {
      name: "",
      type: "City",
      district: "",
      zipCode: "",
      provinceId: "",
    },
  });

  // Fetch provinces on mount
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        setLoadingProvinces(true);
        const data = await getProvinces();
        setProvinces(data);
      } catch (err: any) {
        setFormError("Failed to load provinces");
      } finally {
        setLoadingProvinces(false);
      }
    };

    fetchProvinces();
  }, []);

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

  const submitHandler = async (data: MunicipalityFormData) => {
    try {
      setIsSubmitting(true);
      setFormError(null);

      const newMunicipality = await createMunicipality(data);
      onCreated?.(newMunicipality);

      reset();
      closeModal(id);
    } catch (err: any) {
      setFormError(err.message || "Failed to save municipality");
    } finally {
      setIsSubmitting(false);
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
              Add New Municipality
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
              {formError && (
                <div className="alert alert-danger">{formError}</div>
              )}

              {/* Municipality Name */}
              <div className="mb-3">
                <label htmlFor="municipalityName" className="form-label">
                  Municipality Name
                </label>
                <input
                  type="text"
                  id="municipalityName"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* Province */}
              <div className="mb-3">
                <label htmlFor="provinceId" className="form-label">
                  Province
                </label>
                <select
                  id="provinceId"
                  className={`form-select ${
                    errors.provinceId ? "is-invalid" : ""
                  }`}
                  {...register("provinceId")}
                  disabled={loadingProvinces}
                >
                  <option value="">
                    {loadingProvinces ? "Loading..." : "Select Province"}
                  </option>
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

              {/* Type */}
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <select
                  id="type"
                  className={`form-select ${errors.type ? "is-invalid" : ""}`}
                  {...register("type")}
                >
                  <option value="City">City</option>
                  <option value="Municipality">Municipality</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type.message}</div>
                )}
              </div>

              {/* District */}
              <div className="mb-3">
                <label htmlFor="district" className="form-label">
                  District (optional)
                </label>
                <input
                  type="text"
                  id="district"
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
                <label htmlFor="zipCode" className="form-label">
                  Zip Code (optional)
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className={`form-control ${
                    errors.zipCode ? "is-invalid" : ""
                  }`}
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
