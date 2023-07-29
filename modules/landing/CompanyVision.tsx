import React, { FC, memo } from "react"
import styles from "./CompanyVision.module.css"

import { motion, useScroll, useTransform } from "framer-motion"

const CompanyVision: FC = memo(() => {
  const secRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  })
  const xTransformRight = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [0, 0, 0, 1000])
  return (
    <div className="" ref={secRef}>
      <div className="container mx-auto flex flex-col xl:px-80">
        <motion.div className="self-start m-5" style={{ x: xTransformRight }}>
          <div
            className={`mt-5 my-5 flex relative pr-12 bg-blue-500 w-fit rounded-full ${styles.bg_title}`}
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
          <p className={`${styles.vision_text} text-xl text-left ml-8 mr-2`}>
            CEO FTUI akan bersikap inklusif kepada seluruh mahasiswa dengan mengenalkan berbagai
            perusahaan dalam bidang-bidang yang berbeda
          </p>
        </motion.div>
        <div
          className={`self-end mt-6 my-5 flex relative pl-12 bg-blue-500 w-fit rounded-full ${styles.bg_title_rev}`}
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
        <p className={`${styles.vision_text} text-xl self-end text-right mr-14 ml-6`}>
          Mahasiswa diharapkan dapat mendengarkan intuisi mereka selama kegiatan CEO FTUI untuk
          memilih jalan pasca sarjana yang akan ditempuh
        </p>

        <div className="self-start m-5">
          <div
            className={`mt-8 my-5 flex relative pr-12 bg-blue-500 w-fit rounded-full ${styles.bg_title}`}
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
          <p className={`${styles.vision_text} text-xl text-left ml-8 mr-2`}>
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
