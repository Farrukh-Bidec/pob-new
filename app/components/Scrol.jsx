// import React, { useState } from "react";

// const   scrol = ({ total = 5 }) => {
//   const [current, setCurrent] = useState(0);

//   return (

//      <div className="flex gap-3 mt-10 gap-10 justify-center items-center mt-4">
//       {Array.from({ length: total }).map((_, index) => (
//         <button
//           key={index}
//           onClick={() => setCurrent(index)}
//           className="relative w-4 h-4 rounded-full border-none p-0"
//         >
//           {current === index ? (
//             // Active dot with 3 layers
//             <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#373895]">
//               <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white">
//                 <div className="w-4 h-4 rounded-full bg-red-600"></div>
//               </div>
//             </div>
//           ) : (
//             // Inactive dot
//             <div className="w-6 h-6 rounded-full bg-gray-300 border-gray-300 border"></div>
//           )}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default scrol;
import React, { useState } from "react";

const Scrol = ({ total = 5, current, setCurrent }) => {
  return (
    <div className="flex gap-3 justify-center items-center mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className="relative w-4 h-4 rounded-full border-none p-0"
        >
          {current === index ? (
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#373895]">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
              </div>
            </div>
          ) : (
            <div className="w-4 h-4 rounded-full bg-gray-300 border-gray-300 border"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Scrol;