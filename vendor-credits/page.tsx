// app/vendor-credits/page.tsx
import VendorCreditListDropdown from "./details/items-list/vendor-credits-list-dropdown";
import VendorCreditTable from "./components/table/vendor-credits-table";
import Link from "next/link";

export default function VendorCreditsPage() {
  return (
    <>
      {/* Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-2 page-header-breadcrumb">
        <div className="mt-4 ms-4">
          <VendorCreditListDropdown />
        </div>

        <div className="d-flex gap-2 mt-4 mt-md-0 me-4">
          <Link
            href={"/admin/v2/purchases/vendor-credits/new"}
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
        <VendorCreditTable />
      </div>
    </>
  );
}
