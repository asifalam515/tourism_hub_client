import { useLoaderData } from "react-router-dom";
import TouristSpot from "./TouristSpot";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const loadedData = useLoaderData();

  return (
    <div>
      <div className="tourist-spot grid grid-cols-2">
        {loadedData.map((data) => (
          <TouristSpot key={data._id} spot={data}></TouristSpot>
        ))}
      </div>
    </div>
  );
};

export default Home;
