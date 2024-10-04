import { useLoaderData } from "react-router-dom";
import TouristSpot from "./TouristSpot";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Faq from "./Faq";

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

      <div className="mb-2">
        <ContactUs></ContactUs>
      </div>
      <div className="mt-2">
        {" "}
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
