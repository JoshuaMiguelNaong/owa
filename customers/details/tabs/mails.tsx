import { format } from "date-fns";
import { Email } from "../../schema-and-types";


const Mails = async ({ id }: { id: string }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/customers/${id}/mails`);
    const { mails }: { mails: Email[] } = await res.json();

    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-2 py-3 border-bottom">
                <div className="fw-bold d-flex align-items-center">
                    System Mails
                </div>
                <div className="dropdown">
                    <a
                        className="btn btn-sm text-black bg-gray-400 dropdown-toggle"
                        href="javascript:void(0);"
                        role="button"
                        id="dropdownMenuLink1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="ri-mail-line me-1 align-middle"></i>
                        Link Email Account
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                        <li><a className="dropdown-item" href="javascript:void(0);">Outlook</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">Zoho Mail</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">Link with work account</a></li>
                    </ul>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <tbody>
                        {mails.map((email) => (
                            <tr key={email.id}>
                                <td width="75%" className="px-2 py-3 text-nowrap">
                                    <span
                                        className="d-inline-flex align-items-center justify-content-center rounded-circle bg-secondary text-white"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            fontSize: "14px",
                                            lineHeight: "1",
                                        }}
                                    >
                                        {email.to.charAt(0).toUpperCase()}
                                    </span>
                                    <div className="ms-4 align-middle text-wrap d-inline-block w-90">
                                        <span className="text-black">To</span>{" "}
                                        <strong className="text-medium text-black">{email.to}</strong>
                                        <div>
                                            <span className="text-black">{email.subject}</span> -{" "}
                                            <span className="text-primary">{email.body}</span>
                                        </div>
                                    </div>
                                </td>
                                <td width="25%" className="text-end text-primary px-5 py-3">
                                    {format(email.dateTime, "dd MMM yyyy hh:mm a")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Mails;
