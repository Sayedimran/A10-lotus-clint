import { useLoaderData } from "react-router-dom";

const SportDetails = () => {
  const SportDetails = useLoaderData();
  const {
    photo,
    name,
    category,
    price,
    rating,
    customization,
    time,
    stoke,
    description,
  } = SportDetails;

  return (
    <div className="container mx-auto p-6">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg p-6 rounded-lg">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={photo}
            alt="Product"
            className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
          <p className="text-lg text-black mt-2">
            Category:{" "}
            <span className="font-semibold text-green-600">{category}</span>
          </p>
          <p className="text-2xl font-bold text-green-600 mt-4">
            {" "}
            Price: {price}$
          </p>

          <h2 className="font-semibold">
            Rating:{" "}
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
          </h2>
          <h1>
            <span
              className="font-semibold
            "
            >
              Customize:{" "}
            </span>
            {customization}
          </h1>
          <h1>
            <span
              className="font-semibold
            "
            >
              Manufachar-Time:
            </span>{" "}
            {time} Days
          </h1>
          <p className="mt-4 text-gray-700">{description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md">
              Add to Cart
            </button>
            <button className="btn bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportDetails;
