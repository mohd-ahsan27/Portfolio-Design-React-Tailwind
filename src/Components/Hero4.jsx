import React from "react";

const Hero4 = () => {
  const plans = [
    { title: "Free", price: "$ 0.00/Month" },
    { title: "PROFESSIONAL", price: "$ 0.00/Month" },
    { title: "ENTERPRISE", price: "$ 0.00/Month" },
  ];

  return (
    <div className="bg-slate-950 pb-20 pt-24">
      <h1 className="text-4xl font-medium text-white text-center mb-4 pt-8">
        Our Services
      </h1>
      <hr className="border-2 border-white w-80 m-auto" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="text-white flex flex-col items-center border-2 shadow-xl shadow-white p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-teal-400"
          >
            <h1 className="text-4xl bg-teal-300 w-full text-center py-2">
              {plan.title}
            </h1>
            <h2 className="text-6xl mt-10">Price</h2>
            <p className="text-3xl mt-8 mb-8">
              $ 0.00<sub className="text-sm text-gray-300">/Month</sub>
            </p>

            <hr className="border-2 border-white w-4/5 my-4" />
            <p className="px-4 py-6 font-medium text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              asperiores aliquam...
            </p>
            <div className="w-full px-4">
              <div className="flex justify-between py-2 border-t border-white">
                <p>Get Information</p>
                <p>0</p>
              </div>
              <div className="flex justify-between py-2 border-t border-white">
                <p>Services</p>
                <p>0</p>
              </div>
              <div className="flex justify-between py-2 border-t border-white">
                <p>Package</p>
                <p>0</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero4;
