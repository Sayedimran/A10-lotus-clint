import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const SportCard = ({ sport }) => {
  const sportcategory = useLoaderData();
  const [filterCard, seFilterCard] = useState([]);

  const {
    _id,
    photo,
    name,
    category,
    price,
    stoke,

  } = sport;
  
  console.log(filterCard);
  
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/sports?category=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        seFilterCard(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [params.id]);

  return (
    <div className="card w-80 mx-auto  shadow-xl  hover:scale-105 transition-transform duration-300 ">
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
          <Link to={`/allequipe`}>
            <button className="btn btn-primary bg-emerald-600  hover:bg-blue-700 text-white rounded-xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
