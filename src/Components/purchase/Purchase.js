import { useState } from "react";
import "./Purchase.css";
const Purchase = () => {

const [show,setShow] = useState(false);


const actionhandlerMethod = () =>{

    setShow(!show);
         
}
    

    return (

        <div className="purchasepage">


            <ol className="breadcrumb">
                <li>
                    <a href="https://www.tenderguru.in/fubiq/billing/auth/dashboard">
                        <i className="fa fa-dashboard" /> Dashboard
                    </a>
                </li>
                <li className="active">Purchase</li>
            </ol>

            <div class="col-md-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">List Purchase</h3>
                        <a class="btn btn-sm btn-info pull-right" style={{ margin: "10px" }} href="https://www.tenderguru.in/fubiq/billing/purchase/add" title="Add New Purchase">Add New Purchase</a>
                    </div>

                    <div class="box-body outer-scroll">
                        <div class="inner-scroll">
                            <div id="log_datatable_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="log_datatable_length"><label>Show <select name="log_datatable_length" aria-controls="log_datatable" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-6"><div id="log_datatable_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="log_datatable" /></label></div></div></div><div class="row"><div class="col-sm-12"><table id="log_datatable" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="log_datatable_info">
                                <thead>
                                    <tr role="row"><th class="sorting_disabled" rowspan="1" colspan="1" aria-label="No" style={{ width: "23.8594px" }}>No</th><th class="sorting_desc" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" aria-sort="descending" style={{ width: "52.1406px" }}>Date</th><th class="sorting" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Supplier: activate to sort column ascending" style={{ width: "221.297px" }}>Supplier</th><th class="sorting" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Purchase Status: activate to sort column ascending" style={{ width: "115.484px" }}>Purchase Status</th><th class="sorting" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Grand Total(): activate to sort column ascending" style={{ width: "102.703px" }}>Grand Total(<span class="fa fa-rupee"></span>)</th><th class="sorting" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Paid(): activate to sort column ascending" style={{ width: "53.7188px" }}>Paid(<span class="fa fa-rupee"></span>)</th><th class="sorting" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Payment Status: activate to sort column ascending" style={{ width: "113.328px" }}>Payment Status</th><th class="sorting" tabindex="0" aria-controls="log_datatable" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style={{ width: "65.4688px" }}>Action</th></tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd">
                                        <td>1</td>
                                        <td class="sorting_1">2021-02-25</td>
                                        <td>ITC Limited (RE-000101)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            40836
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" onClick={()=>actionhandlerMethod()} class="btn btn-default">
                                                    Action<span class="caret"></span>
                                                </button>
                                                 {show && <div className="test_Dev">
                                                 
                                            <ul style={{width:'200px',height:'150px',borderRadius:'1px solid black',backgroundColor:'white'}}>
                                                 <li>
                                                     <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/101"><i class="fa fa-file-text-o"></i>
                                                         Purchase Details</a>
                                                 </li>
                                                 <li>
                                                     <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/101"><i class="fa fa-money"></i>
                                                         Add Payment</a>
                                                 </li>
                                                 <li>
                                                     <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/101">
                                                         <i class="fa fa-edit"></i>
                                                         Edit Purchase</a>
                                                 </li>


                                                 <li style={{ backgroundColor: "#00ff7e" }}>
                                                     <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/101">
                                                         <i class="fa fa-edit"></i>
                                                         Upload Scan Copy</a>
                                                 </li>



                                                 <li>
                                                     <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/101" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                 </li>
                                                 <li>
                                                     <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/101"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                 </li>



                                                 <li>
                                                     <a>
                                                         <i class="fa fa-trash-o"></i>
                                                         <span style={{ color: "red" }}>
                                                             Delete Purchase(846)
                                                         </span>
                                                     </a>
                                                 </li>







                                             </ul>
                                                 
                                                 
                                                 
                                                 </div>}
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/101" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="even">
                                        <td>2</td>
                                        <td class="sorting_1">2021-02-19</td>
                                        <td>ITC Limited (RE-000100)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            47585
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/100"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/100"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/100">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/100">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/100" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/100"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(852)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/100" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="odd">
                                        <td>3</td>
                                        <td class="sorting_1">2021-02-18</td>
                                        <td>SupplierOne (RE-000099)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            575
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/99"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/99"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/99">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/99">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/99" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/99"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(853)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/99" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="even">
                                        <td>4</td>
                                        <td class="sorting_1">2021-02-08</td>
                                        <td>ITC Limited (RE-000098)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            55114
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/98"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/98"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/98">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/98">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/98" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/98"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(863)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/98" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="odd">
                                        <td>5</td>
                                        <td class="sorting_1">2021-02-03</td>
                                        <td>ITC Limited (RE-000095)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            78943
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/95"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/95"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/95">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/95">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/95" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/95"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(868)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/95" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="even">
                                        <td>6</td>
                                        <td class="sorting_1">2021-02-03</td>
                                        <td>ITC Limited (RE-000096)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            1944
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/96"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/96"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/96">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/96">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/96" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/96"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(868)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/96" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="odd">
                                        <td>7</td>
                                        <td class="sorting_1">2021-02-03</td>
                                        <td>ITC Limited (RE-000097)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            99422
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/97"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/97"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/97">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/97">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/97" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/97"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(868)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/97" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="even">
                                        <td>8</td>
                                        <td class="sorting_1">2021-01-20</td>
                                        <td>ITC Limited (RE-000094)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            1036
                                        </td>




                                        <td align="right">0</td>
                                        <td align="center">
                                            <span class="label label-danger">Pending</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/94"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/94"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit/94">
                                                            <i class="fa fa-edit"></i>
                                                            Edit Purchase</a>
                                                    </li>


                                                    <li style={{ backgroundColor: "#00ff7e" }}>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/edit_scan_copy/94">
                                                            <i class="fa fa-edit"></i>
                                                            Upload Scan Copy</a>
                                                    </li>



                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/94" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/94"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(882)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/94" class="btn btn-info">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="odd">
                                        <td>9</td>
                                        <td class="sorting_1">2021-01-15</td>
                                        <td>ITC Limited (RE-000093)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            39066
                                        </td>




                                        <td align="right">39066</td>
                                        <td align="center">
                                            <span class="label label-warning">Partial</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/93"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/payment/93"><i class="fa fa-money"></i>
                                                            Add Payment</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/93" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/93"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(887)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                            <a class="btn btn-info" href="https://www.tenderguru.in/fubiq/billing/purchase/payment/93">Pay Now</a>
                                        </td>
















                                    </tr><tr role="row" class="even">
                                        <td>10</td>
                                        <td class="sorting_1">2021-01-07</td>
                                        <td>SupplierOne (RE-000092)</td>
                                        <td align="center"><span class="label label-success">Received</span></td>



                                        <td align="right">
                                            4680
                                        </td>




                                        <td align="right">4680</td>
                                        <td align="center">
                                            <span class="label label-success">Complited</span>
                                        </td>





                                        <td align="center">
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-default gropdown-toggle" data-toggle="dropdown">
                                                    Action<span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/view/92"><i class="fa fa-file-text-o"></i>
                                                            Purchase Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/pdf/92" target="_blank  "><i class="fa fa-file-pdf-o"></i>Download as PDf</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.tenderguru.in/fubiq/billing/purchase/email/92"><i class="fa fa-envelope"></i>Email Purchase</a>
                                                    </li>



                                                    <li>
                                                        <a>
                                                            <i class="fa fa-trash-o"></i>
                                                            <span style={{ color: "red" }}>
                                                                Delete Purchase(895)
                                                            </span>
                                                        </a>
                                                    </li>







                                                </ul>
                                            </div>
                                        </td>
















                                    </tr></tbody><tfoot>
                                    <tr><th rowspan="1" colspan="1">No</th><th rowspan="1" colspan="1">Date</th><th rowspan="1" colspan="1">Supplier</th><th rowspan="1" colspan="1">Purchase Status</th><th rowspan="1" colspan="1">Grand Total(<span class="fa fa-rupee"></span>)</th><th rowspan="1" colspan="1">Paid(<span class="fa fa-rupee"></span>)</th><th rowspan="1" colspan="1">Payment Status</th><th rowspan="1" colspan="1">Action</th></tr>
                                </tfoot>
                            </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="log_datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 72 entries</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="log_datatable_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="log_datatable_previous"><a href="#" aria-controls="log_datatable" data-dt-idx="0" tabindex="0">Previous</a></li><li class="paginate_button active"><a href="#" aria-controls="log_datatable" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_button "><a href="#" aria-controls="log_datatable" data-dt-idx="2" tabindex="0">2</a></li><li class="paginate_button "><a href="#" aria-controls="log_datatable" data-dt-idx="3" tabindex="0">3</a></li><li class="paginate_button "><a href="#" aria-controls="log_datatable" data-dt-idx="4" tabindex="0">4</a></li><li class="paginate_button "><a href="#" aria-controls="log_datatable" data-dt-idx="5" tabindex="0">5</a></li><li class="paginate_button disabled" id="log_datatable_ellipsis"><a href="#" aria-controls="log_datatable" data-dt-idx="6" tabindex="0">…</a></li><li class="paginate_button "><a href="#" aria-controls="log_datatable" data-dt-idx="7" tabindex="0">8</a></li><li class="paginate_button next" id="log_datatable_next"><a href="#" aria-controls="log_datatable" data-dt-idx="8" tabindex="0">Next</a></li></ul></div></div></div></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default Purchase