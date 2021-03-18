import React, { Component } from "react";
import PizzaUpdate from "./pizzeriaupdate";
import axios from "axios";

class PizzaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
    this.deletePizzeria = this.deletePizzeria.bind(this);
  }
  updatePizzeriaDetails() {
    this.setState({ showComponent: true });
  }
  deletePizzeria(obj) {
    axios
      .delete("http://127.0.0.1:8000".concat(obj))
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const obj = this.props.pizzeriaDetail;
    return (
      <div style={{ color: "yellow", border: "1px solid yellow" }}>
        <h4>Establishment: {obj.pizzeria_name}</h4>
        <h4>
          Address: {obj.street} {obj.city} {obj.state}
        </h4>
        <h4>Description: {obj.description}</h4>
        <button
          style={{ backgroundColor: "white" }}
          onClick={() => this.updatePizzeriaDetails()}
        >
          Update
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => this.deletePizzeria(obj.delete)}
        >
          Delete
        </button>
        {this.state.showComponent ? <PizzaUpdate pizzeriaUpdate={obj} /> : null}
      </div>
    );
  }
}
export default PizzaDetail;
