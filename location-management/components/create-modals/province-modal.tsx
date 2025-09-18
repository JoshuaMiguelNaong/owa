"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { provinceSchema } from "../../types";
import { z } from "zod";
import { Region } from "../../schemas";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export type ProvinceFormData = z.infer<typeof provinceSchema>;

interface ProvinceCreateModalProps {
  id: string;
  onSubmit: (data: ProvinceFormData) => Promise<void>;
  regions: Region[];
}

export default function ProvinceCreateModal({
  id,
  onSubmit,
  regions,
}: ProvinceCreateModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema without id
  const schema = provinceSchema.omit({ id: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProvinceFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      regionId: "",
    },
  });

  const submitHandler = async (data: ProvinceFormData) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
      reset();

      // Close Bootstrap modal
      const modalElement = document.getElementById(id);
      if (modalElement) {
        const modal =
          bootstrap.Modal.getInstance(modalElement) ||
          new bootstrap.Modal(modalElement);
        modal.hide();
      }
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
              Add New Province
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
              {/* Province Name */}
              <div className="mb-3">
                <label className="form-label">Province Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              {/* Region Select */}
              <div className="mb-3">
                <label className="form-label">Region</label>
                <select
                  className={`form-select ${errors.regionId ? "is-invalid" : ""}`}
                  {...register("regionId", { required: "Region is required" })} // ✅ adds required
                >
                  <option value="">Select Region</option>
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
                {errors.regionId && (
                  <div className="invalid-feedback">
                    {errors.regionId.message}
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
