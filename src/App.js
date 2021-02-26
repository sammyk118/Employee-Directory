import React from "react";
import './App.css';
import Directory from "./pages/directory";
import Search from "./pages/search";

class App extends React.Component{
  state = {
    employees: []
  };

  componentDidMount() {
    
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
