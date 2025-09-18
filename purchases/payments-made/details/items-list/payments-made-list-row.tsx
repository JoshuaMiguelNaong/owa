"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { PaymentMade } from "../../schema-and-types";

export default function PaymentsMadeListRow({
  payment,
}: {
  payment: PaymentMade;
  isActive?: boolean;
}) {
  const router = useRouter();

  const date = payment.paymentDate;
  const vendorName = payment.vendorName;
  const totalPaid = payment.totalPaid;
  const paymentNumber = payment.id;
  const paymentMethod = payment.paymentMethod;

  return (
    <tr
      onClick={() =>
        router.push(`/admin/v2/purchases/payments-made/${payment.id}`)
      }
      className="cursor-pointer"
    >
      <td>
        <div className={clsx("d-flex px-2 py-2 hover-lighten")}>
          <input type="checkbox" className="form-check-input me-3 mt-1" />
          <div className="d-flex justify-content-between w-100">
            <div>
              <div className="fw-medium fs-6">{vendorName || "-"}</div>
              <small className="text-muted py-1">
                {paymentNumber}
                {date ? ` • ${format(new Date(date), "dd MMM yyyy")}` : ""}
                {paymentMethod ? ` • ${paymentMethod}` : ""}
              </small>
            </div>
            <div className="text-end">
              <div className="fw-medium fs-6">
                {totalPaid != null
                  ? new Intl.NumberFormat("en-PH", {
                      style: "currency",
                      currency: "PHP",
                    }).format(totalPaid)
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
