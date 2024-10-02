import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const MyList = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);

  // Ensure user.email exists before using it
  if (!user?.email) {
    return <div>Loading...</div>;
  }

  const myData = loadedData.filter(
    (data) => data.email.toLowerCase() === user.email.toLowerCase()
  );

  console.log("Filtered data: ", myData);

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
            {/* Render each row from myData */}
            {myData.map((data, idx) => (
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
                          src={data.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.touristsSpotName}</div>
                      <div className="text-sm opacity-50">
                        {data.countryName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{data.countryName}</td>
                <td>{data.cost}</td>

                <th className="flex gap-2">
                  <button className="btn btn-primary  btn-xs">Update</button>
                  <button className="btn btn-error btn-xs">Delete</button>
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
