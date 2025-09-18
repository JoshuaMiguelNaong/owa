import { getAllPurchaseOrders } from "../server-actions";
import DeleteButton from "./delete-button";
import EditButton from "./edit-button";
import NewButton from "./new-button";
import { format } from "date-fns";

export default async function PurchaseOrderTable() {
  const purchases = await getAllPurchaseOrders();

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card custom-card">
            <div className="card-header d-sm-flex d-block">
              <div className="card-title">Purchase Orders List</div>
              <div className="tab-menu-heading border-0 p-0 ms-auto mt-sm-0 mt-2"></div>
              <div className="mt-sm-0 mt-2">
                <NewButton />
              </div>
            </div>
            <div className="card-body px-1 py-2">
              <div className="tab-content p-0">
                <div className="tab-pane active p-0 border-0" id="Active">
                  <div className="table-responsive">
                    <table className="table text-nowrap table-hover table-bordered table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th>Reference #</th>
                          <th>Supplier</th>
                          <th>Order Date</th>
                          <th>Delivery Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {purchases.map((p, idx) => (
                          <tr key={idx}>
                            <td>{p.referenceNumber}</td>
                            <td>
                              {p.supplier?.companyName ?? "<no supplier>"}
                            </td>

                            <td>
                              {format(new Date(p.orderDate), "MM/dd/yyyy")}
                            </td>
                            <td>
                              {p.deliveryDate
                                ? format(new Date(p.deliveryDate), "MM/dd/yyyy")
                                : "-"}
                            </td>
                            <td>
                              {" "}
                              <span
                                className={`badge ${p.status.toUpperCase() === "ACTIVE" ? "bg-success" : "bg-danger"}`}
                              >
                                {p.status}{" "}
                              </span>
                            </td>

                            <td className="d-flex gap-1">
                              <DeleteButton id={p.id!} />
                              <EditButton po={p} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-top-0">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div>
                  <div className="d-flex align-items-center">
                    <div>Showing {purchases.length} Entries</div>
                    <div className="transform-arrow ms-2">
                      <i className="bi bi-arrow-right fw-semibold" />
                    </div>
                  </div>
                </div>
                <div>
                  <nav
                    aria-label="Page navigation"
                    className="pagination-style-4"
                  >
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="javascript:void(0);">
                          Prev
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="javascript:void(0);">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link text-primary"
                          href="javascript:void(0);"
                        >
                          next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
