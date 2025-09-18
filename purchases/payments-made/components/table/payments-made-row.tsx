"use client";

import DeleteButton from "../buttons/delete-button";
import { useRouter } from "next/navigation";
import { PaymentMade } from "../../schema-and-types";

export default function PaymentMadeTableRow({
  payment,
}: {
  payment: PaymentMade;
}) {
  const router = useRouter();

  return (
    <tr
      onClick={() =>
        router.push(`/admin/v2/purchases/payments-made/${payment.id}`)
      }
      className="cursor-pointer"
    >
      <td className="text-primary">{payment.id}</td>
      <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
      <td>{payment.vendorName ?? "-"}</td>
      <td>{payment.paymentMethod ?? "-"}</td>
      <td>
        ₱
        {payment.totalPaid?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </td>
      <td>
        ₱
        {payment.bankCharges?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        }) ?? "0.00"}
      </td>

      {/* Actions */}
      <td className="d-flex gap-1">
        <button
          className="btn btn-sm btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/admin/v2/purchases/payments-made/${payment.id}/edit`);
          }}
        >
          Edit
        </button>
        <DeleteButton />
      </td>
    </tr>
  );
}
