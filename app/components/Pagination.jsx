import React, { useState } from "react";

const Pagination = ({ total = 5 }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex gap-3 justify-center items-center mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-4 h-4 rounded-full border-2 border-gray-300
            ${current === index ? "bg-red-600 border-red-600" : "bg-gray-300"}
          `}
        ></button>
      ))}
    </div>
  );
};

export default Pagination;