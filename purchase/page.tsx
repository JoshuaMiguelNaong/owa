// ✅ No "use client" — this is now a Server Component

import VendorForm from "@/app/admin/v2/purchase/components/vendors/add-new-vendor";
import OtherDetailsTab from "@/app/admin/v2/purchase/components/vendors/other-details";
import AddressTab from "@/app/admin/v2/purchase/components/vendors/address-form";
import ContactPersonsTab from "@/app/admin/v2/purchase/components/vendors/contact-person-form";
import CustomFieldsTab from "@/app/admin/v2/purchase/components/vendors/custom-field-tags";
import ReportingTagsTab from "@/app/admin/v2/purchase/components/vendors/reporting-tags";
import RemarksTab from "@/app/admin/v2/purchase/components/vendors/remarks";
import Link from "next/link";

export default function VendorRegistrationPage({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const activeTab = searchParams?.tab || "other";

  return (
    <main className="container py-4">
      {/* Main Vendor Form */}
      <VendorForm />

      {/* Bootstrap Navigation Tabs */}
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <a
            href="?tab=other"
            className={`nav-link ${activeTab === "other" ? "active" : ""}`}
          >
            Other Details
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=address"
            className={`nav-link ${activeTab === "address" ? "active" : ""}`}
          >
            Address
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=contacts"
            className={`nav-link ${activeTab === "contacts" ? "active" : ""}`}
          >
            Contact Persons
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=custom"
            className={`nav-link ${activeTab === "custom" ? "active" : ""}`}
          >
            Custom Fields
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=reporting"
            className={`nav-link ${activeTab === "reporting" ? "active" : ""}`}
          >
            Reporting Tags
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=remarks"
            className={`nav-link ${activeTab === "remarks" ? "active" : ""}`}
          >
            Remarks
          </a>
        </li>
      </ul>

      {/* Tab Content Rendering */}
      {activeTab === "other" && <OtherDetailsTab />}
      {activeTab === "address" && <AddressTab />}
      {activeTab === "contacts" && <ContactPersonsTab />}
      {activeTab === "custom" && <CustomFieldsTab />}
      {activeTab === "reporting" && <ReportingTagsTab />}
      {activeTab === "remarks" && <RemarksTab />}

      {/* Save and Cancel Buttons */}
      <div className="mt-4 d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link href="/admin/v2/purchase/vendors" className="btn btn-secondary">
          Cancel
        </Link>
      </div>
    </main>
  );
}
