"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { VendorCredit } from "../../schema-and-types";
import { format } from "date-fns";

export default function VendorCreditListRow({
  vendorCredit,
  isActive,
}: {
  vendorCredit: VendorCredit;
  isActive?: boolean;
}) {
  const router = useRouter();

  return (
    <tr
      onClick={() =>
        router.push(`/admin/v2/purchases/vendor-credits/${vendorCredit.id}`)
      }
      className={clsx(isActive && "table-active")}
    >
      <td>
        <div className={clsx("d-flex px-2 py-2 hover-lighten")}>
          <input type="checkbox" className="form-check-input me-3 mt-1" />
          <div className="d-flex justify-content-between w-100">
            {/* Left side */}
            <div>
              <div className="fw-medium fs-6">{vendorCredit.vendorName}</div>
              <small className="text-muted py-1">
                {vendorCredit.creditNoteNumber} &bull;{" "}
                {format(new Date(vendorCredit.vendorCreditDate), "dd MMM yyyy")}
              </small>
              {vendorCredit.subject && (
                <div className="mt-2 text-muted">{vendorCredit.subject}</div>
              )}
            </div>

            {/* Right side */}
            <div className="text-end">
              <div className="fw-medium fs-6">
                {vendorCredit.total != null
                  ? new Intl.NumberFormat("en-PH", {
                      style: "currency",
                      currency: "PHP",
                    }).format(vendorCredit.total)
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
