import React from 'react'
import "./Sale.css";
const Quotation = () => {
  return (
    <div className='quotationpage'>
    <ol className="breadcrumb">
    <li>
      <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
        <i className="fa fa-dashboard" /> Dashboard
      </a>
    </li>
    <li className="active">Quotation</li>
  </ol>
  
    <section className="content">
    <div className="row">
      {/* right column */}
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Quotation List</h3>
            <a
              className="btn btn-sm btn-info pull-right"
              style={{ margin: 10 }}
              href="https://www.tenderguru.in/fubiq/billing/quotation/add"
            >
              Add New Quotation
            </a>
          </div>
          {/* /.box-header */}
          <div className="box-body">
            <div
              id="index_wrapper"
              className="dataTables_wrapper form-inline dt-bootstrap"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="dataTables_length" id="index_length">
                    <label>
                      Show{" "}
                      <select
                        name="index_length"
                        aria-controls="index"
                        className="form-control input-sm"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="index_filter" className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control input-sm"
                        placeholder=""
                        aria-controls="index"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    id="index"
                    className="table table-bordered table-striped dataTable"
                    role="grid"
                    aria-describedby="index_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_disabled"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="No"
                          style={{ width: "43.6875px" }}
                        >
                          No
                        </th>
                        <th
                          className="sorting_asc"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Date: activate to sort column descending"
                          aria-sort="ascending"
                          style={{ width: "80.75px" }}
                        >
                          Date
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Reference No: activate to sort column ascending"
                          style={{ width: "138.078px" }}
                        >
                          Reference No
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Biller: activate to sort column ascending"
                          style={{ width: "121.219px" }}
                        >
                          Biller
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Customer: activate to sort column ascending"
                          style={{ width: "162.703px" }}
                        >
                          Customer
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Grand Total(): activate to sort column ascending"
                          style={{ width: 147 }}
                        >
                          Grand Total(
                          <span className="fa fa-rupee" />)
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "94.5625px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td>1</td>
                        <td className="sorting_1">2020-07-09</td>
                        <td>SO-000066</td>
                        <td>BillerOne</td>
                        <td>customerOne</td>
                        <td align="right">3115.2</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/4">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/4">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/4"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/4">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(4)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>2</td>
                        <td className="sorting_1">2020-07-09</td>
                        <td>SO-000001</td>
                        <td>BillerOne</td>
                        <td>Bill Gates</td>
                        <td align="right">5192</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/5">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/5"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/5">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(5)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>3</td>
                        <td className="sorting_1">2020-07-12</td>
                        <td>SO-000068</td>
                        <td>BillerMalad</td>
                        <td>upasakxxx</td>
                        <td align="right">271.4</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/6">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/6">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/6"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/6">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(6)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>4</td>
                        <td className="sorting_1">2020-07-12</td>
                        <td>SO-000001</td>
                        <td>BillerOne</td>
                        <td>Balaji Supermarket</td>
                        <td align="right">67.85</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/7">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/7">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/7"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/7">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(7)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>5</td>
                        <td className="sorting_1">2020-07-12</td>
                        <td>SO-000001</td>
                        <td>BillerOne</td>
                        <td>customerOne</td>
                        <td align="right">115</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/8">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/8">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/8"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/8">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(8)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>6</td>
                        <td className="sorting_1">2020-07-12</td>
                        <td>SO-000001</td>
                        <td>BillerOne</td>
                        <td>customerOne</td>
                        <td align="right">115</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/9">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/9">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/9"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/9">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(9)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>7</td>
                        <td className="sorting_1">2020-07-12</td>
                        <td>SO-000001</td>
                        <td>BillerOne</td>
                        <td>customerOne</td>
                        <td align="right">115</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/10">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/10">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/10"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/10">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(10)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>8</td>
                        <td className="sorting_1">2020-07-12</td>
                        <td>SO-000001</td>
                        <td>BillerOne</td>
                        <td>customerOne</td>
                        <td align="right">63.25</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/11">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/11">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/11"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/11">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(11)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>9</td>
                        <td className="sorting_1">2020-07-21</td>
                        <td>SO-000001</td>
                        <td>MM Distributors</td>
                        <td>Arjun</td>
                        <td align="right">908.28</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/12">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/edit/12">
                                  <i className="fa fa-edit" />
                                  Edit Quotation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/12"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/12">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(12)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>10</td>
                        <td className="sorting_1">2020-07-21</td>
                        <td>SO-000001</td>
                        <td>MM Distributors</td>
                        <td>Harshil</td>
                        <td align="right">1940.12</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-default gropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/view/13">
                                  <i className="fa fa-file-text-o" />
                                  Quotation Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tenderguru.in/fubiq/billing/quotation/pdf/13"
                                  target="_blank  "
                                >
                                  <i className="fa fa-file-pdf-o" />
                                  Download as PDf
                                </a>
                              </li>
                              <li>
                                <a href="https://www.tenderguru.in/fubiq/billing/quotation/email/13">
                                  <i className="fa fa-envelope" />
                                  Email Sales
                                </a>
                              </li>
                              <li>
                                <a href="javascript:delete_id(13)">
                                  <i className="fa fa-trash-o" />
                                  Delete Sales
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th rowSpan={1} colSpan={1}>
                          No
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Date
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Reference No
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Biller
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Customer
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Grand Total(
                          <span className="fa fa-rupee" />)
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Action
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <div
                    className="dataTables_info"
                    id="index_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 19 entries
                  </div>
                </div>
                <div className="col-sm-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="index_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button previous disabled"
                        id="index_previous"
                      >
                        <a
                          href="#"
                          aria-controls="index"
                          data-dt-idx={0}
                          tabIndex={0}
                        >
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button active">
                        <a
                          href="#"
                          aria-controls="index"
                          data-dt-idx={1}
                          tabIndex={0}
                        >
                          1
                        </a>
                      </li>
                      <li className="paginate_button ">
                        <a
                          href="#"
                          aria-controls="index"
                          data-dt-idx={2}
                          tabIndex={0}
                        >
                          2
                        </a>
                      </li>
                      <li className="paginate_button next" id="index_next">
                        <a
                          href="#"
                          aria-controls="index"
                          data-dt-idx={3}
                          tabIndex={0}
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.box-body */}
        </div>
        {/* /.box */}
      </div>
      {/*/.col (right) */}
    </div>
    {/* /.row */}
  </section>
  
      
    </div>
  )
}

export default Quotation