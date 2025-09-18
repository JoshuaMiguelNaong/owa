"use client";

import { usePurchaseOrderFormStore } from "../state";

export default function NewButton() {
  const { open } = usePurchaseOrderFormStore();

  return (
    <button
      type="button"
      className="btn btn-sm btn-primary align-items-center d-inline-flex"
      onClick={() => {
        open("create", {
          supplierId: "",
          orderDate: new Date(),
          deliveryDate: new Date(),
          status: "PENDING",
          referenceNumber: "",
          remarks: "",
        });
      }}
    >
      <i className="ti ti-plus me-1 fw-semibold" />
      New Purchase Order
    </button>
  );
}
