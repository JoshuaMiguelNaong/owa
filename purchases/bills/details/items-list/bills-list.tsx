import { getBills } from "../../server-actions";
import BillsListDropdown from "./bills-list-dropdown";
import BillsListRow from "./bills-list-row";

const BillsList = async ({ id }: { id: string }) => {
  const bills = await getBills();

  return (
    <>
      {/* Header actions */}
      <div className="d-flex justify-content-between align-items-center py-3 px-2">
        <BillsListDropdown />
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-primary btn-sm d-flex align-items-center">
            <i className="ri-add-line"></i>
          </button>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary btn-sm"
              type="button"
              id="moreActionsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-more-2-fill"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="moreActionsDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="ri-arrow-up-down-line me-1"></i> Sort By
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="ri-download-2-line me-1"></i> Import
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="ri-upload-2-line me-1"></i> Export
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="ri-refresh-line me-1"></i> Refresh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bills table */}
      <div>
        <div className="table-responsive">
          <table className="table text-nowrap table-hover">
            <tbody>
              {bills.map((bill) => (
                <BillsListRow
                  key={bill.id}
                  bill={bill}
                  isActive={bill.id === id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BillsList;
