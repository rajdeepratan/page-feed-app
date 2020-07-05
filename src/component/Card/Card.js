import React, { useState, useEffect } from "react";
import moment from "moment";

import { eye, like, share } from "assets";
import "./Card.scss";

function Card({ selectedOption, postFeed }) {
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    setShowDetails(null);
  }, [postFeed]);

  const sorting = (a, b) => {
    if (selectedOption) {
      if (selectedOption.value === "date") {
        if (a.event_date < b.event_date) {
          return -1;
        }
        if (a.event_date > b.event_date) {
          return 1;
        }
        return 0;
      }
      if (selectedOption.value === "likes") {
        if (a.likes < b.likes) {
          return -1;
        }
        if (a.likes > b.likes) {
          return 1;
        }
        return 0;
      }
      if (selectedOption.value === "views") {
        if (a.views < b.views) {
          return -1;
        }
        if (a.views > b.views) {
          return 1;
        }
        return 0;
      }
      if (selectedOption.value === "shares") {
        if (a.shares < b.shares) {
          return -1;
        }
        if (a.shares > b.shares) {
          return 1;
        }
        return 0;
      }
    }
    return 0;
  };

  const showDetailsFunction = (index) => {
    setShowDetails(index);
  };

  return (
    <div className="feed-card">
      <div className="row">
        {postFeed.sort(sorting).map((listItem, index) => (
          <div className="col-sm-3" key={`${listItem.id}-${index}}`}>
            <div className="card-wrapper">
              <div className="card-image">
                <img src={listItem.thumbnail_image} alt="thumbnail_image" />
              </div>
              <div className="card-details">
                <div className="title">
                  <p>
                    {listItem.event_name.length > 14
                      ? listItem.event_name.replace(
                          new RegExp("^(.{" + 14 + "}[^s]*).*"),
                          "$1"
                        )
                      : listItem.event_name}
                  </p>
                </div>
                <div className="date">
                  <span>{moment(listItem.event_date).format("MMM Do YY")}</span>
                </div>
              </div>
              {showDetails === index ? (
                <div className="other-details">
                  <img src={like} alt="" />
                  <span>{listItem.likes}</span>
                  <img src={eye} alt="" />
                  <span>{listItem.views}</span>
                  <img src={share} alt="" />
                  <span>{listItem.shares}</span>
                </div>
              ) : (
                <div className="show-more-button">
                  <button
                    type="button"
                    className="btn btn-info btn-sm"
                    onClick={() => showDetailsFunction(index)}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
