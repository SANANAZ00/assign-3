

// import React from "react";

// const Footer = () => {
// return(
// <div className="mt-4">
//                 <a href="/privacy-policy" className="text-gray-700 hover:text-white mx-2">Privacy Policy</a>
//                 <a href="/terms-of-service" className="text-gray-700 hover:text-white mx-2">Terms of Service</a>
//                 <a href="/contact" className="text-gray-700 hover:text-white mx-2">Contact</a>
//             </div>
//         // </div>
//     );
// };

// export default Footer;

//gap


// import React from "react";

// const Footer = () => {
//     return (
//         <div className="bg-gray-800 text-white text-center py-4 mt-auto p-10 sticky-end">
//             <div className="flex justify-center">
//                 <a href="/privacy-policy" className="text-gray-200 hover:text-white mx-2">Privacy Policy</a>
//                 <a href="/terms-of-service" className="text-gray-200 hover:text-white mx-2">Terms of Service</a>
//                 <a href="/contact" className="text-gray-200 hover:text-white mx-2">Contact</a>
//             </div>
//         </div>
//     );
// };

// export default Footer;


//gap



import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-8 mt-auto p-10">
            <div className="flex justify-center mb-6">
                <a href="/privacy-policy" className="text-gray-300 hover:text-white mx-4">
                    Privacy Policy
                </a>
                <a href="/terms-of-service" className="text-gray-300 hover:text-white mx-4">
                    Terms of Service
                </a>
                <a href="/contact" className="text-gray-300 hover:text-white mx-4">
                    Contact
                </a>
            </div>
            <div className="flex justify-center mb-6 space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
            <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;


  
        
            

