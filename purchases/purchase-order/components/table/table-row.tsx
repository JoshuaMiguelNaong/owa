"use client";

import EditButton from "../buttons/edit-button";
import DeleteButton from "../buttons/delete-button";
import { useRouter } from "next/navigation";
import { PurchaseOrderFormData } from "../../schema-and-types";

export default function PurchaseOrderTableRow({
  purchaseOrder,
}: {
  purchaseOrder: PurchaseOrderFormData;
}) {
  const router = useRouter();

  return (
    <tr
      onClick={() =>
        router.push(`/admin/v2/purchases/purchase-order/${purchaseOrder.id}`)
      }
      className="cursor-pointer"
    >
      <td className="text-primary">{purchaseOrder.purchaseOrderNumber}</td>
      <td>{new Date(purchaseOrder.date).toLocaleDateString()}</td>
      <td>{purchaseOrder.vendorName ?? "-"}</td>
      <td>{purchaseOrder.customer ?? "-"}</td>
      <td>₱{purchaseOrder.total.toLocaleString()}</td>
      <td className="d-flex gap-1">
        <EditButton />
        <DeleteButton />
      </td>
    </tr>
  );
}
