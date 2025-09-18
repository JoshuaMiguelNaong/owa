"use client";

import { deletePurchaseOrder } from "../server-actions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => deletePurchaseOrder(id)}
      type="button"
      className="btn btn-sm btn-danger btn-wave"
    >
      <i className="ri ri-delete-bin-5-line"></i>
    </button>
  );
}
