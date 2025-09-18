import EditVendorCreditForm from "../../components/vendor-credits-edit-form";
import { getVendorCreditsById } from "../../server-actions";

export default async function EditVendorCreditPage({
  params,
}: {
  params: { id: string };
}) {
  const vendorCredit = await getVendorCreditsById(params.id);

  if (!vendorCredit) {
    return <div className="p-4">Vendor Credit not found</div>;
  }

  return <EditVendorCreditForm vendorCredit={vendorCredit} />;
}
