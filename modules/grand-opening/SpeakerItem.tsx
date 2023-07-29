import { FC, memo } from "react"

import { twMerge } from "tailwind-merge"

import { Hashtag, UserCircle } from "@icons"

type SpeakerItemProps = {
  className?: string

  name: string
  title: string
}

type ListItemProps = {
  className?: string
  title: string
}

const SpeakerItem: FC<SpeakerItemProps> = memo(({ className, name, title }) => (
  <div className={twMerge("flex items-center gap-6 py-4 px-6 bg-gray-light rounded", className)}>
    <UserCircle className="flex-shrink-0" />

    <div className="b1 flex flex-col items-start">
      <span className="font-bold">{name}</span>
      <span>{title}</span>
    </div>
  </div>
))

const ListItem: FC<ListItemProps> = memo(({ className, title }) => (
  <div className={twMerge("flex items-center gap-6 py-4 px-6 bg-gray-light rounded", className)}>
    <Hashtag className="flex-shrink-0" />
    <div className="b1 flex flex-col items-start">
      <span>{title}</span>
    </div>
  </div>
))

SpeakerItem.displayName = "SpeakerItem"
ListItem.displayName = "ListItem"
export { ListItem, SpeakerItem }
