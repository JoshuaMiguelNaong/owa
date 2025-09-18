import { Bill } from "../../schema-and-types";
import { getBillsById } from "../../server-actions";

export default async function BillsHeading({ id }: { id: string }) {
  const bill: (Bill & { id: string }) | undefined = await getBillsById(id);

  if (!bill) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No bill found</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-2 p-2">
      {/* Title / Total Amount */}
      <h1 className="page-title fw-semibold fs-18 mb-3 mb-md-0">
        {bill.total?.toFixed(2) ?? "0.00"}
      </h1>

      {/* Vendor & Reference Info */}
      <div className="small text-muted">
        {bill.vendorName && <span>{bill.vendorName} • </span>}
        {bill.billNumber && <span>Bill#: {bill.billNumber}</span>}
        {bill.referenceNumber && (
          <>
            {" • "}
            <span>Ref: {bill.referenceNumber}</span>
          </>
        )}
      </div>

      {/* Action Buttons */}
      <div className="d-flex align-items-center gap-2 flex-wrap">
        <button className="btn btn-sm bg-white border border-black text-black">
          Edit
        </button>
        <button className="btn btn-sm bg-white border border-black text-black">
          <i className="ri-attachment-line"></i>
        </button>

        {/* More Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-sm bg-primary border border-black text-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                View History
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Change Status
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Delete Bill
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Duplicate Bill
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Print
              </a>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-sm bg-white border border-black text-black dropdown-toggle"
          type="button"
        >
          More
        </button>
        <button className="btn btn-sm bg-white border border-black text-black">
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
}
