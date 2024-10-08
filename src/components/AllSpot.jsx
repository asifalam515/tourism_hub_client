import React from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "./TouristSpot";

const AllSpot = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <div className="tourist-spot grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {loadedData.map((data) => (
          <TouristSpot key={data._id} spot={data}></TouristSpot>
        ))}
      </div>
    </div>
  );
};

export default AllSpot;
