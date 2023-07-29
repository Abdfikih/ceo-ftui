import { FC, memo } from "react"

import Timeline from "components/timeline/Timeline"
import styles from "./EventsTimeline.module.css"

const EventsTimeline: FC = memo(() => (
  <div className="container flex flex-col items-center py-4 h-fit text-center xl:px-72">
    <h2 className={`${styles.title}`}>Persiapkan Kariermu Bersama CEO!</h2>
    <p className="b1 mt-5">
      CEO adalah program kerja BEM FTUI 2023 yang bertujuan membekali dan memfasilitasi persiapan
      mahasiswa, khususnya Fakultas Teknik UI, terjun ke dunia kerja melalui serangkaian seminar,
      <i>workshop</i>, dan Job Fair.
    </p>

    <div className="z--10">
      <Timeline />
    </div>
  </div>
))

EventsTimeline.displayName = "EventsTimeline"
export { EventsTimeline }
