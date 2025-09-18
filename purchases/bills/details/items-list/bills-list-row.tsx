"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Bill } from "../../schema-and-types";

export default function BillsListRow({
  bill,
}: {
  bill: Bill & { id: string };
  isActive?: boolean;
}) {
  const router = useRouter();

  // Common display variables
  const date = bill.billDate;
  const vendorName = bill.vendorName;
  const total = bill.total;
  const billNumber = bill.billNumber;

  return (
    <tr
      onClick={() => router.push(`/admin/v2/purchases/bills/${bill.id}`)}
      className="cursor-pointer"
    >
      <td>
        <div className={clsx("d-flex px-2 py-2 hover-lighten")}>
          <input type="checkbox" className="form-check-input me-3 mt-1" />
          <div className="d-flex justify-content-between w-100">
            <div>
              <div className="fw-medium fs-6">{vendorName || "-"}</div>
              <small className="text-muted py-1">
                {billNumber}
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
