import PurchaseReceiveTableRow from "./purchase-receive-table-row";
import { getPurchaseReceive } from "../../server-actions";
import { PurchaseReceiveFormData } from "../../schema-and-types";

const PurchaseReceiveTable = async () => {
  const purchaseReceives: PurchaseReceiveFormData[] =
    await getPurchaseReceive();

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap table-hover">
            <thead>
              <tr>
                <th>Receive #</th>
                <th>PO Number</th>
                <th>Vendor</th>
                <th>Delivery Address</th>
                <th>Receive Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchaseReceives.map((receive) => (
                <PurchaseReceiveTableRow
                  key={receive.id}
                  purchaseReceive={receive}
                />
              ))}
              {purchaseReceives.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center">
                    No purchase receives found.
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

export default PurchaseReceiveTable;
