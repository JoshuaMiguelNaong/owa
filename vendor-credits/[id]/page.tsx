// app/vendor-credits/[id]/page.tsx
import VendorCreditHeading from "../details/panels/vendor-credits-headings";
import VendorCreditList from "../details/items-list/vendor-credits-list";
import VendorCreditTabs from "../details/panels/vendor-credits-tabs";

export default async function VendorCreditDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log("VendorCreditDetailsPage", id);

  return (
    <div className="row g-4">
      {/* Left Side: List */}
      <div className="col-md-4 col-xl-4 border-end border-gray-200 p-0">
        <VendorCreditList id={id} />
      </div>

      {/* Right Side: Details */}
      <div className="col-md-8 col-xl-8">
        <VendorCreditHeading id={id} />
        <VendorCreditTabs id={id} />
      </div>
    </div>
  );
}
