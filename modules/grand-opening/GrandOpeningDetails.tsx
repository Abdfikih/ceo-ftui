import { FC, memo } from "react"

import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { ArrowLongRight, CalendarDays, ChevronRight, Clock } from "@icons"
import { ListItem, SpeakerItem } from "./SpeakerItem"

type GrandOpeningDetailsProps = {
  className?: string
}

const GrandOpeningDetails: FC<GrandOpeningDetailsProps> = memo(({ className }) => (
  <div className={twMerge("container flex flex-col items-stretch py-20", className)}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
      <div className="flex flex-col items-start">
        <h3>Grand Opening</h3>
        <p className="b1">
          Acara pembuka rangkaian CEO FTUI 2023 melalui sesi webinar dan talkshow terkait kehidupan
          dan testimoni pascakampus mahasiswa FTUI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-6 gap-y-2 mt-8 w-full">
          <div className="b2 flex justify-center items-center gap-2 py-2 w-full bg-gray-light rounded">
            <CalendarDays className="w-5 h-5" /> Sabtu, 29 July 2023
          </div>

          <div className="b2 flex justify-center items-center gap-2 py-2 w-full bg-gray-light rounded">
            <Clock className="w-5 h-5" /> 10.00 - 12.20 WIB
          </div>
        </div>

        <div className="flex items-center mt-6 gap-2">
          <ArrowLongRight className="scale-x-125" /> <h5>Webinar</h5>
        </div>
        <h4 className="text-blue-ceo">Go Beyond The Limits, Achieve Your International Dream!</h4>

        <SpeakerItem
          className="w-full mt-4"
          name="M. Fadhil Albab"
          title="Awardee LPDP 2019 || Tecnische Universiteit Delft, Belanda"
        />

        <SpeakerItem
          className="w-full mt-4"
          name="Farah Andayani"
          title="Business Development & Partnership at Schoters"
        />

        <div className="flex items-center mt-6 gap-2">
          <ArrowLongRight className="scale-x-125" /> <h5>Benefits</h5>
        </div>
        <h4 className="text-blue-ceo">What Will You Get?</h4>

        <ListItem className="w-full mt-4" title="How and What to prepare for studying abroad" />
        <ListItem className="w-full mt-4" title="Tips and Tricks of studying abroad" />
        <ListItem className="w-full mt-4" title="List of available scholarship" />
        <ListItem className="w-full mt-4" title="E-Certificate" />
        <a href="https://bit.ly/GrandOpeningCEO23">
          {" "}
          <button className="btn btn-primary gap-2 mt-6 normal-case">
            Daftar <ChevronRight className="w-4 h-4" />
          </button>
        </a>
      </div>

      <div className="relative w-full aspect-[7/10] order-first md:order-last">
        <Image
          alt="Poster Grand Opening"
          src="/images/coming-soon.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  </div>
))

GrandOpeningDetails.displayName = "GrandOpeningDetails"
export { GrandOpeningDetails }
