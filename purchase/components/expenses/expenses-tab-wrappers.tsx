import RecordExpenses from "./record-expenses";
import RecordMileage from "./record-mileage";
import BulkAddExpenses from "./bulk-add-expenses";

export default function ExpensesTabsWrapper({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const activeTab =
    searchParams?.tab === "mileage"
      ? "mileage"
      : searchParams?.tab === "bulk"
        ? "bulk"
        : "expense";

  return (
    <div>
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

      {/* Render selected form */}
      {activeTab === "expense" && <RecordExpenses />}
      {activeTab === "mileage" && <RecordMileage />}
      {activeTab === "bulk" && <BulkAddExpenses />}
    </div>
  );
}
