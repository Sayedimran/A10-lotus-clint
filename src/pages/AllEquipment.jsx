import React from "react";
import { useLoaderData } from "react-router-dom";
import AllProductList from "./AllProductList";

const AllEquipment = () => {
  const sports = useLoaderData();
  console.log(sports);

  return (
    <div>
      <div>
        <div className=" p-6">
          <table className="table w-full  bg-white shadow-lg rounded-lg">
            {/* Table Header */}
            <thead className=" bg-green-400">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {sports.map((sport) => (
                <AllProductList key={sport._id} sports={sport} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
