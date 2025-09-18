import EditPaymentMadeForm from "../../components/payments-made-edit-form";
import { getPaymentsById } from "../../server-actions";

export default async function EditPaymentsMadePage({
  params,
}: {
  params: { id: string };
}) {
  const payment = await getPaymentsById(params.id);

  if (!payment) {
    return <div className="p-4">Payment Made not found</div>;
  }

  return <EditPaymentMadeForm payment={payment} />;
}
