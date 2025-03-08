import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-4">
      <div className="text-center">
        {/* 404 Heading */}
        <h1 className="text-9xl font-bold text-error mb-4 animate-bounce">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-4xl font-semibold text-base-content mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-base-content/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Go Back Home Button */}
        <Link to="/" className="btn btn-primary btn-lg px-8 py-3 text-lg font-semibold">
          Go Back Home
        </Link>
      </div>

      {/* Optional: Fun Illustration */}
      <div className="mt-12">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="404 Illustration"
          className="w-64 md:w-80 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default NotFound;
