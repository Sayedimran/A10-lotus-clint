import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUser = ({ item, ondelete }) => {
  const { _id, photo, name, category, price, stoke } = item;
 
  return (
    <div className="card w-80 mx-auto  shadow-xl  hover:scale-105 transition-transform duration-300 mt-5 ">
      {/* Card Image */}
      <figure>
        <img src={photo} alt="Cyber Cafe" className="w-full  object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h3 className="card-title text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">Category: {category} </p>
        <p className="text-gray-800 font-semibold">Price : ${price}</p>
        {stoke < 1 ? (
          <p className="text-gray-800 font-semibold"> Available : Stoke Out </p>
        ) : (
          <p className="text-gray-800 font-semibold"> Available : {stoke} </p>
        )}

        <div className="card-actions justify-start">
          <Link
            to={`/updateCard/${_id}`}
            className="btn btn-primary bg-emerald-700  hover:bg-blue-700 text-white rounded-xl"
          >
            UP-Date <MdEdit />
          </Link>

         
            <button
              onClick={() => ondelete(_id)}
              className="btn btn-primary bg-orange-600  hover:bg-red-700 text-white rounded-xl"
            >
              Delete <MdDelete />
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductUser;
