"use client";

import { Customer } from "./customer-table";
import EditButton from "../buttons/edit-button";
import DeleteButton from "../buttons/delete-button";
import { useRouter } from "next/navigation";

export default function CustomerTableRow({ customer }: { customer: Customer }) {
    const router = useRouter();
    return (
        <tr onClick={() => router.push(`/admin/v2/sales/customers/details/${customer.id}`)}>
            <td className="text-primary">
                {customer.name}
            </td>
            <td>{customer.company}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
            <td>{customer.taxId}</td>
            <td><span className={`badge bg-info`}>{customer.status}</span></td>
            <td>{customer.notes}</td>
            <td className="d-flex gap-1">
                <EditButton />
                <DeleteButton />
            </td>
        </tr>
    );
}