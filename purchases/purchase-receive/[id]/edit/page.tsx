import EditPurchaseReceiveForm from "../../components/purchase-receive-edit-form";
import { getPurchaseReceiveById } from "../../server-actions";

export default async function EditPurchaseReceivePage({
  params,
}: {
  params: { id: string };
}) {
  const purchaseReceive = await getPurchaseReceiveById(params.id);

  if (!purchaseReceive) {
    return <div className="p-4">Purchase receive not found</div>;
  }

  return <EditPurchaseReceiveForm purchaseReceive={purchaseReceive} />;
}
