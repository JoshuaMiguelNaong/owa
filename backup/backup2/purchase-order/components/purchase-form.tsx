"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import { usePurchaseOrderFormStore } from "../state";
import { SuppliersIdName } from "@/types/types";
import {
  PurchaseOrderFormSchema,
  PurchaseOrderFormSchemaType,
} from "../schema-and-types";
import { upsertPurchaseOrder } from "../server-actions";

function formatDateForInput(date: Date | string | undefined) {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0]; // returns YYYY-MM-DD
}

export default function PurchaseForm({
  suppliers,
}: {
  suppliers: SuppliersIdName[];
}) {
  const { mode, data, close } = usePurchaseOrderFormStore();

  console.log("Suppliers List", suppliers);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PurchaseOrderFormSchemaType>({
    resolver: zodResolver(PurchaseOrderFormSchema),
    defaultValues: {
      supplierId: "",
      orderDate: new Date(),
      deliveryDate: new Date(),
      status: "PENDING",
      referenceNumber: "",
      remarks: "",
    },
  });

  useEffect(() => {
    if (mode === "edit" && data) {
      console.log("edit");
      console.log(data);
      reset({
        ...data,
        orderDate: formatDateForInput(data.orderDate),
        deliveryDate: formatDateForInput(data.deliveryDate),
      });
    } else {
      reset({
        supplierId: "",
        orderDate: new Date(),
        deliveryDate: new Date(),
        status: "PENDING",
        referenceNumber: "",
        remarks: "",
      });
    }
  }, [data, mode, reset]);

  const onSubmit = async (data: PurchaseOrderFormSchemaType) => {
    const result = await upsertPurchaseOrder(data);

    if (result.success) {
      close();
    } else {
      alert("Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.error("Zod Error (safe):", errors);
      })}
    >
      <input type="hidden" {...register("id")} />

      {/* Basic Fields */}
      <div className="row">
        <div className="col-md-3">
          <label className="form-label">Order Date</label>
          <input
            type="date"
            {...register("orderDate")}
            className="form-control form-control-sm"
          />
          {errors.orderDate && (
            <small className="text-danger">{errors.orderDate.message}</small>
          )}
        </div>

        <div className="col-md-3">
          <label className="form-label">Delivery Date</label>
          <input
            type="date"
            {...register("deliveryDate")}
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Reference #</label>
          <input
            {...register("referenceNumber")}
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Status</label>
          <select
            {...register("status")}
            className="form-select form-select-sm"
          >
            <option value="PENDING">PENDING</option>
            <option value="PARTIALLY_RECEIVED">PARTIALLY RECEIVED</option>
            <option value="RECEIVED">RECEIVED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Suplier</label>
          <select
            {...register("supplierId")}
            className="form-select form-select-sm"
          >
            <option value="">Select...</option>
            {suppliers.map((sup: SuppliersIdName) => (
              <option key={sup.id} value={sup.id}>
                {sup.companyName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Remarks</label>
          <textarea
            {...register("remarks")}
            className="form-control form-control-sm"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="col-sm-12 mt-4 d-flex justify-content-end gap-2">
        <button type="submit" className="btn btn-sm btn-primary">
          <i className="ri-save-line"></i> Submit
        </button>
        <button type="button" className="btn btn-sm btn-danger" onClick={close}>
          Cancel <i className="ri-close-circle-line"></i>
        </button>
      </div>
    </form>
  );
}
