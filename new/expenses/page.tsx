"use client";

import React, { useState } from "react";
import RecordExpenses from "../../components/expenses/record-expenses";
import RecordMileage from "../../components/expenses/record-mileage";
import BulkAddExpenses from "../../components/expenses/bulk-add-expenses";

export default function NewPurchasePage() {
  const [activeTab, setActiveTab] = useState<"expense" | "mileage" | "bulk">(
    "expense"
  );

  return (
    <main className="container py-4">
      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "expense" ? "active" : ""}`}
            onClick={() => setActiveTab("expense")}
          >
            Record Expense
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "mileage" ? "active" : ""}`}
            onClick={() => setActiveTab("mileage")}
          >
            Record Mileage
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "bulk" ? "active" : ""}`}
            onClick={() => setActiveTab("bulk")}
          >
            Bulk Add Expenses
          </button>
        </li>
      </ul>

      {/* Render Form Based on Active Tab */}
      {activeTab === "expense" && <RecordExpenses />}
      {activeTab === "mileage" && <RecordMileage />}
      {activeTab === "bulk" && <BulkAddExpenses />}
    </main>
  );
}
