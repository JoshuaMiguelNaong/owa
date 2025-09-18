import PaymentMadeTableRow from "./payments-made-row";
import { getPayments } from "../../server-actions";
import { PaymentMade } from "../../schema-and-types";

const PaymentsMadeTable = async () => {
  const payments: PaymentMade[] = await getPayments();

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap table-hover">
            <thead>
              <tr>
                <th>Payment #</th>
                <th>Payment Date</th>
                <th>Vendor</th>
                <th>Payment Method</th>
                <th>Total Paid</th>
                <th>Bank Charges</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <PaymentMadeTableRow key={payment.id} payment={payment} />
              ))}
              {payments.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center">
                    No payments found.
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

export default PaymentsMadeTable;
