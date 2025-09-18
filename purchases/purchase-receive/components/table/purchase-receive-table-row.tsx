"use client";

import { useRouter } from "next/navigation";
import { PurchaseReceiveFormData } from "../../schema-and-types";

export default function PurchaseReceiveTableRow({
  purchaseReceive,
}: {
  purchaseReceive: PurchaseReceiveFormData;
}) {
  const router = useRouter();

  return (
    <tr
      onClick={() =>
        router.push(
          `/admin/v2/purchase/purchase-receives/${purchaseReceive.id}`
        )
      }
      style={{ cursor: "pointer" }}
    >
      <td>{purchaseReceive.id}</td>
      <td>{purchaseReceive.purchaseOrderId}</td>
      <td>{purchaseReceive.vendorName}</td>
      <td>{purchaseReceive.deliveryAddress}</td>
      <td>{purchaseReceive.receiveDate}</td>
      <td>
        <button
          className="btn btn-sm btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            router.push(
              `/admin/v2/purchase/purchase-receives/${purchaseReceive.id}/edit`
            );
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}
