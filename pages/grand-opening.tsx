import { NextPage } from "next"

import { Page } from "@components"
import { GrandOpeningDetails } from "@modules"

const GrandOpening: NextPage = () => {
  return (
    <Page className="select-none" navbarClassName="bg-white">
      <GrandOpeningDetails />
    </Page>
  )
}

export default GrandOpening
