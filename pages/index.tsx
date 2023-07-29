import type { NextPage } from "next"
import { useState } from "react"

import { Page } from "@components"
import { CompanyMission, CompanyVision, EventsTimeline, LandingHero } from "@modules"

const Home: NextPage = () => {
  const [scrolled, setScrolled] = useState(false)

  return (
    <Page
      className="flex flex-col select-none -mt-16 gap-16"
      navbarClassName={scrolled ? "bg-white" : "shadow-none"}
      onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 64)}
    >
      <LandingHero />
      <CompanyVision />
      <CompanyMission />
      <EventsTimeline />
    </Page>
  )
}

export default Home
