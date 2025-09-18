import { Customer } from "../../schema-and-types";

export default async function CustomerHeading({ id }: { id: string }) {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/customers/${id}`);
    const { customer }: { customer: Customer } = await res.json();

    return (
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-2 p-2">
            <h1 className="page-title fw-semibold fs-18 mb-3 mb-md-0">{customer.name}</h1>
            <div className="d-flex align-items-center gap-2 flex-wrap">
                <button className="btn btn-sm bg-white border border-black text-black">Edit</button>
                <button className="btn btn-sm bg-white border border-black text-black">
                    <i className="ri-attachment-line"></i>
                </button>
                <div className="dropdown">
                    <button
                        className="btn btn-sm bg-primary border border-black text-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        New Transaction
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Invoices</a></li>
                        <li><a className="dropdown-item" href="#">Customer Payments</a></li>
                        <li><a className="dropdown-item" href="#">Sales Orders</a></li>
                        <li><a className="dropdown-item" href="#">Packages</a></li>
                        <li><a className="dropdown-item" href="#">Expenses</a></li>
                        <li><a className="dropdown-item" href="#">Bills</a></li>
                        <li><a className="dropdown-item" href="#">Credit Notes</a></li>
                        <li><a className="dropdown-item" href="#">Sales Receipts</a></li>
                    </ul>
                </div>
                <button className="btn btn-sm bg-white border border-black text-black dropdown-toggle" type="button">
                    More
                </button>
                <button className="btn btn-sm bg-white border border-black text-black">
                    <i className="ri-close-line"></i>
                </button>
            </div>
        </div>
    );
}