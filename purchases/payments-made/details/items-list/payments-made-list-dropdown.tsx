const PaymentsMadeListDropdown = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Show: All Payments
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            All Payments
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Recent
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Bank Transfer
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Cash
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Check
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Refunds
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            By Vendor
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PaymentsMadeListDropdown;
