import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
 

  return (
    <div role="tablist" className="flex justify-center tabs tabs-border">
      {[...new Set(category.map((item) => item.category))].map((category) => (
        <NavLink
          to={`/category/${category}`}
          key={category}
          role="tab"
          className="tab  text-lg"
        >
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
