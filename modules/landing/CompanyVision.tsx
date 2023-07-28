import { FC, memo } from "react"
import styles from "./CompanyVision.module.css"

const CompanyVision: FC = memo(() => (
  <div className="container flex flex-col">
    <div className="self-start m-5">
      <div
        className={`mt-5 my-5 flex relative pr-12 bg-blue-500 w-fit rounded-full ${styles.bg_title}`}
      >
        {/* <div
          className={`absolute w-full h-full opacity-20 mr-8 bg-yellow-400 rounded-full ${styles.bg_title}`}
        ></div> */}
        <div className={`w-16 h-16 rounded-full my-auto mr-6 ${styles.red_balls}`}></div>
        <h2 className={`text-5xl my-auto font-bold ${styles.vision_title}`}>Inclusive</h2>
      </div>
      <p className={`${styles.vision_text} text-3xl text-left ml-5`}>
        CEO FTUI akan bersikap inklusif kepada seluruh mahasiswa dengan mengenalkan berbagai
        perusahaan dalam bidang-bidang yang berbeda
      </p>
    </div>
    <div
      className={`self-end mt-5 my-5 flex relative pl-12 bg-blue-500 w-fit rounded-full ${styles.bg_title_rev}`}
    >
      {/* <div
          className={`absolute w-full h-full opacity-20 mr-8 bg-yellow-400 rounded-full ${styles.bg_title}`}
        ></div> */}
      <h2 className={`text-5xl my-auto font-bold ${styles.vision_title}`}>Intuitive</h2>
      <div className={`w-16 h-16 rounded-full my-auto ml-6 ${styles.red_balls}`}></div>
    </div>
    <p className={`${styles.vision_text} text-3xl self-end text-right mr-15`}>
      Mahasiswa diharapkan dapat mendengarkan intuisi mereka selama kegiatan CEO FTUI untuk memilih
      jalan pasca sarjana yang akan ditempuh
    </p>

    <div className="self-start m-5">
      <div
        className={`mt-5 my-5 flex relative pr-12 bg-blue-500 w-fit rounded-full ${styles.bg_title}`}
      >
        {/* <div
          className={`absolute w-full h-full opacity-20 mr-8 bg-yellow-400 rounded-full ${styles.bg_title}`}
        ></div> */}
        <div className={`w-16 h-16 rounded-full my-auto mr-6 ${styles.red_balls}`}></div>
        <h2 className={`text-5xl my-auto font-bold ${styles.vision_title}`}>Pro-Active</h2>
      </div>
      <p className={`${styles.vision_text} text-3xl text-left ml-5`}>
        Ketika kegiatan CEO FTUI, diharapkan mahasiswa dapat bersikap proactive dengan ilmu yang
        diberikan dalam kesempatan ini.
      </p>
    </div>
  </div>
))

CompanyVision.displayName = "CompanyVision"
export { CompanyVision }
