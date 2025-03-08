import React from "react";
import { Link } from "react-router-dom";

const AllProductList = ({ sports }) => {
  const {
    _id,
    photo,
    name,
    category,
    price,
    rating,
    customization,
    time,
    stoke,
    description,
  } = sports;
  return (
    <tr className="  hover:bg-gray-100  ">
      <td className="py-3  w-4  px-4">{name}</td>
      <td className="py-3  w-4  px-4">{category}</td>
      <td className="py-3  w-4 px-4 text-blue-600 font-semibold">${price}</td>
      <td className="py-3 w-4  px-4">
        <Link to={`/detail/${_id}`}>
          <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllProductList;
