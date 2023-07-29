import { FC, memo } from "react"
import styles from "./CompanyVision.module.css"

import "aos/dist/aos.css"

const CompanyVision: FC = memo(() => {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col xl:px-80">
        <div className="self-start m-5 ">
          <div
            className={`mt-5 my-5 flex relative pr-12 bg-blue-500 w-fit rounded-full ${styles.bg_title} animate-bounce`}
          >
            {/* <div
          className={`absolute w-full h-full opacity-20 mr-8 bg-yellow-400 rounded-full ${styles.bg_title}`}
        ></div> */}
            <div
              className={`w-12 h-12  xl:w-16 xl:h-16  rounded-full my-auto mr-6 ${styles.red_balls}`}
            ></div>
            <h2 className={`text-4xl xl:text-5xl my-auto font-bold ${styles.vision_title}`}>
              Inclusive
            </h2>
          </div>
          <p className={`${styles.vision_text} text-xl text-left ml-8 mr-2 animate-pulse`}>
            CEO FTUI akan bersikap inklusif kepada seluruh mahasiswa dengan mengenalkan berbagai
            perusahaan dalam bidang-bidang yang berbeda
          </p>
        </div>
        <div
          className={`self-end mt-6 my-5 flex relative pl-12 bg-blue-500 w-fit rounded-full ${styles.bg_title_rev} animate-bounce`}
        >
          {/* <div
          className={`absolute w-full h-full opacity-20 mr-8 bg-yellow-400 rounded-full ${styles.bg_title}`}
        ></div> */}
          <h2 className={`text-4xl xl:text-5xl my-auto font-bold ${styles.vision_title}`}>
            Intuitive
          </h2>
          <div
            className={`w-12 h-12 xl:w-16 xl:h-16 rounded-full my-auto ml-6 ${styles.red_balls}`}
          ></div>
        </div>
        <p className={`${styles.vision_text} text-xl self-end text-right mr-14 ml-6 animate-pulse`}>
          Mahasiswa diharapkan dapat mendengarkan intuisi mereka selama kegiatan CEO FTUI untuk
          memilih jalan pasca sarjana yang akan ditempuh
        </p>

        <div className="self-start m-5">
          <div
            className={`mt-8 my-5 flex relative pr-12 bg-blue-500 w-fit rounded-full ${styles.bg_title} animate-bounce delay-500`}
          >
            {/* <div
          className={`absolute w-full h-full opacity-20 mr-8 bg-yellow-400 rounded-full ${styles.bg_title}`}
        ></div> */}
            <div
              className={`w-12 h-12  xl:w-16 xl:h-16 rounded-full my-auto mr-6 ${styles.red_balls}`}
            ></div>
            <h2 className={`text-4xl xl:text-5xl my-auto font-bold ${styles.vision_title}`}>
              Pro-Active
            </h2>
          </div>
          <p className={`${styles.vision_text} text-xl text-left ml-8 mr-2 animate-pulse`}>
            Ketika kegiatan CEO FTUI, diharapkan mahasiswa dapat bersikap proactive dengan ilmu yang
            diberikan dalam kesempatan ini.
          </p>
        </div>
      </div>
    </div>
  )
})

CompanyVision.displayName = "CompanyVision"
export { CompanyVision }
