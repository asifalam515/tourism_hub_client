import Swal from "sweetalert2";
const AddSpot = () => {
  const handleAddSpot = (e) => {
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

    const newSpot = {
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
    // insert at mongodb
    fetch("http://localhost:5000/spot", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Tourist Spot has been Added",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      });
  };
  return (
    <div className="p-4">
      <form
        onSubmit={handleAddSpot}
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
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tourists Spot Name</span>
          </label>
          <input
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
            name="email"
            type="email"
            placeholder="Visitors"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            name="user_name"
            type="text"
            placeholder="Visitors"
            className="input input-bordered"
          />
        </div>
        <div className="form-control col-span-1 sm:col-span-2 md:col-span-3 flex justify-center">
          <button className="btn btn-primary  ">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddSpot;
