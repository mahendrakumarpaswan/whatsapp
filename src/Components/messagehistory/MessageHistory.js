import React from "react";
import "./MessageHistory.css";
const MessageHistory = () => {
  return (
    <div className="messagehistory">
      <h2>This is MessageHistory Page</h2>
      <div id="content" class="main-content">
        <div class="container-fluid">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
            <div class="widget widget-card-two">
              <div class="widget-content">
                <div class="media">
                  <div class="w-img">
                    <img src="../img/history-icon.svg" alt="history" />
                  </div>
                  <div class="media-body">
                    <h6>Reports</h6>
                    <p class="meta-date-time"></p>
                  </div>

                  <div
                    id="reportrange"
                    class="pull-right btn  btn btn-success btn--icon-text no-border"
                  >
                    <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                    <span>June 19, 2023 - June 19, 2023</span>
                    <b class="caret"></b>
                  </div>
                </div>

                <div
                  id="smpphistorytable_wrapper"
                  class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div
                        class="dataTables_length"
                        id="smpphistorytable_length"
                      >
                        <label>
                          Show{" "}
                          <select
                            name="smpphistorytable_length"
                            aria-controls="smpphistorytable"
                            class="form-control"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="500">500</option>
                          </select>{" "}
                          entries
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6"></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        id="smpphistorytable"
                        class="table table-bordered table-sm text-left dataTable no-footer"
                        role="grid"
                        aria-describedby="smpphistorytable_info"
                        style={{ width: "1290px" }}
                      >
                        <thead>
                          <tr role="row">
                            <th
                              class="sorting_disabled details-control"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "32px" }}
                            ></th>
                            <th
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "194px" }}
                            >
                              Date
                            </th>
                            <th
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "146px" }}
                            >
                              CampaignName
                            </th>
                            <th
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "157px" }}
                            >
                              Numbers
                            </th>
                            <th
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "125px" }}
                            >
                              Message
                            </th>
                            <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style={{ width: "125px" }}
                          >
                          Route
                          </th>
                            <th
                              class="sorting_disabled"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "210px" }}
                            >
                            Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd">
                            <td
                              valign="top"
                              colspan="7"
                              class="dataTables_empty"
                            >
                              No data available in table
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        id="smpphistorytable_processing"
                        class="dataTables_processing card"
                        style={{ display: "none" }}
                      >
                        Processing...
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div
                        class="dataTables_info"
                        id="smpphistorytable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 0 to 0 of 0 entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="smpphistorytable_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="smpphistorytable_previous"
                          >
                            <a
                              href="#"
                              aria-controls="smpphistorytable"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="smpphistorytable_next"
                          >
                            <a
                              href="#"
                              aria-controls="smpphistorytable"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHistory;
