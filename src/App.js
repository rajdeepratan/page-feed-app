import React, { useState, useEffect } from "react";
import axios from "axios";

import { Pagination, SelectBox } from "component";
import { Page } from "screen";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const pageOneFeedUrl = `http://www.mocky.io/v2/59b3f0b0100000e30b236b7e`;
const pageTwoFeedUrl = ` http://www.mocky.io/v2/59ac28a9100000ce0bf9c236`;
const pageThreeFeedUrl = `http://www.mocky.io/v2/59ac293b100000d60bf9c239`;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postLoading, setPostLoading] = useState(true);
  const [postFeed, setPostFeed] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    pageOneList();
  }, []);

  const feedListCall = (url, pageNumber) => {
    if (localStorage.getItem(pageNumber)) {
      setPostFeed(JSON.parse(localStorage.getItem(pageNumber)));
      setPostLoading(false);
    } else {
      axios
        .get(`${url}`)
        .then((res) => {
          const postList = res.data.posts;
          if (postList.length) {
            setPostFeed(postList);
            localStorage.setItem(pageNumber, JSON.stringify(postList));
          } else {
            setErrorMessage("No Data");
          }
          setPostLoading(false);
        })
        .catch(() => {
          setPostLoading(false);
          setErrorMessage("Unable to fech page 1 data");
        });
    }
  };

  const pageOneList = () => {
    feedListCall(pageOneFeedUrl, "pageOne");
  };

  const pageTwoList = () => {
    feedListCall(pageTwoFeedUrl, "pageTwo");
  };

  const pageThreeList = () => {
    feedListCall(pageThreeFeedUrl, "pageThree");
  };

  const sorting = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  const pageChange = (value) => {
    if (value === 1) {
      setCurrentPage(value);
      pageOneList();
    } else if (value === 2) {
      setCurrentPage(value);
      pageTwoList();
    } else if (value === 3) {
      setCurrentPage(value);
      pageThreeList();
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Best of Feed</h2>
        <div className="data-sorting">
          {postFeed && postFeed.length && (
            <SelectBox selectedOption={selectedOption} sorting={sorting} />
          )}
        </div>
        <div>
          <Page
            selectedOption={selectedOption}
            postLoading={postLoading}
            postFeed={postFeed}
            errorMessage={errorMessage}
          />
        </div>
        {postFeed && postFeed.length && (
          <Pagination currentPage={currentPage} pageChange={pageChange} />
        )}
      </div>
    </div>
  );
}

export default App;
