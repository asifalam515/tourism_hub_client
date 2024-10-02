const TouristSpot = ({ spot }) => {
  const {
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
          <h2 className="card-title">{touristsSpotName}</h2>
          <p>
            Best for {season} and {time} days tour
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;
