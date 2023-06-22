import React from 'react'
import "./Setting.css";
const Productcategory = () => {
  return (
    <div className="productcategory">
    <section className="content-header">
  <h5>
    <ol className="breadcrumb">
      <li>
        <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
          <i className="fa fa-dashboard" /> {/* Dashboard */}Dashboard
        </a>
      </li>
      <li className="active">
        {/* Category */}
        Category
      </li>
    </ol>
  </h5>
</section>

    <section className="content">
    <div className="row">
      {/* right column */}
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">
              {/* List Category */}
              List Category
            </h3>
            <a
              className="btn btn-sm btn-info pull-right"
              style={{ margin: 10 }}
              href="https://www.tenderguru.in/fubiq/billing/category/add"
              title="Add New Category"
              onclick=""
            >
              {/* Add New Category */} Add New Category
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
                          style={{ width: "108.203px" }}
                        >
                          {/* No */}No
                        </th>
                        <th
                          className="sorting_asc"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Category Code: activate to sort column descending"
                          aria-sort="ascending"
                          style={{ width: "296.047px" }}
                        >
                          {/* Category Code */}Category Code
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Category Name: activate to sort column ascending"
                          style={{ width: "323.016px" }}
                        >
                          {/* Category Name */}Category Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="index"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Actions: activate to sort column ascending"
                          style={{ width: "180.734px" }}
                        >
                          {/* Actions */}Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td>1</td>
                        <td className="sorting_1">CAT-000002</td>
                        <td>FMCG</td>
                        <td>
                          {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                          <a
                            href="https://www.tenderguru.in/fubiq/billing/category/edit/2"
                            title="Edit"
                            className="btn btn-xs btn-info"
                          >
                            <span className="glyphicon glyphicon-edit" />
                          </a>
                          &nbsp;&nbsp;
                          <a
                            href=""
                            onclick="return alert('This Category have product so you can not delete it')"
                            title="Delete"
                            className="btn btn-xs btn-danger"
                          >
                            <span className="glyphicon glyphicon-trash"></span>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>2</td>
                        <td className="sorting_1">CAT-000003</td>
                        <td>Healthcare</td>
                        <td>
                          {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                          <a
                            href="https://www.tenderguru.in/fubiq/billing/category/edit/3"
                            title="Edit"
                            className="btn btn-xs btn-info"
                          >
                            <span className="glyphicon glyphicon-edit" />
                          </a>
                          &nbsp;&nbsp;
                          <a
                            href=""
                            onclick="return alert('This Category have product so you can not delete it')"
                            title="Delete"
                            className="btn btn-xs btn-danger"
                          >
                            <span className="glyphicon glyphicon-trash"></span>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>3</td>
                        <td className="sorting_1">CAT-000005</td>
                        <td>Apparel and Lifestyle</td>
                        <td>
                          {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                          <a
                            href="https://www.tenderguru.in/fubiq/billing/category/edit/5"
                            title="Edit"
                            className="btn btn-xs btn-info"
                          >
                            <span className="glyphicon glyphicon-edit" />
                          </a>
                          &nbsp;&nbsp;
                          <a
                            href="javascript:delete_id(5)"
                            title="Delete"
                            className="btn btn-xs btn-success"
                          >
                            <span className="glyphicon glyphicon-trash"></span>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>4</td>
                        <td className="sorting_1">CAT-000007</td>
                        <td>Fintech</td>
                        <td>
                          {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                          <a
                            href="https://www.tenderguru.in/fubiq/billing/category/edit/7"
                            title="Edit"
                            className="btn btn-xs btn-info"
                          >
                            <span className="glyphicon glyphicon-edit" />
                          </a>
                          &nbsp;&nbsp;
                          <a
                            href=""
                            onclick="return alert('This Category have product so you can not delete it')"
                            title="Delete"
                            className="btn btn-xs btn-danger"
                          >
                            <span className="glyphicon glyphicon-trash"></span>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td>5</td>
                        <td className="sorting_1">CAT-000008</td>
                        <td>ITC FROZEN</td>
                        <td>
                          {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                          <a
                            href="https://www.tenderguru.in/fubiq/billing/category/edit/8"
                            title="Edit"
                            className="btn btn-xs btn-info"
                          >
                            <span className="glyphicon glyphicon-edit" />
                          </a>
                          &nbsp;&nbsp;
                          <a
                            href=""
                            onclick="return alert('This Category have product so you can not delete it')"
                            title="Delete"
                            className="btn btn-xs btn-danger"
                          >
                            <span className="glyphicon glyphicon-trash"></span>
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td>6</td>
                        <td className="sorting_1">CAT-000009</td>
                        <td>Frozen Desserts</td>
                        <td>
                          {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                          <a
                            href="https://www.tenderguru.in/fubiq/billing/category/edit/9"
                            title="Edit"
                            className="btn btn-xs btn-info"
                          >
                            <span className="glyphicon glyphicon-edit" />
                          </a>
                          &nbsp;&nbsp;
                          <a
                            href=""
                            onclick="return alert('This Category have product so you can not delete it')"
                            title="Delete"
                            className="btn btn-xs btn-danger"
                          >
                            <span className="glyphicon glyphicon-trash"></span>
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
                          {/* Category Code */}Category Code
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          {/* Category Name */}Category Name
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          {/* Actions */}Actions
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
                    Showing 1 to 6 of 6 entries
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

export default Productcategory