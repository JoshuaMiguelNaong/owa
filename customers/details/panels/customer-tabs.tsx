import Overview from "../tabs/overview";
import Mails from "../tabs/mails";
import Comments from "../tabs/comments";
import Transactions from "../tabs/transactions/transactions";
import PDFStatementUI from "../tabs/statement";

export default function CustomerTabs({ id }: { id: string }) {
    const list = [
        { id: "overview-tab", pane: "overview-tab-pane", label: "Overview", selected: true, component: Overview },
        { id: "comments-tab", pane: "comments-tab-pane", label: "Comments", selected: false, component: Comments },
        { id: "transactions-tab", pane: "transactions-tab-pane", label: "Transactions", selected: false, component: Transactions },
        { id: "mails-tab", pane: "mails-tab-pane", label: "Mails", selected: false, component: Mails },
        { id: "statement-tab", pane: "statement-tab-pane", label: "Statement", selected: false, component: PDFStatementUI }
    ];

    return (
        <>
            <div>
                <ul
                    className="nav nav-tabs tab-style-2 mb-3 d-sm-flex d-block"
                    id="customer-tabs"
                    role="tablist"
                >
                    {list.map((tab) => (
                        <li key={tab.id} className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${tab.selected ? "active" : ""}`}
                                id={tab.id}
                                data-bs-toggle="tab"
                                data-bs-target={`#${tab.pane}`}
                                type="button"
                                role="tab"
                                aria-controls={tab.pane}
                                aria-selected={tab.selected}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="tab-content" id="customer-tabs-content">
                    {list.map((tab) => {
                        const Component = tab.component;

                        return (
                            <div key={tab.id}
                                className={`tab-pane fade text-muted ${tab.selected ? "show active" : ""}`}
                                id={tab.pane}
                                role="tabpanel"
                                aria-labelledby={tab.id}
                                tabIndex={0}
                            >
                                <Component id={id} />
                            </div>
                        );
                    }
                    )}
                </div>
            </div>
        </>
    );
}