import React from 'react'
import "./Sale.css";
const Sale = () => {
  return (
    <div className='salepage'>
    <ol className="breadcrumb">
    <li>
      <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
        <i className="fa fa-dashboard" /> Dashboard
      </a>
    </li>
    <li className="active">Sales</li>
  </ol>
  
    <div className="col-md-12">
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">List Sales</h3>
        <a
          className="btn btn-sm btn-info pull-right"
          style={{ margin: 10 }}
          href="https://www.tenderguru.in/fubiq/billing/sales/add"
          title="Add New Purchase"
        >
          Add New Sales
        </a>
        <div className="form-group">
          <label htmlFor="code">Choose VEN for loadsheet</label>
          <select name="van" className="form-control" style={{ float: "right" }}>
            <option disabled="disabled" selected="selected">
              --Select a ven--
            </option>
            <option value={1}>sample</option>
            <option value={2}>VAN 1</option>
            <option value={3}>VAN 2</option>
            <option value={4}>mh04gm4396</option>
            <option value={5}>EECO</option>
          </select>
        </div>
        <br />
        <br />
        <input
          type="submit"
          className="btn btn-sm btn-info pull-right"
          name="loadsheet"
          defaultValue="loadsheet"
        />
        <input
          type="submit"
          className="btn btn-sm btn-info pull-right"
          name="party_wise"
          defaultValue="party_wise"
        />
      </div>
      {/* /.box-header */}
      <div className="box-body" style={{ overflowY: "auto" }}>
        <div
          id="log_datatable_wrapper"
          className="dataTables_wrapper form-inline dt-bootstrap"
        >
          <div className="row">
            <div className="col-sm-6">
              <div className="dataTables_length" id="log_datatable_length">
                <label>
                  Show{" "}
                  <select
                    name="log_datatable_length"
                    aria-controls="log_datatable"
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
              <div id="log_datatable_filter" className="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    className="form-control input-sm"
                    placeholder=""
                    aria-controls="log_datatable"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table
                id="log_datatable"
                className="table table-bordered table-striped dataTable"
                role="grid"
                aria-describedby="log_datatable_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="No"
                      style={{ width: "17.0938px" }}
                    >
                      No
                    </th>
                    <th
                      className="sorting_desc"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Checkbox: activate to sort column ascending"
                      aria-sort="descending"
                      style={{ width: "60.2344px" }}
                    >
                      Checkbox
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Loadsheet-Status: activate to sort column ascending"
                      style={{ width: "67.7812px" }}
                    >
                      Loadsheet-Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="VEN(FOR LOADSHEET): activate to sort column ascending"
                      style={{ width: "78.2656px" }}
                    >
                      VEN(FOR LOADSHEET)
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="SALES-STATUS: activate to sort column ascending"
                      style={{ width: "61.0938px" }}
                    >
                      SALES-STATUS
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date: activate to sort column ascending"
                      style={{ width: "28.3906px" }}
                    >
                      Date
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Biller: activate to sort column ascending"
                      style={{ width: "46.8281px" }}
                    >
                      Biller
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Customer: activate to sort column ascending"
                      style={{ width: "59.5938px" }}
                    >
                      Customer
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Sales Status: activate to sort column ascending"
                      style={{ width: "39.125px" }}
                    >
                      Sales Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Grand Total(): activate to sort column ascending"
                      style={{ width: "37.5312px" }}
                    >
                      Grand Total(
                      <span className="fa fa-rupee" />)
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Paid(): activate to sort column ascending"
                      style={{ width: "31.9531px" }}
                    >
                      Paid(
                      <span className="fa fa-rupee" />)
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Balance Amount(): activate to sort column ascending"
                      style={{ width: "53.9375px" }}
                    >
                      Balance Amount(
                      <span className="fa fa-rupee" />)
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Payment Status: activate to sort column ascending"
                      style={{ width: "55.1719px" }}
                    >
                      Payment Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="log_datatable"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Action: activate to sort column ascending"
                      style={{ width: "54.3594px" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td>1</td>
                    <td className="sorting_1">
                      <input type="Checkbox" name="sales_id[]" defaultValue={3} />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VAN 1</td>
                    <td>delivered</td>
                    <td>
                      2020-05-03
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-03"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/1">
                        BillerOne
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/3">
                        SO-000003
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/2">
                        Laxmi Narayan Dairy
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Laxmi Narayan Dairy"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000003"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">6247</td>
                    <td align="right">6247</td>
                    <td align="right">0</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/3">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/3">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/3"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/3">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/3">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/3">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        className="btn btn-info"
                        href="https://www.tenderguru.in/fubiq/billing/sales/receipt/3"
                      >
                        Pay Now
                      </a>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td>2</td>
                    <td className="sorting_1">
                      <input type="Checkbox" name="sales_id[]" defaultValue={4} />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VEN NOT ADDED</td>
                    <td>invoiced</td>
                    <td>
                      2020-05-03
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-03"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/3">
                        BillerMalad
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/4">
                        SO-000004
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/5">
                        Gurudev General Store
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Gurudev General Store"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000004"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">11247</td>
                    <td align="right">11247</td>
                    <td align="right">-0</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/4">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/4">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/4"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/4">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/4">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/4">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>3</td>
                    <td className="sorting_1">
                      <input type="Checkbox" name="sales_id[]" defaultValue={5} />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VAN 1</td>
                    <td>delivered</td>
                    <td>
                      2020-05-03
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-03"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/1">
                        BillerOne
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/5">
                        SO-000005
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/6">
                        Balaji Supermarket
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Balaji Supermarket"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000005"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">30533</td>
                    <td align="right">30533</td>
                    <td align="right">-1</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/5">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/5">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/5"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/5">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/5">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/5">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td>4</td>
                    <td className="sorting_1">
                      <input type="Checkbox" name="sales_id[]" defaultValue={7} />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VEN NOT ADDED</td>
                    <td>outfordelivery</td>
                    <td>
                      2020-05-03
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-03"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/3">
                        BillerMalad
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/7">
                        SO-000007
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/2">
                        Laxmi Narayan Dairy
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Laxmi Narayan Dairy"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000007"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">5555</td>
                    <td align="right">5555</td>
                    <td align="right">0</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/7">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/7">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/7"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/7">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/7">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/7">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        className="btn btn-info"
                        href="https://www.tenderguru.in/fubiq/billing/sales/receipt/7"
                      >
                        Pay Now
                      </a>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>5</td>
                    <td className="sorting_1">
                      <input type="Checkbox" name="sales_id[]" defaultValue={8} />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VAN 1</td>
                    <td>outfordelivery</td>
                    <td>
                      2020-05-03
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-03"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/1">
                        BillerOne
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/8">
                        SO-000008
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/3">
                        Welcome Chemist
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Welcome Chemist"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000008"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">8142</td>
                    <td align="right">8142</td>
                    <td align="right">0</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/8">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/8"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/8">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/8">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/8">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td>6</td>
                    <td className="sorting_1">
                      <input type="Checkbox" name="sales_id[]" defaultValue={9} />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VEN NOT ADDED</td>
                    <td>invoiced</td>
                    <td>
                      2020-05-04
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-04"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/3">
                        BillerMalad
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/9">
                        SO-000009
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/3">
                        Welcome Chemist
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Welcome Chemist"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000009"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">4207</td>
                    <td align="right">0</td>
                    <td align="right">4207</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-danger">Pending</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/9">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/9">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/edit/9">
                              <i className="fa fa-edit" />
                              Edit Sales
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/9"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/9">
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
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/9">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://www.tenderguru.in/fubiq/billing/sales/receipt/9"
                        className="btn btn-info"
                      >
                        Pay Now
                      </a>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>7</td>
                    <td className="sorting_1">
                      <input
                        type="Checkbox"
                        name="sales_id[]"
                        defaultValue={10}
                      />
                    </td>
                    <td>LOAD SHEET NOT DONE YET</td>
                    <td>VEN NOT ADDED</td>
                    <td>invoiced</td>
                    <td>
                      2020-05-05
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-05"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/3">
                        BillerMalad
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/10">
                        SO-000010
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/4">
                        Semon Collection
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Semon Collection"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000010"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">41608</td>
                    <td align="right">41608</td>
                    <td align="right">0</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-danger">Pending</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/10">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/10"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/10">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/10">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/10">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td>8</td>
                    <td className="sorting_1">
                      <input
                        type="Checkbox"
                        name="sales_id[]"
                        defaultValue={11}
                      />
                    </td>
                    <td>LOAD SHEET NOT DONE YET</td>
                    <td>VEN NOT ADDED</td>
                    <td>invoiced</td>
                    <td>
                      2020-05-05
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-05"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/3">
                        BillerMalad
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/11">
                        SO-000011
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/2">
                        Laxmi Narayan Dairy
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Laxmi Narayan Dairy"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000011"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">17524</td>
                    <td align="right">17524</td>
                    <td align="right">0</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/11">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/11">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/11"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/11">
                              <i className="fa fa-envelope" />
                              Email Sales
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/credit_note/11">
                              <i className="fa fa-file-o" />
                              Create Credit Note
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/11">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        className="btn btn-info"
                        href="https://www.tenderguru.in/fubiq/billing/sales/receipt/11"
                      >
                        Pay Now
                      </a>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>9</td>
                    <td className="sorting_1">
                      <input
                        type="Checkbox"
                        name="sales_id[]"
                        defaultValue={12}
                      />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VAN 1</td>
                    <td>invoiced</td>
                    <td>
                      2020-05-04
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-04"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/1">
                        BillerOne
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/12">
                        SO-000012
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/4">
                        Semon Collection
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Semon Collection"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000012"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">29854</td>
                    <td align="right">0</td>
                    <td align="right">29854</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-danger">Pending</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/12">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/12">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/edit/12">
                              <i className="fa fa-edit" />
                              Edit Sales
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/12"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/12">
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
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/12">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://www.tenderguru.in/fubiq/billing/sales/receipt/12"
                        className="btn btn-info"
                      >
                        Pay Now
                      </a>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td>10</td>
                    <td className="sorting_1">
                      <input
                        type="Checkbox"
                        name="sales_id[]"
                        defaultValue={13}
                      />
                    </td>
                    <td>
                      <b>
                        <span style={{ color: "green" }}>
                          LOAD SHEET ALREADY DONE
                        </span>
                      </b>
                    </td>
                    <td>VAN 1</td>
                    <td>invoiced</td>
                    <td>
                      2020-05-05
                      <input
                        type="hidden"
                        name="bill_date"
                        defaultValue="2020-05-05"
                      />
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/billerView/1">
                        BillerOne
                      </a>{" "}
                      (
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/view/13">
                        SO-000013
                      </a>
                      )
                    </td>
                    <td>
                      <a href="https://www.tenderguru.in/fubiq/billing/sales/customerView/3">
                        Welcome Chemist
                      </a>
                    </td>
                    <input
                      type="hidden"
                      name="customer_name"
                      defaultValue="Welcome Chemist"
                    />
                    <input
                      type="hidden"
                      name="bill_no"
                      defaultValue="SO-000013"
                    />
                    <td align="center">
                      <span className="label label-success">Complited</span>
                    </td>
                    <td align="right">56445</td>
                    <td align="right">0</td>
                    <td align="right">56445</td>
                    {/*=================payment status block start==============*/}
                    <td align="center">
                      <span className="label label-danger">Pending</span>
                    </td>
                    {/*=================payment status block end==============*/}
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-default gropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Action
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/view/13">
                              <i className="fa fa-file-text-o" />
                              Sales Details
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/receipt/13">
                              <i className="fa fa-money" />
                              Add Payment
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/edit/13">
                              <i className="fa fa-edit" />
                              Edit Sales
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tenderguru.in/fubiq/billing/sales/pdf/13"
                              target="_blank  "
                            >
                              <i className="fa fa-file-pdf-o" />
                              Download as PDf
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/email/13">
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
                          <li>
                            <a href="https://www.tenderguru.in/fubiq/billing/sales/update_sale_status/13">
                              <i className="fa fa-file-o" />
                              Update-Sale-Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://www.tenderguru.in/fubiq/billing/sales/receipt/13"
                        className="btn btn-info"
                      >
                        Pay Now
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th rowSpan={1} colSpan={1}>
                      No
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Checkbox
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Loadsheet-Status
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      VEN(FOR LOADSHEET)
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      SALES-STATUS
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Date
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Biller
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Customer
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Sales Status
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Grand Total(
                      <span className="fa fa-rupee" />)
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Paid(
                      <span className="fa fa-rupee" />)
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Balance Amount(
                      <span className="fa fa-rupee" />)
                    </th>
                    <th rowSpan={1} colSpan={1}>
                      Payment Status
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
                id="log_datatable_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 10 of 977 entries
              </div>
            </div>
            <div className="col-sm-7">
              <div
                className="dataTables_paginate paging_simple_numbers"
                id="log_datatable_paginate"
              >
                <ul className="pagination">
                  <li
                    className="paginate_button previous disabled"
                    id="log_datatable_previous"
                  >
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={0}
                      tabIndex={0}
                    >
                      Previous
                    </a>
                  </li>
                  <li className="paginate_button active">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={1}
                      tabIndex={0}
                    >
                      1
                    </a>
                  </li>
                  <li className="paginate_button ">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={2}
                      tabIndex={0}
                    >
                      2
                    </a>
                  </li>
                  <li className="paginate_button ">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={3}
                      tabIndex={0}
                    >
                      3
                    </a>
                  </li>
                  <li className="paginate_button ">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={4}
                      tabIndex={0}
                    >
                      4
                    </a>
                  </li>
                  <li className="paginate_button ">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={5}
                      tabIndex={0}
                    >
                      5
                    </a>
                  </li>
                  <li
                    className="paginate_button disabled"
                    id="log_datatable_ellipsis"
                  >
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={6}
                      tabIndex={0}
                    >
                      …
                    </a>
                  </li>
                  <li className="paginate_button ">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={7}
                      tabIndex={0}
                    >
                      98
                    </a>
                  </li>
                  <li className="paginate_button next" id="log_datatable_next">
                    <a
                      href="#"
                      aria-controls="log_datatable"
                      data-dt-idx={8}
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
  
  
    
    
    </div>
  )
}

export default Sale