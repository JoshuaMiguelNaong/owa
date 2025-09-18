"use client";

import DeleteButton from "../buttons/delete-button";
import { useRouter } from "next/navigation";
import { VendorCredit } from "../../schema-and-types";

export default function VendorCreditTableRow({
  vendorCredit,
}: {
  vendorCredit: VendorCredit;
}) {
  const router = useRouter();

  return (
    <tr
      onClick={() =>
        router.push(`/admin/v2/purchases/vendor-credits/${vendorCredit.id}`)
      }
      className="cursor-pointer"
    >
      {/* ID / Credit Note Number */}
      <td className="text-primary">{vendorCredit.creditNoteNumber}</td>

      {/* Date */}
      <td>{new Date(vendorCredit.vendorCreditDate).toLocaleDateString()}</td>

      {/* Vendor Name */}
      <td>{vendorCredit.vendorName ?? "-"}</td>

      {/* Subject */}
      <td>{vendorCredit.subject ?? "-"}</td>

      {/* Subtotal */}
      <td>
        ₱
        {vendorCredit.subTotal?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </td>

      {/* Discount */}
      <td>
        {vendorCredit.discount?.percent
          ? `${vendorCredit.discount.percent}%`
          : "-"}
      </td>

      {/* Total */}
      <td>
        ₱
        {vendorCredit.total?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </td>

      {/* Actions */}
      <td className="d-flex gap-1">
        <button
          className="btn btn-sm btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            router.push(
              `/admin/v2/purchases/vendor-credits/${vendorCredit.id}/edit`
            );
          }}
        >
          Edit
        </button>
        <DeleteButton />
      </td>
    </tr>
  );
}
