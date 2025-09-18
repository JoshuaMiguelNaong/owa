const VendorCreditsListDropdown = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Show: All Vendor Credits
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            All Vendor Credits
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Draft
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Open
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:void(0);">
            Applied
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

export default VendorCreditsListDropdown;
