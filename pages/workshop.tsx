import { NextPage } from "next"

import { Page } from "@components"
import { WorkshopsList } from "@modules"

const Workshop: NextPage = () => {
  return (
    <Page className="select-none" navbarClassName="bg-white">
      <WorkshopsList />
    </Page>
  )
}

export default Workshop
