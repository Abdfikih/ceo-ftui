import { FC, memo, useMemo } from "react"

import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { Workshop } from "@constants"
import { CalendarDays, ChevronRight, Clock, InformationCircle, UserCircle } from "@icons"
import { calculateTimeDifference } from "@utils"

type WorkshopItemProps = {
  className?: string

  workshop: Workshop
  onRegister?: () => void
}

const WorkshopItem: FC<WorkshopItemProps> = memo(({ className, workshop }) => {
  const remainingTime = useMemo(() => {
    const start = workshop.startTimestamp
    return calculateTimeDifference(start)
  }, [workshop])

  return (
    <div id={workshop.id}>
      <div className="h-20" />
      <div
        className={twMerge("grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-12 gap-y-4", className)}
      >
        <div className="flex flex-col items-start">
          <h4 className="text-blue-ceo">
            {remainingTime ? `${remainingTime[0]} Hari lagi!` : "Sudah berlalu"}
          </h4>

          <h3>{workshop.title}</h3>
          <p className="b1">{workshop.description}</p>

          {workshop.restricted && (
            <div className="flex justify-center items-center gap-4 mt-6 py-2 px-16 bg-accent-2 rounded-lg">
              <InformationCircle className="w-6 h-6" />
              <p className="b1">Workshop khusus Mahasiswa FT UI</p>
            </div>
          )}

          <div className="flex items-center gap-4 mt-6">
            <UserCircle className="w-6 h-6" />
            <p className="b1">{workshop.speaker}</p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <CalendarDays className="w-6 h-6" />
            <p className="b1">
              {Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(workshop.startTimestamp)}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <Clock className="w-6 h-6" />
            <p className="b1">
              {Intl.DateTimeFormat("id-ID", { timeStyle: "short" }).format(workshop.startTimestamp)}{" "}
              - {Intl.DateTimeFormat("id-ID", { timeStyle: "short" }).format(workshop.endTimestamp)}{" "}
              WIB
            </p>
          </div>

          <button className="btn btn-primary gap-2 mt-6 normal-case" disabled={!remainingTime}>
            Daftar <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative w-full aspect-[3/4] order-first md:order-last">
          <Image alt={workshop.title} src={workshop.brochureSrc} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
})

WorkshopItem.displayName = "WorkshopItem"
export { WorkshopItem }
