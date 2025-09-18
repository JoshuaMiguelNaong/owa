// app/new-purchase/page.tsx (Server Component)
import RecordExpenses from "../../components/expenses/record-expenses";
import RecordMileage from "../../components/expenses/record-mileage";
import BulkAddExpenses from "../../components/expenses/bulk-add-expenses";

export default function NewPurchasePage({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const activeTab = searchParams?.tab || "expense";

  return (
    <main className="container py-4">
      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a
            href="?tab=expense"
            className={`nav-link ${activeTab === "expense" ? "active" : ""}`}
          >
            Record Expense
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=mileage"
            className={`nav-link ${activeTab === "mileage" ? "active" : ""}`}
          >
            Record Mileage
          </a>
        </li>
        <li className="nav-item">
          <a
            href="?tab=bulk"
            className={`nav-link ${activeTab === "bulk" ? "active" : ""}`}
          >
            Bulk Add Expenses
          </a>
        </li>
      </ul>

      {/* Render form based on active tab */}
      {activeTab === "expense" && <RecordExpenses />}
      {activeTab === "mileage" && <RecordMileage />}
      {activeTab === "bulk" && <BulkAddExpenses />}
    </main>
  );
}
