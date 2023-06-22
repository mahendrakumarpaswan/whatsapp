import React from 'react';

import "./Product.css";

const Productpage = () => {
    return (

        <div className='productpage'>
            <section className="content-header">
  <h5>
    <ol className="breadcrumb">
      <li>
        <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
          <i className="fa fa-dashboard" />
          Dashboard
        </a>
      </li>
      <li className="active">Product</li>
    </ol>
  </h5>
</section>

            <div className="col-md-12">
  <div className="box">
    {/*=================FILTER WAREHOUSE START==========*/}
    <div className="box-header with-border">
      <form
        target=""
        id="edit-profile"
        method="post"
        action="https://www.tenderguru.in/fubiq/billing/product/products_fliter"
      >
        <div className="col-md-3">
          <label htmlFor="category">
            Select Category <span className="validation-color">*</span>
          </label>
          <select
            className="form-control select2 select2-hidden-accessible"
            id="category"
            name="category"
            style={{ width: "100%" }}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="">Select</option>
            <option value={2}>FMCG</option>
            <option value={3}>Healthcare</option>
            <option value={5}>Apparel and Lifestyle</option>
            <option value={7}>Fintech</option>
            <option value={8}>ITC FROZEN</option>
            <option value={9}>Frozen Desserts</option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-category-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-category-container"
                  title="Select"
                >
                  Select
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <span className="validation-color" id="err_category" />
        </div>
        <div className="col-md-3">
          <label htmlFor="subcategory">Select Subcategory</label>
          <select
            className="form-control select2 select2-hidden-accessible"
            id="subcategory"
            name="subcategory"
            style={{ width: "100%" }}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="">Select</option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-subcategory-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-subcategory-container"
                  title="Select"
                >
                  Select
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <span className="validation-color" id="err_subcategory" />
        </div>
        <div className="col-md-3">
          <label htmlFor="subcategory">
            Select Brand
            {/* Select Subcategory */} <span className="validation-color" />
          </label>
          <select
            className="form-control select2 select2-hidden-accessible"
            id="brand"
            name="brand"
            style={{ width: "100%" }}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="">Select</option>
            <option value={1}>Samsung</option>
            <option value={2}>Hindustan Unilever</option>
            <option value={3}>ITC</option>
            <option value={4}>Cadbury</option>
            <option value={5}>Raymond</option>
            <option value={6}>Zydus</option>
            <option value={7}>johnson and johnson</option>
            <option value={8}>Patanjali</option>
            <option value={9}>Fubiq</option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-brand-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-brand-container"
                  title="Select
"
                >
                  Select
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <span className="validation-color" id="err_subcategory" />
        </div>
        <div className="col-md-12">
          <div className="box-footer">
            <input
              type="submit"
              className="btn btn-info"
              id="submit"
              name="submit"
              defaultValue="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  {/*=================FILTER WAREHOUSE END==========*/}
  <div className="box-header with-border">
    <h3 className="box-title">List Product</h3>
    <a
      className="btn btn-sm btn-info pull-right btn-flat"
      style={{ margin: 10 }}
      href="https://www.tenderguru.in/fubiq/billing/product/add"
    >
      Add New Product
    </a>
    <a
      className="btn btn-sm btn-success pull-right btn-flat"
      style={{ margin: 10 }}
      href="https://www.tenderguru.in/fubiq/billing/product/import"
    >
      Import Products
    </a>
    <a
      className="btn btn-sm btn-default btn-flat pull-right"
      style={{ margin: 10 }}
      href="https://www.tenderguru.in/fubiq/billing/product/products_barcode"
      onclick="window.open(this.href,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); 
return false;"
    >
      Products Barcode
    </a>
  </div>
  {/* /.box-header */}
  <h1>
    <b></b>
  </h1>
  <div className="box-body" style={{ overflow: "auto" }}>
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
                  aria-label="Image: activate to sort column descending"
                  aria-sort="ascending"
                  style={{ width: "38.0781px" }}
                >
                  Image
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Code: activate to sort column ascending"
                  style={{ width: "33.6719px" }}
                >
                  Code
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Batch-no: activate to sort column ascending"
                  style={{ width: "39.8906px" }}
                >
                  Batch-no
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="HSN/SAC Code: activate to sort column ascending"
                  style={{ width: "55.0938px" }}
                >
                  HSN/SAC Code
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Name: activate to sort column ascending"
                  style={{ width: "73.7344px" }}
                >
                  Name
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Brand-Name: activate to sort column ascending"
                  style={{ width: "41.7188px" }}
                >
                  Brand-Name
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Product-Details: activate to sort column ascending"
                  style={{ width: "53.4375px" }}
                >
                  Product-Details
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Category: activate to sort column ascending"
                  style={{ width: "55.4688px" }}
                >
                  Category
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="SubCategory: activate to sort column ascending"
                  style={{ width: "79.2188px" }}
                >
                  SubCategory
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Dealer Margin: activate to sort column ascending"
                  style={{ width: "97.2031px" }}
                >
                  Dealer Margin
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Company Margin: activate to sort column ascending"
                  style={{ width: "83.1406px" }}
                >
                  Company Margin
                </th>
                <th
                  width="10%"
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Cost(): activate to sort column ascending"
                  style={{ width: "31.9531px" }}
                >
                  Cost(
                  <span className="fa fa-rupee" />)
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Mrp: activate to sort column ascending"
                  style={{ width: "24.2656px" }}
                >
                  Mrp
                </th>
                <th
                  width="10%"
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Price(): activate to sort column ascending"
                  style={{ width: 36 }}
                >
                  Price(
                  <span className="fa fa-rupee" />)
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Quantity: activate to sort column ascending"
                  style={{ width: "54.7969px" }}
                >
                  Quantity
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Unit: activate to sort column ascending"
                  style={{ width: "37.125px" }}
                >
                  Unit
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Unit-Configure: activate to sort column ascending"
                  style={{ width: "60.6875px" }}
                >
                  Unit-Configure
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Quanity per Unit: activate to sort column ascending"
                  style={{ width: "49.4375px" }}
                >
                  Quanity per Unit
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Weight: activate to sort column ascending"
                  style={{ width: "43.3438px" }}
                >
                  Weight
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Alert Quantity: activate to sort column ascending"
                  style={{ width: "54.7969px" }}
                >
                  Alert Quantity
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="index"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Action: activate to sort column ascending"
                  style={{ width: "39.4375px" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" className="odd">
                <td>1</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/./assets/images/product/18057620005f3bd62e574d4.jpg"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/./assets/images/product/18057620005f3bd62e574d4.jpg"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5551</td>
                <td>yes</td>
                <td>20091100</td>
                <td>Classic Aloo Tikki 320 GRM</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>FMCG</td>
                <td>Tobacco</td>
                <td>1341.56</td>
                <td>13.51</td>
                <td align="right">55.50</td>
                <td>999</td>
                <td align="right">63.00</td>
                <td>62</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/727"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="even">
                <td>2</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>100011</td>
                <td>yes</td>
                <td>440014</td>
                <td>harshil Patym</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>Raymond</b>
                  </span>
                </td>
                <td>Harshil Paytm 100gm </td>
                <td>FMCG</td>
                <td>Grocery</td>
                <td>15.56</td>
                <td>10.00</td>
                <td align="right">80.00</td>
                <td>120</td>
                <td align="right">88.00</td>
                <td>-70</td>
                <td>BOX - BOX</td>
                <th>20</th>
                <td>10</td>
                <td>100</td>
                <td>100</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/893"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="odd">
                <td>3</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>123345</td>
                <td>yes</td>
                <td>234</td>
                <td>super-product</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td>super-product super-product super-product</td>
                <td>FMCG</td>
                <td>Tobacco</td>
                <td>-23.73</td>
                <td>25.00</td>
                <td align="right">80.00</td>
                <td>90</td>
                <td align="right">100.00</td>
                <td>0</td>
                <td>BAL - BALE</td>
                <th>20</th>
                <td>10</td>
                <td>20</td>
                <td>4</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/963"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="javascript:delete_id(963)"
                    onclick="return confirm('Are you absolutely sure you want to delete?')"
                    title="Delete"
                    className="btn btn-xs btn-success"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="even">
                <td>4</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5552</td>
                <td>yes</td>
                <td>20091100</td>
                <td>Cheesy Corn triangles 320 GRM</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>Frozen Foods</td>
                <td>food</td>
                <td>626.55</td>
                <td>11.61</td>
                <td align="right">112.00</td>
                <td>999</td>
                <td align="right">125.00</td>
                <td>20</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/728"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="odd">
                <td>5</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/assets/images/product/no_image.jpg"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5553</td>
                <td>yes</td>
                <td>20091100</td>
                <td>Crunchy Chicken Nuggets 450 GRM</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>Frozen Foods</td>
                <td>food</td>
                <td>383.08</td>
                <td>9.30</td>
                <td align="right">172.00</td>
                <td>999</td>
                <td align="right">188.00</td>
                <td>38</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/729"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="even">
                <td>6</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/./assets/images/product/7872325295ed8d30e77e7e.png"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/./assets/images/product/7872325295ed8d30e77e7e.png"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5555</td>
                <td>yes</td>
                <td>20091100</td>
                <td>Caribbean Chicken Pops 230GMS</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>Frozen Foods</td>
                <td>food</td>
                <td>539.56</td>
                <td>2.16</td>
                <td align="right">139.00</td>
                <td>999</td>
                <td align="right">142.00</td>
                <td>8</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/731"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="odd">
                <td>7</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/./assets/images/product/14085313005ed8d3206bb53.png"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/./assets/images/product/14085313005ed8d3206bb53.png"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5556</td>
                <td>yes</td>
                <td>20091100</td>
                <td>Hara Bhara Kebab 210 GMS</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>Frozen Foods</td>
                <td>food</td>
                <td>808.18</td>
                <td>11.11</td>
                <td align="right">90.00</td>
                <td>999</td>
                <td align="right">100.00</td>
                <td>12</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/732"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="even">
                <td>8</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/./assets/images/product/12229279535ed8d32eda3a8.png"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/./assets/images/product/12229279535ed8d32eda3a8.png"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5557</td>
                <td>yes</td>
                <td>20091100</td>
                <td>Lime and Mint Wedges 320 GMS</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>Frozen Foods</td>
                <td>food</td>
                <td>1035.23</td>
                <td>6.67</td>
                <td align="right">75.00</td>
                <td>999</td>
                <td align="right">80.00</td>
                <td>0</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/733"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="odd">
                <td>9</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/./assets/images/product/3526648995ed8d33af19fc.png"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/./assets/images/product/3526648995ed8d33af19fc.png"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>5558</td>
                <td>yes</td>
                <td>20091100</td>
                <td>ITC MASTER CHEF PRAWN R M 200 GMS</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>ITC</b>
                  </span>
                </td>
                <td />
                <td>Frozen Foods</td>
                <td>food</td>
                <td>505.45</td>
                <td>20.00</td>
                <td align="right">125.00</td>
                <td>999</td>
                <td align="right">150.00</td>
                <td>0</td>
                <td>PCS - PIECES</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>10</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/734"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href=""
                    onclick="return alert('This product used so it can not be deleted')"
                    title="Delete"
                    className="btn btn-xs btn-danger"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
              <tr role="row" className="even">
                <td>10</td>
                <td width="5%" className="sorting_1">
                  <a
                    href="http://www.tenderguru.in/fubiq/billing/assets/images/product/18947649185eb3f231ce61b.png"
                    target="_blank"
                  >
                    <img
                      src="http://www.tenderguru.in/fubiq/billing/assets/images/product/18947649185eb3f231ce61b.png"
                      width="100%"
                      height="10%"
                    />
                  </a>
                </td>
                <td>010101</td>
                <td>yes</td>
                <td>440173</td>
                <td>RAKESH</td>
                <td>
                  <span style={{ color: "green" }}>
                    <b>Fubiq</b>
                  </span>
                </td>
                <td>DMT Service pack</td>
                <td>Fintech</td>
                <td>NeoBanking</td>
                <td>505.45</td>
                <td>50.00</td>
                <td align="right">100.00</td>
                <td>999</td>
                <td align="right">150.00</td>
                <td>0</td>
                <td>NOS - NUMBERS</td>
                <th />
                <td>1</td>
                <td>10</td>
                <td>20</td>
                <td>
                  {/* <a href="" title="View Details" class="btn btn-xs btn-warning"><span class="fa fa-eye"></span></a>&nbsp;&nbsp; */}
                  <a
                    href="https://www.tenderguru.in/fubiq/billing/product/edit/702"
                    title="Edit"
                    className="btn btn-xs btn-info"
                  >
                    <span className="glyphicon glyphicon-edit" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="javascript:delete_id(702)"
                    onclick="return confirm('Are you absolutely sure you want to delete?')"
                    title="Delete"
                    className="btn btn-xs btn-success"
                  >
                    <span className="glyphicon glyphicon-trash"></span>
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
                  Image
                </th>
                <th rowSpan={1} colSpan={1}>
                  Code
                </th>
                <th rowSpan={1} colSpan={1}>
                  Batch-no
                </th>
                <th rowSpan={1} colSpan={1}>
                  HSN/SAC Code
                </th>
                <th rowSpan={1} colSpan={1}>
                  Name
                </th>
                <th rowSpan={1} colSpan={1}>
                  Brand-Name
                </th>
                <th rowSpan={1} colSpan={1}>
                  Product-Details
                </th>
                <th rowSpan={1} colSpan={1}>
                  Category
                </th>
                <th rowSpan={1} colSpan={1}>
                  SubCategory
                </th>
                <th rowSpan={1} colSpan={1}>
                  Dealer Margin[((MRP-(net-dealer-value))/mrp)*1000]
                </th>
                <th rowSpan={1} colSpan={1}>
                  Company Margin[((sale-cost)/sale)*1000]
                </th>
                <th rowSpan={1} colSpan={1}>
                  Cost(
                  <span className="fa fa-rupee" />)
                </th>
                <th rowSpan={1} colSpan={1}>
                  Mrp
                </th>
                <th rowSpan={1} colSpan={1}>
                  Price(
                  <span className="fa fa-rupee" />)
                </th>
                <th rowSpan={1} colSpan={1}>
                  Quantity
                </th>
                <th rowSpan={1} colSpan={1}>
                  Unit
                </th>
                <th rowSpan={1} colSpan={1}>
                  Unit-Configure
                </th>
                <th rowSpan={1} colSpan={1}>
                  Quantity per Unit
                </th>
                <th rowSpan={1} colSpan={1}>
                  Weight
                </th>
                <th rowSpan={1} colSpan={1}>
                  Alert Quantity
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
            Showing 1 to 10 of 279 entries
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
              <li className="paginate_button ">
                <a href="#" aria-controls="index" data-dt-idx={4} tabIndex={0}>
                  4
                </a>
              </li>
              <li className="paginate_button ">
                <a href="#" aria-controls="index" data-dt-idx={5} tabIndex={0}>
                  5
                </a>
              </li>
              <li className="paginate_button disabled" id="index_ellipsis">
                <a href="#" aria-controls="index" data-dt-idx={6} tabIndex={0}>
                  …
                </a>
              </li>
              <li className="paginate_button ">
                <a href="#" aria-controls="index" data-dt-idx={7} tabIndex={0}>
                  28
                </a>
              </li>
              <li className="paginate_button next" id="index_next">
                <a href="#" aria-controls="index" data-dt-idx={8} tabIndex={0}>
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

export default Productpage
