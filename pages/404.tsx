import { Page } from "@components"
import { faGhost } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import Link from "next/link"

const NotFound: NextPage = () => (
  <Page className="select-none" navbarClassName="bg-white">
    <div className="flex flex-col justify-center items-center h-full">
      <div className="mb-10 lg:mb-20 animate-bounce">
        <FontAwesomeIcon icon={faGhost} className="w-24 h-24 lg:w-48 lg:h-48" />
      </div>
      <h3 className="text-xl lg:text-3xl text-center lg:text-center">Page Not Found</h3>
      <p className="text-sm lg:text-base lg:text-justify text-center lg:text-center">
        Website Dalam Pengembangan. Yooo Mari-Mari Ke Home. Terima Kasih
      </p>

      <Link href="/" passHref>
        <a className="btn btn-primary mt-6 lg:mt-8 text-sm lg:text-base">Kembali ke Home</a>
      </Link>
    </div>
  </Page>
)

export default NotFound
