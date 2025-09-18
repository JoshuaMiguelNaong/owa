
import { getAllSuppliersIdAndName } from "@/lib/cache/server-cache";

import PurchaseTable from "./components/purchase-table";
import { PurchaseModal } from "./components/purchase-modal";

export default async function PurchaseOrderPage() {

  const suppliers = await getAllSuppliersIdAndName();

  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">Categories</h1>
        <div className="ms-md-1 ms-0">
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Categories</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* <div className="row">
                  <div className="col-sm-12">
                      <div className="card custom-card border border-info">
                          <div c  lassName="card-header">
                              <div className="card-title text-primary">Category</div>
                          </div>
                          <div className="card-body px-4">
                              <CategoryForm />
                          </div>
                      </div>
  
                  </div>
              </div> */}

      <PurchaseModal suppliers={suppliers} />
      <PurchaseTable />
    </>
  );
}
