import React from 'react'

const Progress = () => {
  return (
    <div className="mt-4 text-lg font-semibold">
                    <h1>Your Progress</h1>
                    {/* Map image */}
                    <div className="mt-8 ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902206534005!2d90.39156341543235!3d23.75090329455919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b852f9c6a5d5%3A0x4c7aa31a51cf1a78!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000"

                            className="w-full h-[300px]"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>

                    </div>

                    {/* Legend */}
                    <div className="mt-4 text-sm">
                        <p className="font-semibold mb-2">Map Legend</p>
                        <ul className="space-y-1 text-gray-900">
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 bg-green-800 rounded"></span> Camped
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 bg-orange-700 rounded"></span> Traveled Though
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 bg-blue-500 rounded"></span> Planning to Visit
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 bg-gray-300 rounded"></span> Not Yet Visited
                            </li>
                        </ul>
                    </div>
                </div>
  )
}

export default Progress