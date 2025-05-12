import React from "react";
import pic from "../assets/img1.jpg";
import pic2 from "../assets/img2.jpg";
import pic3 from "../assets/img7.jpg";
import pic4 from "../assets/img8.jpg";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div id="footer" className="bg-black text-white pt-24">
      {/* Top Footer Section */}
      <div className="flex flex-wrap justify-evenly gap-12 px-10 pb-10">
        {/* About Section */}
        <div className="max-w-md">
          <h1 className="text-blue-500 text-3xl italic font-serif mb-4">
            UNKNOWN TECHNICAL
          </h1>
          <p className="text-justify text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur sed laborum placeat hic necessitatibus ut vero corrupti
            ratione eum ad esse natus autem, aliquid deleniti dicta? Quibusdam
            quia iste delectus optio dignissimos dicta aspernatur saepe
            accusantium, quidem ab perspiciatis placeat nobis deleniti impedit
            numquam, dolor architecto!
          </p>
        </div>

        {/* Project Links */}
        <div>
          <h1 className="text-blue-500 text-3xl italic font-serif mb-4">
            PROJECTS
          </h1>
          <ul className="list-disc list-inside text-gray-300">
            <li className="mt-2">Software Development</li>
            <li className="mt-2">Web Development</li>
            <li className="mt-2">Transport Company</li>
            <li className="mt-2">Shopping Mall</li>
            <li className="mt-2">7 Star Hotel</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4">
          {[pic, pic2, pic3, pic4].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx}`}
              className="w-40 h-28 object-cover border-2 border-white rounded-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 py-4 text-center text-sm flex items-center justify-center gap-2">
        <span>Copyright</span>
        <MdCopyright />
        <span>
          2025 All Rights Reserved. Design By{" "}
          <span className="text-blue-500 underline font-bold  hover:scale-150 transition-transform duration-1000 cursor-pointer">
            Mr.MUHAMMAD AHSAN
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
