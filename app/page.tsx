// "use client"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import Navbar from "./components/Navbar"

// export default function Page() {
//   const route = useRouter()
//   return (
// <>
// <Navbar />
//     <div className="flex flex-col h-screen bg-black text-white font-bold text-5xl  justify-center items-center ">
//       It's Sana Naz 
      
//     </div>
//     </>
//   )
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Page() {
  const router = useRouter();

  // Handler for navigation
  const handleAboutClick = () => {
    router.push("/about"); // Navigate to the 'About' page (assuming it exists)
  };

  return (
    <>
      <Navbar />
      
      

<div className="flex flex-col justify-center items-center h-screen text-cyan-600 bg-gray-50">
                <h2 className="font-bold text-4xl hover:text-gray-400 transition duration-200">
                    Welcome to the Home Page
                </h2>
                <Footer />
               

            </div>
    </>
  );
}



