
const Overview = async ({ id }: { id: string }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/customers/${id}`);
    const { customer } = await res.json()

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card custom-card mb-4">
                        <div className="card-header">
                            <div className="card-title">{customer.company}</div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-column flex-sm-row align-items-start">
                                <div className="me-sm-3 mb-3 mb-sm-0">
                                    <div
                                        className="avatar avatar-xl rounded-circle bg-light d-flex align-items-center justify-content-center"
                                        style={{ width: '70px', height: '70px' }}
                                    >
                                        <i className="ri-user-line fs-24 text-muted"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 fw-semibold d-flex align-items-center">
                                        {customer.name}
                                        <i className="ri-settings-line ms-2 text-muted"></i>
                                    </h6>
                                    <p className="text-muted mb-2">{customer.email}</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="ri-phone-line me-2 text-muted"></i>
                                        <span>{customer.phone}</span>
                                    </div>
                                    <div className="mb-2">
                                        <span className={`badge ${customer.status === 'Active' ? 'bg-success' : 'bg-warning'} text-white`}>
                                            {customer.status.toUpperCase()}
                                        </span>
                                    </div>
                                    <button className="btn btn-link btn-sm p-0 text-primary">Re-invite</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card custom-card mb-4">
                        <div className="card-header d-flex align-items-center">
                            <div className="card-title">ADDRESS</div>
                            <i className="ri-arrow-up-s-line ms-auto"></i>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h6 className="fw-semibold mb-2">Billing Address</h6>
                                <p className="text-muted mb-0">
                                    {customer.address} - <a href="#" className="text-primary">New Address</a>
                                </p>
                            </div>
                            <div>
                                <h6 className="fw-semibold mb-2">Shipping Address</h6>
                                <p className="text-muted mb-0">
                                    {customer.address} - <a href="#" className="text-primary">New Address</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card custom-card">
                        <div className="card-header d-flex align-items-center">
                            <div className="card-title">OTHER DETAILS</div>
                            <i className="ri-arrow-up-s-line ms-auto"></i>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-6 text-muted">Tax ID</div>
                                <div className="col-6 fw-semibold">{customer.taxId}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 text-muted">Status</div>
                                <div className="col-6 fw-semibold">{customer.status}</div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 text-muted">Notes</div>
                                <div className="col-6 fw-semibold">{customer.notes || '—'}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card custom-card mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <i className="ri-star-line text-primary me-2 fs-18"></i>
                                    <h6 className="mb-0 fw-semibold">WHAT'S NEXT?</h6>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-primary btn-sm">New Invoice</button>
                                    <i className="ri-more-line"></i>
                                </div>
                            </div>
                            <p className="text-muted mb-0">Create an invoice and send it to your customer.</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h6 className="fw-semibold mb-2">Payment due period</h6>
                        <p className="mb-0">15 days</p>
                    </div>

                    <div className="card custom-card mb-4">
                        <div className="card-header">
                            <div className="card-title">Receivables</div>
                        </div>
                        <div className="card-body">
                            <div className="row text-center mb-4">
                                <div className="col-4">
                                    <div className="border-end">
                                        <small className="text-muted text-uppercase d-block mb-1">Currency</small>
                                        <span className="fw-semibold fs-12">PHP - Philippine Peso</span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="border-end">
                                        <small className="text-muted text-uppercase d-block mb-1">Outstanding Receivables</small>
                                        <span className="fw-semibold">₱25,000</span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <small className="text-muted text-uppercase d-block mb-1">Unused Credits</small>
                                    <span className="fw-semibold">₱5,000</span>
                                </div>
                            </div>

                            <div className="row text-center">
                                <div className="col-6">
                                    <span className="text-muted">Items to be packed: </span>
                                    <span className="text-danger fw-bold">3</span>
                                </div>
                                <div className="col-6">
                                    <span className="text-muted">Items to be shipped: </span>
                                    <span className="text-danger fw-bold">2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Comments & History</div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="bg-light border rounded text-center px-3 py-2" style={{ minWidth: '80px' }}>
                                        <div className="fw-semibold fs-12">Aug 1, 2025</div>
                                        <div className="text-muted fs-11">10:45 AM</div>
                                    </div>
                                </div>
                                <div className="col ps-0">
                                    <ul className="list-unstyled border-start border-2 ps-4 ms-2">
                                        <li className="position-relative mb-4">
                                            <span
                                                className="position-absolute top-0 start-0 translate-middle"
                                                style={{ width: '12px', height: '12px' }}
                                            ></span>
                                            <div className="mb-1 fw-semibold">You</div>
                                            <div className="text-muted small mb-1">Customer confirmed delivery date.</div>
                                            <div className="text-muted fs-12">Aug 6, 2025 at 3:42 PM</div>
                                        </li>

                                        <li className="position-relative mb-4">
                                            <span
                                                className="position-absolute top-0 start-0 translate-middle"
                                                style={{ width: '12px', height: '12px' }}
                                            ></span>
                                            <div className="mb-1 fw-semibold">System</div>
                                            <div className="text-muted small mb-1">Invoice sent to customer email.</div>
                                            <div className="text-muted fs-12">Aug 6, 2025 at 3:30 PM</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;
