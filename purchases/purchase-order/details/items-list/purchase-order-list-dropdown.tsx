const PurchaseOrderListDropdown = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Show: All Purchase Orders
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            All Purchase Orders
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Draft
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Issued
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Received
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Cancelled
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Overdue
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PurchaseOrderListDropdown;
