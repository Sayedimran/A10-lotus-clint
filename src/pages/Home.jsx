import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import SportCard from "./SportCard";
import Category from "./Category";

const Home = () => {
  const sports = useLoaderData();

  return (
    <div>
      <div>
        <Banner />
      </div>

      <div>

        {/* category section */}

        <div>
          <h2 className="text-3xl font-bold text-center  ">
            Our Sports Equipment Category
          </h2>
          <Category  category={sports} />
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 mt-8  ">
          {sports.map((sport) => (
            <SportCard key={sport._id} sport={sport} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Review Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 mt-3">"Amazing quality products!"</p>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold">Emily Smith</h3>
            <p className="text-yellow-500">⭐⭐⭐⭐</p>
            <p className="text-gray-600 mt-3">"Great customer service!"</p>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold">Michael Brown</h3>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 mt-3">
              "Fast delivery and good quality!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
