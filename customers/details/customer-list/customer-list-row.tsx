"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Customer } from "../../schema-and-types";

export default function CustomerListRow({ customer }: { customer: Customer }) {
    const router = useRouter();

    return (
        <tr onClick={() => router.push(`/admin/v2/sales/customers/details/${customer.id}`)}>
            <td>
                <div className={clsx(`d-flex px-2 py-2 hover-lighten`)}>
                    <input type="checkbox" className="form-check-input me-3 mt-1" />
                    <div>
                        <div className="fw-medium fs-6">{customer.name}</div>
                        <small className="text-muted py-1">{customer.email} </small>
                    </div>
                </div>
            </td>

        </tr>
    );
}