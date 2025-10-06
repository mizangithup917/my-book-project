import React from 'react';
import bookimg from '../../assets/54_n.jpg'
const Banner = () => {
  return (
      <div className="hero bg-[#F3F3F3]  w-[1155px] h-[554px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bookimg}
            className="max-w-sm h-[450px] rounded-lg shadow-2xl mr-[5px]"
          />
          <div className='w-[700px] h-[250px] px-8'>
            <h1 className="text-6xl font-bold mb-15">Books to freshen up your bookshelf</h1>
            
            <button className="px-8 py-4 rounded-[8px] text-2xl bg-[#23BE0A] text-white hover:bg-[#50B1C9] ">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default Banner;<div>
</div>