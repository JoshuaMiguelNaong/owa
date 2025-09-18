import { PurchaseReceiveFormData } from "../../schema-and-types";
import { getPurchaseReceiveById } from "../../server-actions";

export default async function PurchaseReceiveHeading({ id }: { id: string }) {
  const purchaseReceive:
    | (PurchaseReceiveFormData & { id: string })
    | undefined = await getPurchaseReceiveById(id);

  if (!purchaseReceive) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No purchase receive found</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-2 p-2">
      {/* Title / Total Amount */}
      <h1 className="page-title fw-semibold fs-18 mb-3 mb-md-0">
        {purchaseReceive.total?.toFixed(2) ?? "0.00"}
      </h1>

      {/* Vendor & Reference Info */}
      <div className="small text-muted">
        {purchaseReceive.vendorName && (
          <span>{purchaseReceive.vendorName} • </span>
        )}
        {purchaseReceive.purchaseReceiveNumber && (
          <span>PR#: {purchaseReceive.purchaseReceiveNumber}</span>
        )}
        {purchaseReceive.referenceNumber && (
          <>
            {" • "}
            <span>Ref: {purchaseReceive.referenceNumber}</span>
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
                Delete Purchase Receive
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Duplicate Purchase Receive
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Convert to Bill
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
