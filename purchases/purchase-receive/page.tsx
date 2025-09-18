import PurchaseReceiveListDropdown from "./details/items-list/purchase-receive-list-dropdown";
import PurchaseReceiveTable from "./components/table/purchase-receive-table";
import Link from "next/link";

export default function PurchaseReceivePage() {
  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-2 page-header-breadcrumb">
        <div className="mt-4 ms-4">
          <PurchaseReceiveListDropdown />
        </div>

        <div className="d-flex gap-2 mt-4 mt-md-0 me-4">
          <Link
            href={"/admin/v2/purchases/purchase-receive/new"}
            className="btn btn-sm text-white bg-primary"
          >
            + New
          </Link>
          <button className="btn btn-sm text-white bg-primary d-flex align-items-center justify-content-center">
            ...
          </button>
        </div>
      </div>

      <div className="mt-n2">
        <PurchaseReceiveTable />
      </div>
    </>
  );
}
