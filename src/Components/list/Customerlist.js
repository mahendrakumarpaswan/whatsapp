import React, { useState, useEffect } from "react";
import CustomerlistData from "../services/customerlist/CustomerlistData";

import "./customerlist.css";

const Customerlist = () => {
  const [payload, setPayload] = useState([]);
  const [filteredPayload, setFilteredPayload] = useState([]); // New state for filtered data;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getCustomerData();
  }, []);

  const getCustomerData = async (page = 1) => {
    try {
      const response = await CustomerlistData(page);
      const data = response.data.records;
      setPayload(data);
      setFilteredPayload(data); // Update filteredPayload initially with all data
      setTotalPages(Math.ceil(data.length / 10)); // Calculate total pages based on data length (assuming 10 items per page)
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e, id) => {
    const { value } = e.target;

    if (value === "") {
      setFilteredPayload(payload); // If input value is empty, show all data
    } else {
      const updatedProducts = payload.filter((val) => {
        return val.fname.toLowerCase().includes(value.toLowerCase()); // Filter names that include the search input
      });
      setFilteredPayload(updatedProducts); // Update filteredPayload with filtered data
      setTotalPages(Math.ceil(updatedProducts.length / 10)); // Recalculate total pages based on filtered data length
      setCurrentPage(1); // Reset current page to 1 when filtering
    }
  };

  const handlePaginationClick = (page) => {
         console.log('page..!!',page);
    setCurrentPage(page);
    getCustomerData(page)
  };




  return (
    <div>
      <div className="inputText">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search a specific name"
          style={{ borderRadius: "5px", width: "40%", height: "37px" }}
        />
      </div>
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered table-sm"
        cellSpacing="0"
        width="10%"
      >
        <thead>
          <tr>
            <th className="th-sm">Customerlisttableid</th>
            <th className="th-sm">Name</th>
            <th className="th-sm">Mobile</th>
            <th className="th-sm">Email</th>
            <th className="th-sm">designation</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayload.map((val, index) => (
            <tr key={index}>
              <td>{val._id}</td>
              <td>{val.fname}</td>
              <td>{val.email}</td>
              <td>{val.mobile}</td>
              <td>{val.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              onClick={() => handlePaginationClick(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
          <a className="page-link" href="#" onClick={() => handlePaginationClick(1)}>
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => handlePaginationClick(2)}>
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => handlePaginationClick(3)}>
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => handlePaginationClick(4)}>
            4
          </a>
        </li>
          <li
            className={currentPage === 4 ? "page-item disabled" : "page-item"}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => handlePaginationClick(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Customerlist;
