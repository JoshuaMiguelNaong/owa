import CustomerListDropdown from './details/customer-list/customer-list-dropdown';
import CustomerTable from './components/customer-table/customer-table';
import Link from 'next/link';

export default function CustomerPage() {
  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-2 page-header-breadcrumb">
        <div className="mt-4 ms-4">
          <CustomerListDropdown />
        </div>

        <div className="d-flex gap-2 mt-4 mt-md-0 me-4">
          <Link href={"/admin/v2/sales/customers/new"} className="btn btn-sm text-white bg-primary">
            + New
          </Link>
          <button className="btn btn-sm text-white bg-primary d-flex align-items-center justify-content-center">
            ...
          </button>
        </div>
      </div>

      <div className="mt-n2">
        <CustomerTable />
      </div>
    </>
  );
}
