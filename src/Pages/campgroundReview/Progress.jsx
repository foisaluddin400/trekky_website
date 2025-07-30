import React from 'react';

const Progress = () => {
  return (
    <div className="mt-4 text-lg font-semibold text-[#F9B038]">
      <h1>Your Progress</h1>
      {/* Map iframe centered on New York City, USA */}
      <div className="mt-8 ">
        <iframe
        
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064807.547859669!2d-104.6866391552435!3d41.39632494210276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0xa127900c0ff30ac4!2sNebraska%2C%20USA!5e0!3m2!1sen!2sbd!4v1748673124245!5m2!1sen!2sbd"
          className="w-full h-[300px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="USA Map"
        ></iframe>
      </div>



      {/* Legend */}
      <div className="mt-4 text-sm">
        <p className="font-semibold mb-2">Map Legend</p>
        <ul className="space-y-1 text-gray-900">
          <li className="flex items-center gap-2 text-[#F9B038]">
            <span className="w-5 h-5 bg-green-600 rounded"></span> Camped
          </li>
          <li className="flex items-center gap-2 text-[#F9B038]">
            <span className="w-5 h-5 bg-orange-400 rounded"></span> Traveled Though
          </li>
          <li className="flex items-center gap-2 text-[#F9B038]">
            <span className="w-5 h-5 bg-blue-800 rounded"></span> Planning to Visit
          </li>
          <li className="flex items-center gap-2 text-[#F9B038]">
            <span className="w-5 h-5 bg-red-700 rounded"></span> Not Yet Visited
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Progress;
