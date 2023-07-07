import { FC, memo } from "react"

import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { ArrowLongRight, CalendarDays, ChevronRight, Clock } from "@icons"
import { SpeakerItem } from "./SpeakerItem"

type GrandOpeningDetailsProps = {
  className?: string
}

const GrandOpeningDetails: FC<GrandOpeningDetailsProps> = memo(({ className }) => (
  <div className={twMerge("container flex flex-col items-stretch py-20", className)}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
      <div className="flex flex-col items-start">
        <h3>Grand Opening</h3>
        <p className="b1">
          Acara pembuka rangkaian CEO FTUI 2022 melalui sesi webinar dan talkshow terkait kehidupan
          dan testimoni pascakampus mahasiswa FTUI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-6 gap-y-2 mt-8 w-full">
          <div className="b2 flex justify-center items-center gap-2 py-2 w-full bg-gray-light rounded">
            <CalendarDays className="w-5 h-5" /> Minggu, 21 Agustus 2022
          </div>

          <div className="b2 flex justify-center items-center gap-2 py-2 w-full bg-gray-light rounded">
            <Clock className="w-5 h-5" /> 13.00 - 16.00 WIB
          </div>
        </div>

        <div className="flex items-center mt-6 gap-2">
          <ArrowLongRight className="scale-x-125" /> <h5>Webinar</h5>
        </div>
        <h4 className="text-blue-ceo">Get to Know More About Your Career Path!</h4>

        <SpeakerItem
          className="w-full mt-4"
          name="Prima Satrio Bindono"
          title="Talent Acquisition Lead at Stockbit/Bibit"
        />

        <div className="flex items-center mt-6 gap-2">
          <ArrowLongRight className="scale-x-125" /> <h5>Talkshow</h5>
        </div>
        <h4 className="text-blue-ceo">What do They Say about Their Own Career Path</h4>

        <SpeakerItem
          className="w-full mt-4"
          name="Tulus Setiawan"
          title="Process Engineer at PT Energasindo Heksa Karya"
        />
        <SpeakerItem
          className="w-full mt-4"
          name="Deandra N. Sasadhara"
          title="Power Plant Mechanical Engineer at Toshiba Energy System and Solutions Corporation"
        />
        <SpeakerItem
          className="w-full mt-4"
          name="Saffan Firdaus"
          title="Senior Product Designer at Pollen Liquidation"
        />
        <SpeakerItem
          className="w-full mt-4"
          name="Galang Prakasa Yusuf Putra"
          title="Founder Envotribe Indonesia & Hands on Business"
        />

        <button className="btn btn-primary gap-2 mt-6 normal-case" disabled={true}>
          Daftar <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative w-full aspect-[7/10] order-first md:order-last">
        <Image
          alt="Poster Grand Opening"
          src="/images/brochure-grand-opening.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  </div>
))

GrandOpeningDetails.displayName = "GrandOpeningDetails"
export { GrandOpeningDetails }
