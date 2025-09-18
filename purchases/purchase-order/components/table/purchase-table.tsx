import PurchaseOrderTableRow from "./table-row";
import { getPurchaseOrders } from "../../server-actions";
import { PurchaseOrderFormData } from "../../schema-and-types";

const PurchaseOrderTable = async () => {
  const purchaseOrders: PurchaseOrderFormData[] = await getPurchaseOrders();

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap table-hover">
            <thead>
              <tr>
                <th>PO Number</th>
                <th>Date</th>
                <th>Vendor</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((order) => (
                <PurchaseOrderTableRow key={order.id} purchaseOrder={order} />
              ))}
              {purchaseOrders.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center">
                    No purchase orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderTable;
