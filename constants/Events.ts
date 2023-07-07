export type Event = {
  title: string
  description: string

  route: string

  posterSrc: string
  startTimestamp: Date
}

export const EVENTS: Event[] = [
  {
    title: "Grand Opening",
    description:
      " Grand Opening adalah acara pembuka rangkaian CEO FTUI 2022 melalui sesi webinar dan talkshow terkait kehidupan dan testimoni pascakampus mahasiswa FTUI.",
    route: "/grand-opening",
    posterSrc: "/images/poster-grand-opening.png",
    startTimestamp: new Date("2022-08-21T13:00:00.000+0700"),
  },
  {
    title: "CV & Interview Workshop",
    description:
      "Workshop yang bertujuan membantu peserta dalam menguasai tahap seleksi CV dan interview sebagai proses fundamental rekrutmen.",
    route: "/workshop#cv",
    posterSrc: "/images/poster-workshop-cv.png",
    startTimestamp: new Date("2022-09-04T13:00:00.000+0700"),
  },
  {
    title: "Project Management Workshop",
    description:
      "Workshop yang bertujuan meningkatkan wawasan dan softskill peserta dalam melakukan project management.",
    route: "/workshop#pm",
    posterSrc: "/images/poster-workshop-pm.png",
    startTimestamp: new Date("2022-10-01T10:00:00.000+0700"),
  },
  {
    title: "Job Fair",
    description:
      "Acara puncak dari rangkaian CEO 2022 yang mewadahi peserta untuk mendapatkan informasi lebih lanjut terkait pekerjaan di berbagai perusahaan.",
    route: "/jobfair",
    posterSrc: "/images/poster-jobfair.png",
    startTimestamp: new Date("2022-10-29T00:00:00.000+0700"),
  },
]

export type Workshop = {
  restricted: boolean

  id: string
  title: string
  description: string

  speaker: string
  brochureSrc: string

  startTimestamp: Date
  endTimestamp: Date
}

export const WORKSHOPS: Workshop[] = [
  {
    restricted: false,
    id: "cv",
    title: "CV & Interview Workshop",
    description:
      "Workshop yang bertujuan membantu peserta dalam menguasai tahap seleksi CV dan interview sebagai proses fundamental rekrutmen.",
    speaker: "Shopee Indonesia",
    brochureSrc: "/images/brochure-workshop-cv.png",
    startTimestamp: new Date("2022-09-04T13:00:00.000+0700"),
    endTimestamp: new Date("2022-09-04T16:00:00.000+0700"),
  },
  {
    restricted: true,
    id: "pm",
    title: "Project Management Workshop",
    description:
      "Workshop yang bertujuan meningkatkan wawasan dan softskill peserta dalam melakukan project management.",
    speaker: "Dzulfikar Maulana - Project Manager at StrategArt",
    brochureSrc: "/images/brochure-workshop-pm.jpg",
    startTimestamp: new Date("2022-10-01T10:00:00.000+0700"),
    endTimestamp: new Date("2022-10-01T16:00:00.000+0700"),
  },
]
