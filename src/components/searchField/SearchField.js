import React from "react";

import { TextField } from "@mui/material";
import lodash from "lodash";

import "./style.css";
import { UNITS } from "../../data";

const SearchField = ({ setFilteredCards }) => {
  const filterCards = lodash.debounce((event) => {
    const filteredValues = UNITS.filter((card) =>
      card.name.includes(event.target.value)
    );

    setFilteredCards(filteredValues);
  }, 800);

  return (
    <div className="search-wrapper">
      <TextField
        id="full-width-text-field"
        placeholder="🔍 Search deliveries by units"
        variant="standard"
        style={{ width: "50%" }}
        InputProps={{
          inputProps: {
            style: { textAlign: "center", fontSize: "1.5rem" },
          },
        }}
        onChange={filterCards}
      />
    </div>
  );
};

export default SearchField;
