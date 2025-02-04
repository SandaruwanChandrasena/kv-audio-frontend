import React from "react";
import { Link } from "react-router-dom";

function NotFoundError() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/" className="w-[20px] h-[10px] bg-red-500 text-2xl">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundError;
