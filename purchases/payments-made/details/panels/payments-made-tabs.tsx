import Overview from "../tabs/overview";
import PaymentMadeDownloadPDF from "../tabs/download-pdf";
import PaymentMadeEmail from "../tabs/email"; 

export default function PaymentsMadeTabs({ id }: { id: string }) {
  const list = [
    {
      id: "overview-tab",
      pane: "overview-tab-pane",
      label: "Overview",
      selected: true,
      component: Overview,
    },
    {
      id: "email-tab",
      pane: "email-tab-pane",
      label: "Email",
      selected: false,
      component: PaymentMadeEmail,
    }, 
    {
      id: "download-pdf-tab",
      pane: "download-pdf-tab-pane",
      label: "Download PDF",
      selected: false,
      component: PaymentMadeDownloadPDF,
    },
  ];

  return (
    <div>
      <ul
        className="nav nav-tabs tab-style-2 mb-3 d-sm-flex d-block"
        id="payments-made-tabs"
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

      <div className="tab-content" id="payments-made-tabs-content">
        {list.map((tab) => {
          const Component = tab.component;
          return (
            <div
              key={tab.id}
              className={`tab-pane fade text-muted ${tab.selected ? "show active" : ""}`}
              id={tab.pane}
              role="tabpanel"
              aria-labelledby={tab.id}
              tabIndex={0}
            >
              <Component id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
