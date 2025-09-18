
import EditButton from '../buttons/edit-button';
import DeleteButton from '../buttons/delete-button';
import Link from 'next/link';
import CustomerTableRow from './customer-table-row';

export interface Customer {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    taxId: string;
    status: string;
    notes: string;
}

const CustomerTable = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/customers`);
    const { customers }: { customers: Customer[] } = await res.json();

    return (
        <>
            <div className="row g-4">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered text-nowrap table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>TIN</th>
                                    <th>Status</th>
                                    <th>Notes</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <CustomerTableRow key={customer.id} customer={customer} />
                                ))}
                                {customers.length === 0 && (
                                    <tr>
                                        <td colSpan={9} className="text-center">No customers found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerTable;
