
import EditBillForm from "../../components/bills-edit-form";
import { getBillsById } from "../../server-actions";

export default async function EditBillPage({
  params,
}: {
  params: { id: string };
}) {
  const bill = await getBillsById(params.id);

  if (!bill) {
    return <div className="p-4">Bill not found</div>;
  }

  return <EditBillForm bill={bill} />;
}
