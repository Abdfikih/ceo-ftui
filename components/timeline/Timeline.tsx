import React, { useState } from "react"
import { TimelineDataJuli } from "./TimelineData"

const Timeline: React.FC = () => {
  const [july, setJuly] = useState<boolean>(true)

  const toggleMonth = () => {
    setJuly(!july)
  }

  return (
    <>
      <div className="xl:mx-12 md:mx-10 md:mt-16 mx-3 py-8">
        <div className={`${july ? "" : "hidden"} antialiased bg-white text-gray-800`}>
          <div className="relative container mx-auto px-6 flex flex-col">
            <div className="absolute z-0 w-2 h-full rounded-lg bg-blue-ceo shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
            {TimelineDataJuli.map((timeline, id) => (
              <div key={id} className="relative z-10">
                <div className="h-8 w-8 md:h-16 md:w-16 xl:h-16 xl:w-16 object-cover mt-20 bg-blue-ceo rounded-full shadow-md border-4 border-yellow-ceo xs:absolute md:mx-auto md:left-0 md:right-0 md:mt-8 flex items-center justify-center">
                  <span className="text-white-ceo text-lg font-bold relative z-10">{id + 1}</span>
                </div>
                <div
                  className={`${
                    id % 2 === 0
                      ? "relative md:w-1/2 md:ml-0 -mt-16 xs:pl-28 xs:pt-0 md:mr-auto md:pl-0 md:pr-16 xl:-mt-24"
                      : "relative md:w-1/2 md:ml-auto xs:pl-28 xs:pt-0 md:pl-16 -mt-16 md:-mt-24 xl:-mt-24"
                  }`}
                >
                  <span className="font-bold text-md tracking-wide">{timeline.date}</span>

                  <h2 className="xl:text-2xl md:text-xl text-lg font-bold text-salem-ceo pt-1">
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
