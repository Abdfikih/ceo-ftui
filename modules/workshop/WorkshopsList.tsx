import { FC, memo } from "react"

import { twMerge } from "tailwind-merge"
import { WorkshopItem } from "./WorkshopItem"

import { WORKSHOPS } from "@constants"

type WorkshopsListProps = {
  className?: string
}

const WorkshopsList: FC<WorkshopsListProps> = memo(({ className }) => (
  <div className={twMerge("container flex flex-col items-stretch pb-20", className)}>
    {WORKSHOPS.sort((a, b) => b.startTimestamp.getTime() - a.startTimestamp.getTime()).map(
      (workshop, index) => (
        <WorkshopItem key={index} workshop={workshop} />
      )
    )}
  </div>
))

WorkshopsList.displayName = "WorkshopsList"
export { WorkshopsList }
