import BillListDropdown from "./details/items-list/bills-list-dropdown";
import BillTable from "./components/table/bills-table";
import Link from "next/link";

export default function BillsPage() {
  return (
    <>
      {/* Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-2 page-header-breadcrumb">
        <div className="mt-4 ms-4">
          <BillListDropdown />
        </div>

        <div className="d-flex gap-2 mt-4 mt-md-0 me-4">
          <Link
            href={"/admin/v2/bills/new"}
            className="btn btn-sm text-white bg-primary"
          >
            + New
          </Link>
          <button className="btn btn-sm text-white bg-primary d-flex align-items-center justify-content-center">
            ...
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-n2">
        <BillTable />
      </div>
    </>
  );
}
