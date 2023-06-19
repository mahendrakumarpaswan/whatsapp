import React from 'react'
import './CustomerGroup.css';
const CustomerGroup = () => {
  return (
    <div className='customergroup'>
    <div class="content">
    <div class="page-header">
    <div class="page-title">
    <h4>Sales Report</h4>
    <h6>Manage your Sales Report</h6>
    </div>
    </div>
    
    <div class="card">
    <div class="card-body">
    <div class="table-top">
    <div class="search-set">
    <div class="search-path">
    <a class="btn btn-filter" id="filter_search">
    <img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/filter.svg" alt="img"/>
    <span><img src="assets/img/icons/closes.svg" alt="img"/></span>
    </a>
    </div>
    <div class="search-input">
    <a class="btn btn-searchset"><img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/search-white.svg" alt="img"/></a>
    <div id="DataTables_Table_0_filter" class="dataTables_filter"><label> <input type="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="DataTables_Table_0"/></label></div></div>
    </div>
    <div class="wordset">
    <ul>
    <li>
    <a data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="pdf" aria-label="pdf"><img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/pdf.svg" alt="img"/></a>
    </li>
    <li>
    <a data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="excel" aria-label="excel"><img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/excel.svg" alt="img"/></a>
    </li>
    <li>
    <a data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="print" aria-label="print"><img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/printer.svg" alt="img"/></a>
    </li>
    </ul>
    </div>
    </div>
    
    <div class="card" id="filter_inputs">
    <div class="card-body pb-0">
    <div class="row">
    <div class="col-lg-2 col-sm-6 col-12">
    <div class="form-group">
    <div class="input-groupicon">
    <input type="text" placeholder="From Date" class="datetimepicker"/>
    <div class="addonset">
    <img src="assets/img/icons/calendars.svg" alt="img"/>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-2 col-sm-6 col-12">
    <div class="form-group">
    <div class="input-groupicon">
    <input type="text" placeholder="To Date" class="datetimepicker"/>
    <div class="addonset">
    <img src="assets/img/icons/calendars.svg" alt="img"/>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-1 col-sm-6 col-12 ms-auto">
    <div class="form-group">
    <a class="btn btn-filters ms-auto"><img src="assets/img/icons/search-whites.svg" alt="img"/></a>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div class="table-responsive">
    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><table class="table datanew dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
    <thead>
    <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
    
    
    
    
    : activate to sort column descending" >
    <label class="checkboxs">
    <input type="checkbox" id="select-all"/>
    <span class="checkmarks"></span>
    </label>
    </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Product Name: activate to sort column ascending" >Product Name</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="SKU: activate to sort column ascending">SKU</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label=" Category: activate to sort column ascending"> Category</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Brand: activate to sort column ascending">Brand</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Sold amount: activate to sort column ascending">Sold amount</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Sold qty: activate to sort column ascending">Sold qty</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Instock qty: activate to sort column ascending">Instock qty</th></tr>
    </thead>
    <tbody>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <tr class="odd">
    <td class="sorting_1">
    <label class="checkboxs">
    <input type="checkbox"/>
    <span class="checkmarks"></span>
    </label>
    </td>
    <td class="productimgname">
    <a class="product-img">
    <img src="assets/img/product/product6.jpg" alt="product"/>
    </a>
    <a href="javascript:void(0);">Unpaired gray</a>
    </td>
    <td>PT006</td>
    <td>Shoes</td>
    <td>Adidas</td>
    <td>100.00</td>
    <td>1</td>
    <td>50</td>
    </tr><tr class="even">
    <td class="sorting_1">
    <label class="checkboxs">
    <input type="checkbox"/>
    <span class="checkmarks"></span>
    </label>
    </td>
    <td class="productimgname">
    <a class="product-img">
    <img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/product/product1.jpg" alt="product"/>
    </a>
    <a href="javascript:void(0);">Avocat</a>
    </td>
    <td>PT007</td>
    <td>Fruits</td>
    <td>N/D</td>
    <td>5.00</td>
    <td>2</td>
    <td>29</td>
    </tr><tr class="odd">
    <td class="sorting_1">
    <label class="checkboxs">
    <input type="checkbox"/>
    <span class="checkmarks"></span>
    </label>
    </td>
    <td class="productimgname">
    <a class="product-img">
    <img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/product/product2.jpg" alt="product"/>
    </a>
    <a href="javascript:void(0);">Banana</a>
    </td>
    <td>PT008</td>
    <td>Fruits</td>
    <td>N/D</td>
    <td>10.00</td>
    <td>2</td>
    <td>24</td>
    </tr><tr class="even">
    <td class="sorting_1">
    <label class="checkboxs">
    <input type="checkbox"/>
    <span class="checkmarks"></span>
    </label>
    </td>
    <td class="productimgname">
    <a class="product-img">
    <img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/product/product3.jpg" alt="product"/>
    </a>
    <a href="javascript:void(0);">Earphones</a>
    </td>
    <td>PT009</td>
    <td>Computers</td>
    <td>N/D</td>
    <td>15.00</td>
    <td>2</td>
    <td>11</td>
    </tr><tr class="odd">
    <td class="sorting_1">
    <label class="checkboxs">
    <input type="checkbox"/>
    <span class="checkmarks"></span>
    </label>
    </td>
    <td class="productimgname">
    <a class="product-img">
    <img src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/product/product4.jpg" alt="product"/>
    </a>
    <a href="javascript:void(0);">Banana</a>
    </td>
    <td>PT010</td>
    <td>Health Care </td>
    <td>N/D</td>
    <td>5.00</td>
    <td>4</td>
    <td>16</td>
    </tr></tbody>
    </table><div class="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div><div class="dataTables_paginate paging_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">2</a></li></ul></div><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">11 - 15 of 15 items</div></div>
    </div>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default CustomerGroup
