// import React from "react";
// import Navbar from "../components/Navbar"


// const page = () => {
//     return(
//         <div>
//             <Navbar/>
//             <h2 className="flex justify-center items-center font-bold text-4xl bg-black text-white h-screen ">This is an About page</h2>
//         </div>
//     )
// }


// export default page


//gap





//gap




// import React from "react";
// import Navbar from "../components/Navbar";


// const About = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white p-4">
//                 <h2 className="font-bold text-4xl mb-6 animate-bounce">About Me</h2>
//                 <p className="text-lg text-gray-400">
//                     Learn more about my journey, experiences, and aspirations.
//                 </p>
//             </div>
            
//         </div>
//     );
// };

// export default About;




// gap

import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-cyan-500">
                <h2 className="font-bold text-4xl mb-4 animate-bounce">About me</h2>
                <p className="text-lg text-gray-400 max-w-md text-center hover:text-gray-200 transition-colors duration-300">
                Discover my journey, skills, and passion. Hover to see more.
                </p>
            </div>
        </div>
    );
};

export default Page;

