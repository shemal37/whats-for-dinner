import React from "react";
import RestaurantCard from "./RestaurantCard";
import dataToWorkWith from "../data/someDataToWorkWith";

const RestaurantList = () => {
  console.log(dataToWorkWith);
  return (
    <div className="restaurant-list__container">
      {dataToWorkWith.map((restaurant: any) => (
        <RestaurantCard key={restaurant?.name} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
