import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
  const {
    _id,
    image,
    touristsSpotName,
    countryName,
    location,
    description,
    cost,
    season,
    time,
  } = spot;
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 h-auto shadow-xl">
        <figure>
          <img className="w-full h-48 object-cover" src={image} alt="image" />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-center">
              {touristsSpotName}
            </h2>
            <h2 className="text-xl text-center">{countryName}</h2>
            <p className="text-center">
              Best for <span className="font-bold">{season}</span> and{" "}
              <span className="font-bold">{time}</span> days tour
            </p>
            <p className="text-center">{location}</p>
            <h2 className="text-center">Average Cost of {cost}</h2>
          </div>
          <div className="card-actions justify-center mt-4">
            <Link to={`/viewDetails/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;
