import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetail.css";

class DogDetail extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="DogDetail row justify-content-center mt-5">
        <div className="col-8 col-lg-5">
          <div className="DogDetails-card card">
            <img className="card-img-top" src={dog.src} alt={dog.name} />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle">{dog.age} years old</h4>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact, i) => (
                  <li className="list-group-item" key={i}>
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <Link className="btn btn-info" to="/dogs">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetail;
