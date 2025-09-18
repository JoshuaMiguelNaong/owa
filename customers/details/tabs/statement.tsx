'use client';

import React from 'react';

export default function PDFStatementUI({ id }: { id: string }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2 p-2">
                        <div className="d-flex flex-wrap align-items-center gap-2">
                            <div className="dropdown">
                                <a
                                    className="btn btn-sm text-black bg-gray-400 dropdown-toggle"
                                    href="javascript:void(0);"
                                    role="button"
                                    id="dropdownMenuLink1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="ri-calendar-line me-1 align-middle"></i>
                                    This Month
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><a className="dropdown-item" href="javascript:void(0);">This Year</a></li>
                                    <li><a className="dropdown-item" href="javascript:void(0);">This Day</a></li>
                                    <li><a className="dropdown-item" href="javascript:void(0);">Yesterday</a></li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <a
                                    className="btn btn-sm text-black bg-gray-400 dropdown-toggle"
                                    href="javascript:void(0);"
                                    role="button"
                                    id="dropdownMenuLink2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="ri-filter-3-line me-1 align-middle"></i>
                                    Filter By: All
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                    <li><a className="dropdown-item" href="javascript:void(0);">All</a></li>
                                    <li><a className="dropdown-item" href="javascript:void(0);">Outstanding</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <button className="btn btn-sm text-black bg-gray-400" onClick={() => window.print()}>
                                <i className="ri-printer-line align-middle d-inline-block" />
                            </button>
                            <button className="btn btn-sm text-black bg-gray-400">
                                <i className="ri-file-pdf-line align-middle d-inline-block" />
                            </button>
                            <button className="btn btn-sm text-black bg-gray-400">
                                <i className="ri-file-excel-2-line align-middle d-inline-block" />
                            </button>
                            <button className="btn btn-sm btn-primary">
                                Send Email
                                <i className="ri-mail-line ms-1 align-middle d-inline-block" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="ms-sm-2 ms-2 mt-sm-0 mt-2 mb-3">
                <div className="h6 fw-semibold mb-0 align-items-center justify-content-center text-center">
                    Customer Statement for Jane Smith
                </div>
                {" "}
                <div className="h6 fw-semibold mb-0 align-items-center justify-content-center text-center">
                    from August 01, 2025 to August 31, 2025
                </div>
            </div>

            <div className="row border border-2 border-md">
                <div className="col-12">
                    <div className="card custom-card">
                        <div className="card-header d-md-flex d-block">
                            <div className="h5 mb-0 d-sm-flex d-bllock align-items-center">
                            </div>
                            <div className="ms-auto mt-md-0 mt-2">
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-xl-12">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <p className="text-muted mb-2">Billing From :</p>
                                            <p className="fw-bold mb-1">SPRUKO TECHNOLOGIES</p>
                                            <p className="mb-1 text-muted">Mig-1-11,Manroe street</p>
                                            <p className="mb-1 text-muted">
                                                Georgetown,Washington D.C,USA,200071
                                            </p>
                                            <p className="mb-1 text-muted">sprukotrust.ynex@gmail.com</p>
                                            <p className="mb-1 text-muted">(555) 555-1234</p>
                                            <p className="text-muted">
                                                For more information check for{" "}
                                                <a
                                                    href="javascript:void(0);"
                                                    className="text-primary fw-semibold"
                                                >
                                                    <u>GSTIN</u>
                                                </a>{" "}
                                                Details.
                                            </p>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                                            <p className="text-muted mb-2">Billing To :</p>
                                            <p className="fw-bold mb-1">Json Taylor</p>
                                            <p className="text-muted mb-1">Lig-22-1,20 Covington Place</p>
                                            <p className="text-muted mb-1">
                                                New Castle,de, United States,19320
                                            </p>
                                            <p className="text-muted mb-1">jsontaylor2134@gmail.com</p>
                                            <p className="text-muted">+1 202-918-2132</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <p className="fw-semibold text-muted mb-1">Invoice ID :</p>
                                    <p className="fs-15 mb-1">#SPK120219890</p>
                                </div>
                                <div className="col-xl-3">
                                    <p className="fw-semibold text-muted mb-1">Date Issued :</p>
                                    <p className="fs-15 mb-1">
                                        29,Nov 2022 - <span className="text-muted fs-12">12:42PM</span>
                                    </p>
                                </div>
                                <div className="col-xl-3">
                                    <p className="fw-semibold text-muted mb-1">Due Date :</p>
                                    <p className="fs-15 mb-1">29,Dec 2022</p>
                                </div>
                                <div className="col-xl-3">
                                    <p className="fw-semibold text-muted mb-1">Due Amount :</p>
                                    <p className="fs-16 mb-1 fw-semibold">$2,570.42</p>
                                </div>
                                <div className="col-xl-12">
                                    <div className="table-responsive">
                                        <table className="table nowrap text-nowrap border mt-4">
                                            <thead>
                                                <tr>
                                                    <th>BRAND NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th>
                                                    <th>TOTAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Dapzem &amp; Co (Sweatshirt)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Branded hoodie ethnic style
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">2</td>
                                                    <td>$60</td>
                                                    <td>$120</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">Denim Winjo (Jacket)</div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Vintage pure leather Jacket
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">1</td>
                                                    <td>$249</td>
                                                    <td>$249</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Jimmy Lolfiger (Winter Coat)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Unisex jacket for men &amp; women
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">1</td>
                                                    <td>$499</td>
                                                    <td>$499</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">Blueberry &amp; Co</div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Light colored sweater form blueberry
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">3</td>
                                                    <td>$299</td>
                                                    <td>$897</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">Denim Corporation</div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Flap pockets denim jackets for men
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">1</td>
                                                    <td>$599</td>
                                                    <td>$599</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3} />
                                                    <td colSpan={2}>
                                                        <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Sub Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$2,364</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Avail Discount :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$29.98</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">
                                                                            Coupon Discount{" "}
                                                                            <span className="text-success">(10%)</span> :
                                                                        </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">
                                                                            $236.40
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">
                                                                            Vat <span className="text-danger">(20%)</span>{" "}
                                                                            :
                                                                        </p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">
                                                                            $472.80
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Due Till Date :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0 fs-14">Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-16 text-success">
                                                                            $2,570.42
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">
                                            Note:
                                        </label>
                                        <textarea
                                            className="form-control form-control-light"
                                            id="invoice-note"
                                            rows={3}
                                            defaultValue={
                                                "Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-end">
                            <button className="btn btn-sm text-black bg-gray-400">
                                Download <i className="ri-download-2-line ms-1 align-middle" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}