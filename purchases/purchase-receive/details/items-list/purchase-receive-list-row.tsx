"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { PurchaseReceiveFormData } from "../../schema-and-types";

export default function PurchaseReceiveListRow({
  purchaseReceive,
}: {
  purchaseReceive: PurchaseReceiveFormData & { id: string };
  isActive?: boolean;
}) {
  const router = useRouter();


  const date = purchaseReceive.receiveDate;
  const vendorName = purchaseReceive.vendorName;
  const prNumber = purchaseReceive.id; 
  const linkedPO = purchaseReceive.purchaseOrderId;


  const total = purchaseReceive.items?.reduce(
    (sum, item) => sum + (item.amount || 0),
    0
  );

  return (
    <tr
      onClick={() =>
        router.push(
          `/admin/v2/purchases/purchase-receive/${purchaseReceive.id}`
        )
      }
    >
      <td>
        <div className={clsx("d-flex px-2 py-2 hover-lighten")}>
          <input type="checkbox" className="form-check-input me-3 mt-1" />
          <div className="d-flex justify-content-between w-100">
            <div>
              <div className="fw-medium fs-6">{vendorName || "-"}</div>
              <small className="text-muted py-1">
                {`PR-${prNumber}`}
                {linkedPO ? ` • PO-${linkedPO}` : ""}
                {date ? ` • ${format(new Date(date), "dd MMM yyyy")}` : ""}
              </small>
            </div>
            <div className="text-end">
              <div className="fw-medium fs-6">
                {total != null
                  ? new Intl.NumberFormat("en-PH", {
                      style: "currency",
                      currency: "PHP",
                    }).format(total)
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
