"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { provinceSchema, regionSchema } from "../../types";
import { z } from "zod";
import { closeModal } from "@/app/utils/modal";

type ProvinceFormData = z.infer<typeof provinceSchema>;
type RegionFormData = z.infer<typeof regionSchema>;

interface ProvinceEditModalProps {
  id: string;
  province: ProvinceFormData;
  regions: RegionFormData[];
  onSubmit: (data: ProvinceFormData) => Promise<void>;
}

export default function ProvinceEditModal({
  id,
  province,
  regions,
  onSubmit,
}: ProvinceEditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProvinceFormData>({
    resolver: zodResolver(provinceSchema),
    defaultValues: province,
  });

  useEffect(() => reset(province), [province, reset]);

  const submitHandler = async (data: ProvinceFormData) => {
    setIsSubmitting(true);
    await onSubmit(data);
    setIsSubmitting(false);
    closeModal(id);
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
              Edit Province
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="modal-body">
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

              <div className="mb-3">
                <label className="form-label">Region</label>
                <select
                  className={`form-select ${errors.regionId ? "is-invalid" : ""}`}
                  {...register("regionId")}
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
