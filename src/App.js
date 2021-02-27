import React, { useState } from "react";
import API from "./utils/API";
import './App.css';
import Directory from "./components/directory";
import SearchForm from "./components/searchForm";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmp, setFilter] = useState([]);
  const [employeeSearch, setSearch] = useState([]);

  const employeeGet = () => {
    API.search()
      .then(res => {
        console.log("api content: ", res.data.results)
        setEmployees(res.data.results)
        setFilter(res.data.results)
      })
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setSearch(value);
    updateTable(value);
  }

  const updateTable = (val) => {
    val = val.toLowerCase();
    console.log(val);
  
    let newArr = [];
    employees.filter(emp => {
      let empVal = emp.name.first.toLowerCase();
      if (empVal.match(val)) { 
        console.log(emp.name.first)
        newArr.push(emp)
      }  
    })
    setFilter(newArr);
    //filter list built by filter map through employee list

}

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h2>Employee Directory</h2>
        </div>
        <div className="row">
          <div className="col-8">
            <SearchForm
              name="EmployeeSearch"
              value={employeeSearch}
              onChange={handleInputChange}
              placeholder="Search For an Employee"
            />
          </div>
          <button className="btn btn-warning"
          onClick={employeeGet}>
            Get employees</button>
        </div>
        <div className="row">
          <h3>{employeeSearch}</h3>
        </div>
        <div className="row">
          <Directory employees={filteredEmp} />
        </div>
      </div>

    </div>
  );
}


export default App;
