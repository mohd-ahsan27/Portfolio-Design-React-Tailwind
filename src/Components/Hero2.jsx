import React from 'react';
import pic from '../assets/company.jpg';

const Hero2 = () => {
  return (
    <div className="bg-gray-800 pt-24 pb-24 min-h-screen">
      <div className="mx-4 sm:mx-8 bg-gray-800">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-medium text-white text-center mb-4 pt-8 ">
          About Us
        </h1>
        <hr className="border-2 border-white w-48 mx-auto" />

        {/* Content Area */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          {/* Image */}
          <div>
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[25rem] border-2 border-white border-double transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl "
              src={pic}
              alt="Company"
            />
          </div>

          {/* Text */}
          <div className="text-base sm:text-lg font-medium text-white px-4 md:px-0 text-justify max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit
            labore perferendis voluptatem necessitatibus, corporis, quam dolorum
            illo quasi fuga voluptates, voluptate iure enim officiis officia
            magni! Est esse id magnam numquam ut et beatae reiciendis fugiat cum
            similique vitae repellendus nobis maiores voluptas reprehenderit
            aliquid, nulla corrupti dignissimos eos ipsam harum doloribus
            asperiores laudantium aspernatur. Nemo reiciendis officia unde?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
