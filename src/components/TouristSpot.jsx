import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
  // const handleViewDetails = () => {};
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
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{touristsSpotName}</h2>
          <h2 className="text-xl">{countryName} </h2>
          <p>
            Best for <span className="font-bold">{season}</span> and{" "}
            <span className="font-bold"> {time}</span> days tour
          </p>
          <p>{location}</p>
          <h2>Avarage Cost of {cost}</h2>
          <div className="card-actions justify-center">
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
