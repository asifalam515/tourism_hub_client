import React, { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const MyList = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);

  // Initialize state with filtered loaded data
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const filteredData = loadedData.filter(
        (item) => item.email.toLowerCase() === user.email.toLowerCase()
      );
      setData(filteredData);
    }
  }, [loadedData, user]);

  // Delete data
  const handleDeleteData = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mylist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = data.filter((item) => item._id !== _id);
              setData(remaining);
            }
          });
      }
    });
  };

  // Ensure user.email exists before using it
  if (!user?.email) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My list</h1>
      {/* Render the filtered data */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name of the Place</th>
              <th>Country</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Render each row from data */}
            {data.map((item, idx) => (
              <tr key={idx}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.touristsSpotName}</div>
                      <div className="text-sm opacity-50">
                        {item.countryName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.countryName}</td>
                <td>{item.cost}</td>

                <th className="flex gap-2">
                  <button className="btn btn-primary btn-xs">Update</button>
                  <button
                    onClick={() => handleDeleteData(item._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
