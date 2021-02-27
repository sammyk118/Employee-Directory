import React, { Component }from "react";
import API from "./utils/API";
import './App.css';
import Directory from "./components/directory";
import SearchForm from "./components/searchForm";

class App extends React.Component{
  state = {
    employees: []
  };

  componentDidMount() {
    API.search()
      .then(res => {
        console.log("api content: ", res.data.results)
      this.setState({employees: res.data.results})
    })
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Directory employees={this.state.employees}/>
      </div>
    );
  }
}

export default App;
