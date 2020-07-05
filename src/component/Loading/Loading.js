import React from "react";

import "./Loading.scss";

function Loading() {
  return (
    <div className="card-loader">
      <div className="row">
        <div className="col-sm-3">
          <div className="loader-wrapper">
            <div className="loader-image"></div>
            <div className="card-details">
              <div className="title"></div>
              <div className="date"></div>
            </div>
            <ul className="other-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="loader-wrapper">
            <div className="loader-image"></div>
            <div className="card-details">
              <div className="title"></div>
              <div className="date"></div>
            </div>
            <ul className="other-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="loader-wrapper">
            <div className="loader-image"></div>
            <div className="card-details">
              <div className="title"></div>
              <div className="date"></div>
            </div>
            <ul className="other-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="loader-wrapper">
            <div className="loader-image"></div>
            <div className="card-details">
              <div className="title"></div>
              <div className="date"></div>
            </div>
            <ul className="other-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
