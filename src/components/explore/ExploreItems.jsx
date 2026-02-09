import React, { useState } from "react";
import SortedItems from "./SortedItems";
import DefaultItems from "./DefaultItems";

const ExploreItems = () => {
  const [sortOption, setSortOption] = useState("Default");

  const handleOptionChange = (event) => {
    setSortOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <select
        id="filter-items"
        value={sortOption}
        onChange={handleOptionChange}
      >
        <option value="Default">Default</option>
        <option value="price_low_to_high">Price, Low to High</option>
        <option value="price_high_to_low">Price, High to Low</option>
        <option value="likes_high_to_low">Most liked</option>
      </select>
      
        {sortOption === "Default" ? (
          <DefaultItems />
        ) : (
          <SortedItems sortOption={sortOption} />
        )}
    </div>
  );
};

export default ExploreItems;
