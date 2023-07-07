import type { NextPage } from "next"

import { Page } from "@components"
import Link from "next/link"

const NotFound: NextPage = () => (
  <Page className="select-none" navbarClassName="bg-white">
    <div className="flex flex-col justify-center items-center h-full">
      <h3>Waduh!</h3>
      <p>Kami tidak dapat menemukan halaman yang Anda cari</p>

      <Link href="/" passHref>
        <a className="btn btn-primary mt-8 normal-case">Kembali ke Beranda</a>
      </Link>
    </div>
  </Page>
)

export default NotFound
