import React from 'react'
import "./Setting.css";
const Productsubcategory = () => {
  return (
    <div className="productsubcategory">
    <ol className="breadcrumb">
  <li>
    <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
      <i className="fa fa-dashboard" /> {/* Dashboard */}Dashboard
    </a>
  </li>
  <li className="active">Subcategory</li>
</ol>

    <div className="box bo">
    <div className="box-header with-border">
      <h3 className="box-title">{/* List Subcategory */}</h3>
      <a
        className="btn btn-sm btn-info pull-right"
        style={{ margin: 10 }}
        href="https://www.tenderguru.in/fubiq/billing/subcategory/add"
        title="Add New Category"
        onclick=""
      >
        {/* Add New Subcategory */}Add New Subcategory
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
                    style={{ width: "73.0625px" }}
                  >
                    {/* No */}No
                  </th>
                  <th
                    className="sorting_asc"
                    tabIndex={0}
                    aria-controls="index"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Code: activate to sort column descending"
                    aria-sort="ascending"
                    style={{ width: "178.172px" }}
                  >
                    {/* Subcategory Code */}Code
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="index"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Name: activate to sort column ascending"
                    style={{ width: "263.453px" }}
                  >
                    {/* Subcategory Name */}Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="index"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Category: activate to sort column ascending"
                    style={{ width: "236.938px" }}
                  >
                    {/* Main Category */}Category
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="index"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Action: activate to sort column ascending"
                    style={{ width: "116.375px" }}
                  >
                    {/* Actions */}Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td>1</td>
                  <td className="sorting_1">SUBCAT-000002</td>
                  <td>Consumer Goods</td>
                  <td>Electronic</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/2"
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
                  <td>2</td>
                  <td className="sorting_1">SUBCAT-000003</td>
                  <td>Tobacco</td>
                  <td>FMCG</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/3"
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
                  <td className="sorting_1">SUBCAT-000004</td>
                  <td>Home Care</td>
                  <td>FMCG</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/4"
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
                  <td>4</td>
                  <td className="sorting_1">SUBCAT-000005</td>
                  <td>Tissue and Hygene</td>
                  <td>FMCG</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/5"
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
                <tr role="row" className="odd">
                  <td>5</td>
                  <td className="sorting_1">SUBCAT-000006</td>
                  <td>Grocery</td>
                  <td>FMCG</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/6"
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
                <tr role="row" className="even">
                  <td>6</td>
                  <td className="sorting_1">SUBCAT-000007</td>
                  <td>Baby Care</td>
                  <td>FMCG</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/7"
                      title="Edit"
                      className="btn btn-xs btn-info"
                    >
                      <span className="glyphicon glyphicon-edit" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="javascript:delete_id(7)"
                      title="Delete"
                      className="btn btn-xs btn-danger"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </a>
                  </td>
                </tr>
                <tr role="row" className="odd">
                  <td>7</td>
                  <td className="sorting_1">SUBCAT-000008</td>
                  <td>Medicine and drugs</td>
                  <td>Healthcare</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/8"
                      title="Edit"
                      className="btn btn-xs btn-info"
                    >
                      <span className="glyphicon glyphicon-edit" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="javascript:delete_id(8)"
                      title="Delete"
                      className="btn btn-xs btn-danger"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </a>
                  </td>
                </tr>
                <tr role="row" className="even">
                  <td>8</td>
                  <td className="sorting_1">SUBCAT-000009</td>
                  <td>Surgical instruments</td>
                  <td>Healthcare</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/9"
                      title="Edit"
                      className="btn btn-xs btn-info"
                    >
                      <span className="glyphicon glyphicon-edit" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="javascript:delete_id(9)"
                      title="Delete"
                      className="btn btn-xs btn-danger"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </a>
                  </td>
                </tr>
                <tr role="row" className="odd">
                  <td>9</td>
                  <td className="sorting_1">SUBCAT-000010</td>
                  <td>Bath preparations</td>
                  <td>Cosmetics</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/10"
                      title="Edit"
                      className="btn btn-xs btn-info"
                    >
                      <span className="glyphicon glyphicon-edit" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="javascript:delete_id(10)"
                      title="Delete"
                      className="btn btn-xs btn-danger"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </a>
                  </td>
                </tr>
                <tr role="row" className="even">
                  <td>10</td>
                  <td className="sorting_1">SUBCAT-000011</td>
                  <td>Fragrance Preparations</td>
                  <td>Cosmetics</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/subcategory/edit/11"
                      title="Edit"
                      className="btn btn-xs btn-info"
                    >
                      <span className="glyphicon glyphicon-edit" />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="javascript:delete_id(11)"
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
                    {/* No */}No
                  </th>
                  <th rowSpan={1} colSpan={1}>
                    {/* Subcategory Code */}Code
                  </th>
                  <th rowSpan={1} colSpan={1}>
                    {/* Subcategory Name */}Name
                  </th>
                  <th rowSpan={1} colSpan={1}>
                    {/* Main Category */}Category
                  </th>
                  <th rowSpan={1} colSpan={1}>
                    {/* Actions */}Action
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
              Showing 1 to 10 of 21 entries
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
                  <a href="#" aria-controls="index" data-dt-idx={0} tabIndex={0}>
                    Previous
                  </a>
                </li>
                <li className="paginate_button active">
                  <a href="#" aria-controls="index" data-dt-idx={1} tabIndex={0}>
                    1
                  </a>
                </li>
                <li className="paginate_button ">
                  <a href="#" aria-controls="index" data-dt-idx={2} tabIndex={0}>
                    2
                  </a>
                </li>
                <li className="paginate_button ">
                  <a href="#" aria-controls="index" data-dt-idx={3} tabIndex={0}>
                    3
                  </a>
                </li>
                <li className="paginate_button next" id="index_next">
                  <a href="#" aria-controls="index" data-dt-idx={4} tabIndex={0}>
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
  
    </div>
  )
}

export default Productsubcategory