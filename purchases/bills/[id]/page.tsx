// app/bills/[id]/page.tsx
import BillHeading from "../details/panels/bill-headings";
import BillList from "../details/items-list/bills-list";
import BillTabs from "../details/panels/bill-tabs";

export default async function BillDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log("BillDetailsPage", id);

  return (
    <div className="row g-4">
      {/* Left Side: List */}
      <div className="col-md-4 col-xl-4 border-end border-gray-200 p-0">
        <BillList id={id} />
      </div>

      {/* Right Side: Details */}
      <div className="col-md-8 col-xl-8">
        <BillHeading id={id} />
        <BillTabs id={id} />
      </div>
    </div>
  );
}
