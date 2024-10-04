import { useLoaderData } from "react-router-dom";
import TouristSpot from "./TouristSpot";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Banner from "./Banner";
import ContactUs from "./ContactUs";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const loadedData = useLoaderData();

  return (
    <div>
      {/* banner */}
      <Banner></Banner>

      <div className="tourist-spot grid grid-cols-2">
        {loadedData.map((data) => (
          <TouristSpot key={data._id} spot={data}></TouristSpot>
        ))}
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
