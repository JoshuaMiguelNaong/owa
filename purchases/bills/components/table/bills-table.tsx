import BillTableRow from "./table-row";
import { getBills } from "../../server-actions";
import { Bill } from "../../schema-and-types";

const BillsTable = async () => {
  const bills: Bill[] = await getBills();

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap table-hover">
            <thead>
              <tr>
                <th>Bill Number</th>
                <th>Bill Date</th>
                <th>Vendor</th>
                <th>Order Number</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <BillTableRow key={bill.id} bill={bill} />
              ))}
              {bills.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center">
                    No bills found.
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

export default BillsTable;
