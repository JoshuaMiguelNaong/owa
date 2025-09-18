import VendorCreditTableRow from "./vendor-credits-row";
import { getVendorCredits } from "../../server-actions";
import { VendorCredit } from "../../schema-and-types";

const VendorCreditsTable = async () => {
  const vendorCredits: VendorCredit[] = await getVendorCredits();

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap table-hover">
            <thead>
              <tr>
                <th>Credit Note #</th>
                <th>Date</th>
                <th>Vendor</th>
                <th>Subject</th>
                <th>Subtotal</th>
                <th>Discount</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendorCredits.map((vendorCredit) => (
                <VendorCreditTableRow
                  key={vendorCredit.id}
                  vendorCredit={vendorCredit}
                />
              ))}
              {vendorCredits.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center">
                    No vendor credits found.
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

export default VendorCreditsTable;
