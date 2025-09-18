"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { regionSchema } from "../../types";
import { z } from "zod";

export type RegionFormData = z.infer<typeof regionSchema>;

interface RegionCreateModalProps {
  id: string;
  onSubmit: (data: RegionFormData) => Promise<void>;
}

export default function RegionCreateModal({
  id,
  onSubmit,
}: RegionCreateModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegionFormData>({
    resolver: zodResolver(regionSchema),
    defaultValues: { name: "" },
  });

  const submitHandler = async (data: RegionFormData) => {
    setIsSubmitting(true);
    await onSubmit(data);
    setIsSubmitting(false);
    reset();

    // Close Bootstrap modal
    const modalElement = document.getElementById(id);
    if (modalElement) {
      const modal =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      modal.hide();
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
              Add New Region
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
              <div className="mb-3">
                <label htmlFor="regionName" className="form-label">
                  Region Name
                </label>
                <input
                  type="text"
                  id="regionName"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
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
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
