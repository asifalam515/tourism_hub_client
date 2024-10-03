import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  console.log("i want to get user id", loadedData._id);
  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const touristsSpotName = form.tourists_spot_name.value;
    const countryName = form.country_name.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = parseInt(form.cost.value);
    const season = form.season.value;
    const time = form.time.value;
    const visitors = parseInt(form.visitors.value);
    const email = form.email.value;
    const user_name = form.user_name.value;

    const updatedSpot = {
      image,
      touristsSpotName,
      countryName,
      location,
      description,
      cost,
      season,
      time,
      visitors,
      email,
      user_name,
    };
    // updated request
    fetch(`http://localhost:5000/mylist/${loadedData._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Spot Updated Successfully", "success");
          form.reset();
        }
      });
  };
  const {
    _id,
    image,
    touristsSpotName,
    countryName,
    location,
    description,
    cost,
    season,
    email,
    time,
    visitors,
    user_name,
  } = loadedData;
  return (
    <div>
      <h1 className="text-5xl">Update Your spot</h1>
      <form
        onSubmit={handleUpdateSpot}
        className="card-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            name="image"
            type="text"
            placeholder="Image"
            defaultValue={image}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tourists Spot Name</span>
          </label>
          <input
            defaultValue={touristsSpotName}
            name="tourists_spot_name"
            type="text"
            placeholder="Tourists Spot Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input
            defaultValue={countryName}
            name="country_name"
            type="text"
            placeholder="Please Provide Country Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            defaultValue={location}
            name="location"
            type="text"
            placeholder="Please Provide Location"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input
            defaultValue={description}
            name="description"
            type="text"
            placeholder="Describe the Place"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Average Cost</span>
          </label>
          <input
            defaultValue={cost}
            name="cost"
            type="number"
            placeholder="Cost"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seasonality</span>
          </label>
          <input
            defaultValue={season}
            name="season"
            type="text"
            placeholder="Season"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Travel Time</span>
          </label>
          <input
            defaultValue={time}
            name="time"
            type="number"
            placeholder="Travel Time"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Total Visitors Per Year</span>
          </label>
          <input
            defaultValue={visitors}
            name="visitors"
            type="number"
            placeholder="Visitors"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            placeholder="user email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            defaultValue={user_name}
            name="user_name"
            type="text"
            placeholder="Visitors"
            className="input input-bordered"
          />
        </div>
        <div className="form-control col-span-1 sm:col-span-2 md:col-span-3 flex justify-center">
          <button className="btn btn-primary  ">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSpot;
