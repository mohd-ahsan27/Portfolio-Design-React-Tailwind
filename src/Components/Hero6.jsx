import React from 'react';

const Hero6 = () => {
  return (
    <div className='bg-slate-700 text-white py-28 px-4 md:px-10'>
      <h1 className='font-semibold text-4xl underline underline-offset-[1rem] text-center mb-12'>
        Contact Us
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto'>
        {/* Left Section */}
        <div className='bg-black p-8 rounded-md hover hover:scale-110 duration-500'>
          <h2 className='text-yellow-400 text-2xl font-semibold font-serif mb-4'>
            CONTACT US FORM
          </h2>
          <p className='text-justify leading-relaxed '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum alias
            provident ea tempora quod quae omnis non ut pariatur vitae iure, illum exercitationem
            vero, nihil harum in? Unde facere ut error eos, eius corrupti. Laborum adipisci itaque
            recusandae exercitationem! Ipsa quaerat quo optio harum neque nobis? Velit, quos neque.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className='bg-white p-8 rounded-md shadow-md'>
          <form>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Your Name'
                required
                className='w-full p-3 border border-slate-400 rounded text-black focus:outline-none focus:ring-2 focus:ring-slate-600'
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                placeholder='Email Address'
                required
                className='w-full p-3 border border-slate-400 rounded text-black focus:outline-none focus:ring-2 focus:ring-slate-600'
              />
            </div>
            <div className='mb-4'>
              <textarea
                placeholder='Your Message'
                rows='5'
                className='w-full p-3 border border-slate-400 rounded text-black focus:outline-none focus:ring-2 focus:ring-slate-600'
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-slate-600 text-white px-6 py-2 rounded hover:bg-slate-800 transition duration-300 font-serif'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
