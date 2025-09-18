import CustomerHeading from "../panels/customer-heading";
import CustomerList from "../customer-list/customer-list";
import CustomerTabs from "../panels/customer-tabs";


export default async function CustomerDetailsPage({ params }: { params: { id: string } }) {

    const { id } = await params;
    console.log("CustomerDetailsPage", id)

    return (
        <>
            <div className="row g-4">
                <div className="col-md-3 col-xl-3 border-end border-gray-200 p-0">
                    <CustomerList id={id} />
                </div>

                <div className="col-md-9 col-xl-9">
                    <CustomerHeading id={id} />
                    <CustomerTabs id={id} />
                </div>
            </div>
        </>
    );
}