import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const loadedData = useLoaderData();
  const {
    image,
    touristsSpotName,
    countryName,
    location,
    description,
    cost,
    season,
    time,
    email,
    user_name,
    visitors,
  } = loadedData;
  console.log(loadedData);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Details Information About: {touristsSpotName}
      </h1>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            className="rounded-xl w-full max-w-md mx-auto"
            src={image}
            alt={touristsSpotName}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold mb-4">{countryName}</h2>
          <p className="text-lg mb-4">{location}</p>
          <p className="text-lg mb-4">
            Best for: {description} and {season} season
          </p>
          <div className="text-lg mb-4">
            <span className="font-semibold">Average Cost:</span> {cost}
            <span className="font-semibold">
              {" "}
              with {visitors} visitors per year
            </span>
          </div>
          <div className="text-lg mb-4">
            <span className="font-semibold">Travel Time:</span> {time} days
          </div>
          <div className="text-lg">
            <span className="font-semibold">Added By:</span> {user_name}
            <span className="font-semibold"> Email:</span> {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
