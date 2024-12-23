import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <div className="flex justify-between items-center p-2 text-gray-50 font-bold text-2xl bg-cyan-700">
<Link className="p-4" href="/">Home</Link>
<Link className="p-4" href="/About">About</Link>
<Link className="p-4" href="/Contact">Contact</Link>


        </div>
    )
}


export default Navbar