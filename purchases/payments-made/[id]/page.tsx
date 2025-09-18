import PaymentsMadeHeading from "../details/panels/payments-made-headings";
import PaymentsMadeList from "../details/items-list/payments-made-list";
import PaymentsMadeTabs from "../details/panels/payments-made-tabs";

export default async function PaymentsMadeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log("PaymentsMadeDetailsPage", id);

  return (
    <div className="row g-4">
      {/* Left Side: List */}
      <div className="col-md-4 col-xl-4 border-end border-gray-200 p-0">
        <PaymentsMadeList id={id} />
      </div>

      {/* Right Side: Details */}
      <div className="col-md-8 col-xl-8">
        <PaymentsMadeHeading id={id} />
        <PaymentsMadeTabs id={id} />
      </div>
    </div>
  );
}
