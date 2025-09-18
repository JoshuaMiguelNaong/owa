"use client";

import { SuppliersIdName } from "@/types/types";
import { usePurchaseOrderFormStore } from "../state";
import PurchaseForm from "./purchase-form";

export function PurchaseModal({ suppliers }: { suppliers: SuppliersIdName[] }) {
  const { isOpen, mode, close } = usePurchaseOrderFormStore();

  if (!isOpen) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              {mode === "edit" ? "Edit Supplier" : "New Supplier"}
            </h6>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={close}
            />
          </div>
          <div className="modal-body">
            <PurchaseForm suppliers={suppliers} />
          </div>
        </div>
      </div>
    </div>
  );
}
