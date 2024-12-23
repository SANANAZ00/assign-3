
// import React from "react";
// import Navbar from "../components/Navbar";





import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-cyan-500 p-4">
                <h2 className="font-bold text-4xl mb-4 animate-bounce">Let's Connect</h2>
                <p className="text-lg text-gray-400 mb-6">
                    Feel free to reach out anytime! I'm always happy to connect.
                </p>
                <p className="text-lg text-cyan-500 hover:text-cyan-800 cursor-pointer transition duration-300">
                    Click here to send a message.
                </p>
            </div>
        </>
    );
};

export default Page;


// const Page = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-gray-200">
//                 <h2 className="font-bold text-4xl mb-4 animate-bounce">This is a Contact Page</h2>
//             </div>
//         </>
//     );
// };

// export default Page;




//gap

// import React from "react";
// import Navbar from "../components/Navbar";

// const Page = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
//                 <h3 className="font-bold text-4xl text-white p-10 bg-black bg-opacity-40 rounded-lg shadow-lg">
//                     This is the Contact Page
//                 </h3>
//             </div>
//         </div>
//     );
// };

// export default Page;
