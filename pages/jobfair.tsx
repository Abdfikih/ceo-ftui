import { NextPage } from "next"
import { useEffect, useState } from "react"

import { EVENTS } from "@constants"
import { calculateTimeDifference } from "@utils"

import { Countdown, Page } from "@components"
import { ChevronRight, Download } from "@icons"
import Image from "next/image"

const Jobfair: NextPage = () => {
  const [timeDifference, setTimeDifference] = useState<number[] | null>(null)
  useEffect(() => {
    const calculateDifference = () => {
      const start = EVENTS[3].startTimestamp
      setTimeDifference(calculateTimeDifference(start))
    }

    calculateDifference()
    const interval = setInterval(calculateDifference, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Page className="select-none" navbarClassName="bg-white">
      <div className="flex flex-col items-stretch min-h-screen">
        <div className="relative w-full aspect-[9/4] md:aspect-[10/3]">
          <Image alt="" src="/images/hero-jobfair.png" layout="fill" objectFit="cover" />
        </div>

        <div className="container flex flex-col items-center py-16 text-center">
          <h2>Apa itu Job Fair?</h2>
          <p className="b1 mt-8">
            Acara puncak dari rangkaian CEO 2022 yang mewadahi peserta, yaitu para mahasiswa dan{" "}
            <i>fresh graduates</i>, untuk mendapatkan informasi lebih lanjut terkait pekerjaan di
            perusahaan <i>partner</i>.
          </p>

          <h4 className="mt-8 text-blue-ceo">
            Job Fair akan dibuka {timeDifference?.[0] ?? 0} hari lagi
          </h4>
          <Countdown
            days={timeDifference?.[0] ?? 0}
            hours={timeDifference?.[1] ?? 0}
            minutes={timeDifference?.[2] ?? 0}
            seconds={timeDifference?.[3] ?? 0}
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-x-5 gap-y-2 mt-8">
            <button
              className="btn btn-primary btn-outline flex-1 flex-nowrap gap-2 normal-case border-2"
              disabled
            >
              <Download className="md:order-last" /> Unduh Panduan
            </button>

            <button
              className="btn btn-primary flex-1 flex-nowrap gap-2 normal-case whitespace-nowrap"
              disabled
            >
              Daftar Live Event <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Jobfair
