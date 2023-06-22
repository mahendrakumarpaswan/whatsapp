import "./Purchase.css";
const PurchaseReturn = () =>{
         return (

                  <div className="purchasereturn">
                    <ol className="breadcrumb">
  <li>
    <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
      <i className="fa fa-dashboard" /> Dashboard
    </a>
  </li>
  <li className="active">Purchase Return</li>
</ol>
                           
                           <div className="col-md-12">
  <div className="box">
    <div className="box-header with-border">
      <h3 className="box-title">List Purchase Return</h3>
      <a
        className="btn btn-sm btn-info pull-right"
        style={{ margin: 10 }}
        href="https://www.tenderguru.in/fubiq/billing/purchase_return/add"
        title="Add New Purchase"
      >
        Add New Purchase Return{" "}
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
                    style={{ width: "75.9219px" }}
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
                    style={{ width: "127.25px" }}
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
                    style={{ width: "206.672px" }}
                  >
                    Reference No
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="index"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Supplier: activate to sort column ascending"
                    style={{ width: "160.688px" }}
                  >
                    Supplier
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="index"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Total(): activate to sort column ascending"
                    style={{ width: "137.156px" }}
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
                    aria-label="Action: activate to sort column ascending"
                    style={{ width: "120.312px" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td>1</td>
                  <td className="sorting_1">2020-07-20</td>
                  <td>PR-000002</td>
                  <td>ITC Limited</td>
                  <td>159.47</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/purchase_return/edit/2"
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
                  <td className="sorting_1">2020-07-21</td>
                  <td>PR-000003</td>
                  <td>Joseph Foods</td>
                  <td>7080.00</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/purchase_return/edit/3"
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
                  <td className="sorting_1">2020-07-21</td>
                  <td>PR-000004</td>
                  <td>SupplierOne</td>
                  <td>236.00</td>
                  <td>
                    {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                    <a
                      href="https://www.tenderguru.in/fubiq/billing/purchase_return/edit/4"
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
                    Supplier
                  </th>
                  <th rowSpan={1} colSpan={1}>
                    Total(
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

                        
                  </div>
         )
}

export default PurchaseReturn