import React from 'react'
import "./Transfer.css"
const Transfer = () => {
  return (
    <div className='transferpage'>
    <section className="content-header">
  <h5>
    <ol className="breadcrumb">
      <li>
        <a href="https://www.tenderguru.in/fubiq/billing/auth">
          <i className="fa fa-dashboard" />
          Dashboard
        </a>
      </li>
      <li className="active">Transfers</li>
    </ol>
  </h5>
</section>

  
  <section className="content">
  <div className="row">
    {/* right column */}
    <div className="col-md-12">
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">List Transfers</h3>
          <a
            className="btn btn-sm btn-info pull-right"
            style={{ margin: 10 }}
            href="https://www.tenderguru.in/fubiq/billing/transfer/add"
            title="Add New Transfer"
            onclick=""
          >
            Add New Transfer
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
                        style={{ width: "17.0938px" }}
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
                        style={{ width: "40.3594px" }}
                      >
                        Date
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Warehouse(From): activate to sort column ascending"
                        style={{ width: "110.344px" }}
                      >
                        Warehouse(From)
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Warehouse(To): activate to sort column ascending"
                        style={{ width: "92.5781px" }}
                      >
                        Warehouse(To)
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Product-List: activate to sort column ascending"
                        style={{ width: "436.422px" }}
                      >
                        Product-List
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="
  Total(): activate to sort column ascending"
                        style={{ width: "45.5469px" }}
                      >
                        Total(
                        <span className="fa fa-rupee" />)
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Actions: activate to sort column ascending"
                        style={{ width: "45.6562px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" className="odd">
                      <td>1</td>
                      <td className="sorting_1">2020-05-04</td>
                      <td>Powai Godown</td>
                      <td>Malad Cold Storage</td>
                      <td>
                        698Maggi 2-Minute Instant Noodles - Masala,
                        420g(quantity= 200) (Gross-Total= 20000.00)
                        <br />
                        <br />
                        694Rin bar Small 12*12(quantity= 100) (Gross-Total=
                        10000.00)
                        <br />
                        <br />
                        696Whole Oats 800Grm(quantity= 40) (Gross-Total=
                        8000.00)
                        <br />
                        <br />
                        700Honey 1 Kg(quantity= 30) (Gross-Total= 9000.00)
                        <br />
                        <br />
                      </td>
                      <td>47000.00</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/transfer/edit/1"
                          title="Edit"
                          className="btn btn-xs btn-info"
                        >
                          <span className="glyphicon glyphicon-edit" />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="javascript:delete_id(1)"
                          title="Delete"
                          className="btn btn-xs btn-danger"
                        >
                          <span className="glyphicon glyphicon-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" className="even">
                      <td>2</td>
                      <td className="sorting_1">2020-05-07</td>
                      <td>Malad Cold Storage</td>
                      <td>Borivali Warehouse</td>
                      <td>
                        694Rin bar Small 12*12(quantity= 10) (Gross-Total=
                        1000.00)
                        <br />
                        <br />
                      </td>
                      <td>1000.00</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/transfer/edit/2"
                          title="Edit"
                          className="btn btn-xs btn-info"
                        >
                          <span className="glyphicon glyphicon-edit" />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="javascript:delete_id(2)"
                          title="Delete"
                          className="btn btn-xs btn-danger"
                        >
                          <span className="glyphicon glyphicon-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" className="odd">
                      <td>3</td>
                      <td className="sorting_1">2020-07-09</td>
                      <td>WarehouseOne</td>
                      <td>Malad Cold Storage</td>
                      <td>
                        893harshil Patym(quantity= 20) (Gross-Total= 1600.00)
                        <br />
                        <br />
                      </td>
                      <td>1600.00</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/transfer/edit/3"
                          title="Edit"
                          className="btn btn-xs btn-info"
                        >
                          <span className="glyphicon glyphicon-edit" />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="javascript:delete_id(3)"
                          title="Delete"
                          className="btn btn-xs btn-danger"
                        >
                          <span className="glyphicon glyphicon-trash" />
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
                        Date
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        Warehouse(From)
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        Warehouse(To)
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        Total(
                        <span className="fa fa-rupee" />)
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        Actions
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
                  Showing 1 to 3 of 3 entries
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
                    <li
                      className="paginate_button next disabled"
                      id="index_next"
                    >
                      <a
                        href="#"
                        aria-controls="index"
                        data-dt-idx={2}
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

export default Transfer