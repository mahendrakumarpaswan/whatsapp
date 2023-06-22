import React from 'react'
import "./Setting.css";
export const Brandmaster = () => {
  return (
    <div className="brandmaster">
    
    <>
    <>
  
  <ol className="breadcrumb">
    <li>
      <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
        <i className="fa fa-dashboard" /> {/* Dashboard */} Dashboard
      </a>
    </li>
    <li className="active">{/* Branch */} Branch</li>
  </ol>
</>

    <div className="col-md-12">
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">{/* List Branch */}</h3>
          <a
            className="btn btn-sm btn-info pull-right"
            style={{ margin: 10 }}
            href="https://www.tenderguru.in/fubiq/billing/branch/add"
            title="Add New Branch"
            onclick=""
          >
            {/* Add New Branch */} Add New Branch
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
                        aria-label=" No"
                        style={{ width: "71.875px" }}
                      >
                        {/* No */} No
                      </th>
                      <th
                        className="sorting_asc"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label=" Branch Name: activate to sort column descending"
                        aria-sort="ascending"
                        style={{ width: "199.703px" }}
                      >
                        {/* Branch Name */} Branch Name
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label=" Address: activate to sort column ascending"
                        style={{ width: "381.25px" }}
                      >
                        {/* Address */} Address
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label=" City: activate to sort column ascending"
                        style={{ width: "88.2656px" }}
                      >
                        {/* City */} City
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="index"
                        rowSpan={1}
                        colSpan={1}
                        aria-label=" Actions: activate to sort column ascending"
                        style={{ width: "126.906px" }}
                      >
                        {/* Actions */} Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" className="odd">
                      <td>1</td>
                      <td className="sorting_1">Andheri</td>
                      <td>123, Andheri, Mumbai, MH 400075</td>
                      <td>Mumbai</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/branch/edit/4"
                          title="Edit"
                          className="btn btn-xs btn-info"
                        >
                          <span className="glyphicon glyphicon-edit" />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="javascript:delete_id(4)"
                          title="Delete"
                          className="btn btn-xs btn-danger"
                        >
                          <span className="glyphicon glyphicon-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" className="even">
                      <td>2</td>
                      <td className="sorting_1">Borivali</td>
                      <td>123, Borivali, Mumbai, MH 400093</td>
                      <td>Mumbai</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/branch/edit/3"
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
                    <tr role="row" className="odd">
                      <td>3</td>
                      <td className="sorting_1">Malad</td>
                      <td>123, Malad, Mumbai, MH 400065</td>
                      <td>Mumbai</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/branch/edit/2"
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
                    <tr role="row" className="even">
                      <td>4</td>
                      <td className="sorting_1">Mira Road</td>
                      <td>KashiMira, Thane - MH 401107</td>
                      <td>Thane</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/branch/edit/6"
                          title="Edit"
                          className="btn btn-xs btn-info"
                        >
                          <span className="glyphicon glyphicon-edit" />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="javascript:delete_id(6)"
                          title="Delete"
                          className="btn btn-xs btn-danger"
                        >
                          <span className="glyphicon glyphicon-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr role="row" className="odd">
                      <td>5</td>
                      <td className="sorting_1">Powai</td>
                      <td>123, Powai, Mumbai, MH 400051</td>
                      <td>Mumbai</td>
                      <td>
                        {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                        <a
                          href="https://www.tenderguru.in/fubiq/billing/branch/edit/5"
                          title="Edit"
                          className="btn btn-xs btn-info"
                        >
                          <span className="glyphicon glyphicon-edit" />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="javascript:delete_id(5)"
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
                        {/* No */} No
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        {/* Branch Name */} Branch Name
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        {/* Address */} Address
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        {/* City */} City
                      </th>
                      <th rowSpan={1} colSpan={1}>
                        {/* Actions */} Actions
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
                  Showing 1 to 5 of 5 entries
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
                    <li className="paginate_button next disabled" id="index_next">
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
  </>
  
    
    </div>
  )
}

export default Brandmaster
