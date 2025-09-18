const PurchaseReceiveListDropdown = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Show: All Purchase Receives
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            All Purchase Receives
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Draft
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Partially Received
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Fully Received
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Cancelled
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PurchaseReceiveListDropdown;
