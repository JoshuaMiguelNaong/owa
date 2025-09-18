import { PaymentMade } from "../../schema-and-types";
import { getPaymentsById } from "../../server-actions";

export default async function PaymentsMadeHeading({ id }: { id: string }) {
  const payment: PaymentMade | undefined = await getPaymentsById(id);

  if (!payment) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No payment found</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-2 p-2">
      {/* Title / Total Paid */}
      <h1 className="page-title fw-semibold fs-18 mb-3 mb-md-0">
        {payment.totalPaid?.toFixed(2) ?? "0.00"}
      </h1>

      {/* Vendor & Reference Info */}
      <div className="small text-muted">
        {payment.vendorName && <span>{payment.vendorName} • </span>}
        {payment.id && <span>Payment#: {payment.id}</span>}
        {payment.referenceNumber && (
          <>
            {" • "}
            <span>Ref: {payment.referenceNumber}</span>
          </>
        )}
        {payment.paymentMethod && (
          <>
            {" • "}
            <span>Method: {payment.paymentMethod}</span>
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
                Delete Payment
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Duplicate Payment
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
