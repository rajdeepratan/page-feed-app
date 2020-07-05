import React from "react";
import Select from "react-select";

import "./SelectBox.scss";

const options = [
  { value: "date", label: "Date" },
  { value: "likes", label: "Likes" },
  { value: "views", label: "Views" },
  { value: "shares", label: "Shares" },
];

function SelectBox({ selectedOption, sorting }) {
  return (
    <Select
      className={"shorting-select"}
      placeholder={"Short The List By"}
      value={selectedOption}
      onChange={sorting}
      options={options}
    />
  );
}

export default SelectBox;
