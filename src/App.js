import React, { useEffect, useState } from "react";
import useToggle from "react-use-toggle"
import API from "./utils/API";
import './App.css';
import Directory from "./components/directory";
import SearchForm from "./components/searchForm";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmp, setFilter] = useState([]);
  const [employeeSearch, setSearch] = useState([]);
  const [nameToggler, setNameToggle] = useToggle([]);
  const [ageToggler, setAgeToggle] = useToggle([]);

  useEffect(() => {
    employeeGet();
    setAgeToggle()
    setNameToggle();
  }, [])

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
    let newArr = [];
    employees.filter(emp => {
      let empVal = emp.name.first.toLowerCase();
      if (empVal.match(val)) {
        newArr.push(emp)
      }
    })
    setFilter(newArr);
    //filter list built by filter map through employee list
  }

  function handleSort(type) {
    console.log("sort entered")
    if (type === "age") {
      console.log("age: ", ageToggler)
      setAgeToggle()
      let sortedVal = employees.sort((a, b) => {
        return a.dob.age - b.dob.age;
      })
      console.log("sorted var: ", sortedVal)
      if (ageToggler) {
        sortedVal.reverse();
        console.log("inverted age sort: ", sortedVal)
      }
      setEmployees(sortedVal)
    }
    if (type === "name") {
      console.log("name: ", nameToggler)
      setNameToggle();
      let sortedVal = employees.sort((a, b) => {
        var nameA = a.name.first.toUpperCase();
        var nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      console.log("sorted var: ", sortedVal)
      if (nameToggler) {
        sortedVal.reverse();
        console.log("sorted inverted name: ", sortedVal)
      }
      setEmployees(sortedVal)
    }

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
        </div>
        <div className="row">
          <h3>{employeeSearch}</h3>
        </div>
        <div className="row">
          <Directory employees={filteredEmp} sort={handleSort} />
        </div>
      </div>

    </div>
  );
}


export default App;
