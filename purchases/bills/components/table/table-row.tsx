"use client";

//import EditButton from "../buttons/edit-button";
import DeleteButton from "../buttons/delete-button";
import { useRouter } from "next/navigation";
import { Bill } from "../../schema-and-types";

export default function BillTableRow({ bill }: { bill: Bill }) {
  const router = useRouter();

  return (
    <tr
      onClick={() => router.push(`/admin/v2/purchases/bills/${bill.id}`)}
      className="cursor-pointer"
    >
      <td className="text-primary">{bill.billNumber}</td>
      <td>{new Date(bill.billDate).toLocaleDateString()}</td>
      <td>{bill.vendorName ?? "-"}</td>
      <td>{bill.orderNumber ?? "-"}</td>
      <td>₱{bill.total.toLocaleString()}</td>
      <td>{bill.status ?? "Draft"}</td>

      {/* Actions */}
      <td className="d-flex gap-1">
        <button
          className="btn btn-sm btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/admin/v2/purchases/bills/${bill.id}/edit`);
          }}
        >
          Edit
        </button>
        <DeleteButton />
      </td>
    </tr>
  );
}
