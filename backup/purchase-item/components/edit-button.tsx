"use client";

import { PurchaseOrderSchemaType } from "../schema-and-types"
import {usePurchaseOrderFormStore } from "../state";

export default function EditButton({
  po,
}: {
  po: PurchaseOrderSchemaType;
}) {
  const { open } = usePurchaseOrderFormStore();

  return (
    <button
      onClick={() => {
        open("edit", po);
      }}
      type="button"
      className="btn btn-sm btn-info btn-wave"
    >
      <i className="ri ri-pencil-line"></i>
    </button>
  );
}
