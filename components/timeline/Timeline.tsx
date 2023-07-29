import React, { useState } from "react"
import { TimelineDataJuli } from "./TimelineData"

const Timeline: React.FC = () => {
  const [july, setJuly] = useState<boolean>(true)

  const toggleMonth = () => {
    setJuly(!july)
  }

  return (
    <>
      <div className="font-Epilogue xl:mx-12 md:mx-10 md:mt-16 mx-3 py-8">
        <div className={`${july ? "" : "hidden"} antialiased bg-white text-gray-800`}>
          <div className="relative container mx-auto px-6 flex flex-col">
            <div className="absolute z-0 w-1 h-full rounded-lg bg-blue-ceo shadow-md left-7 md:mx-auto md:right-0 md:left-0 sm:left-8"></div>
            {TimelineDataJuli.map((timeline, id) => (
              <div key={id} className="relative z-10 flex flex-col md:items-center">
                <div className="h-8 w-8 -ml-3 sm:h-12 sm:w-12 sm:mr-8 md:h-16 md:w-16 xl:h-16 xl:w-16 object-cover mt-28 bg-blue-ceo rounded-full shadow-md border-4 border-blue-ceo xs:mx-auto xs:px-8 md:mx-auto md:left-0 md:right-0 flex items-center justify-center sm:mb-0 sm:mt-10 xs:mb-8">
                  <span className="text-white-ceo text-lg font-bold relative z-10">{id + 1}</span>
                </div>
                <div
                  className={`text-left ${
                    id % 2 !== 0
                      ? "md:text-right relative md:w-1/2 md:ml-0 xs:pl-20 xs:pt-0 -mt-10 md:mr-96 md:pr-16 md:-mt-14 xl:-mt-14 xl:-px-10 xl:mr-96 sm:ml-16 sm:mb-8 left-10"
                      : "md:text-left relative md:w-1/2 md:ml-72 xs:pl-10 xs:pt-0 md:pl-3 -mt-10 md:-mt-14 xl:ml-80 sm:ml-16 sm:mb-8 left-10"
                  }`}
                >
                  <span className="font-bold text-base md:text-lg xl:text-xl text-left">
                    {timeline.date}
                  </span>

                  <h2 className="xl:text-3xl md:text-xl text-lg font-bold text-salem-ceo pt-1">
                    {timeline.title}
                  </h2>

                  {/* <p className="pt-1 xl:text-lg md:text-md text-sm">{timeline.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
