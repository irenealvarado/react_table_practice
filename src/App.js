import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const url = "https://medylshop.com/ReadSite.php";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        console.log("meow", data);
      });
  }
  render() {
    const columns = [
      {
        Header: "Site Name",
        accessor: "site_name"
      },
      {
        Header: "Site ID",
        accessor: "site_id"
      },
      {
        Header: "City",
        accessor: "site_city"
      }
    ];
    return (
      <div>
        <ReactTable columns={columns} data={this.state.data} />
      </div>
    );
  }
}

export default App;
