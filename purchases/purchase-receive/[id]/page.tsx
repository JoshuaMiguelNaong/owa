import ItemHeading from "../details/panels/purchase-receive-headings";
import PurchaseReceiveList from "../details/items-list/purchase-receive-list";
import PurchaseReceiveTabs from "../details/panels/purchase-receive-tabs";

export default async function PurchaseReceiveDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log("PurchaseReceiveDetailsPage", id);

  return (
    <div className="row g-4">
      {/* Left Side: List */}
      <div className="col-md-4 col-xl-4 border-end border-gray-200 p-0">
        <PurchaseReceiveList id={id} />
      </div>

      {/* Right Side: Details */}
      <div className="col-md-8 col-xl-8">
        <ItemHeading id={id} />
        <PurchaseReceiveTabs id={id} />
      </div>
    </div>
  );
}
