import { FC, memo } from "react"
import styles from "./CompanyMission.module.css"

const CompanyMission: FC = memo(() => (
  <div className="container flex flex-col items-center gap-10">
    <div className="flex flex-row gap-10 items-center">
      <h1
        className={`${styles.m} ${styles.doc2} flex w-14 justify-center text-7xl font-Epilogue font-black`}
      >
        M
      </h1>
      <div
        className={`flex bg-[#DA4E7A] ${styles.doc1} shadow-mission items-center rounded-xl sm:rounded-full px-12 py-3 w-full md:w-[40rem] md:h-28`}
      >
        <p className="font-Inter text-[#F8F6F299] text-sm sm:text-lg text-center">
          Meningkatkan <em>awareness</em> dan pengetahun mahasiswa FTUI mengenai program
          pascasarjana
        </p>
      </div>
    </div>
    <div className="flex flex-row space-x-10 items-center">
      <h1
        className={`${styles.i1} ${styles.doc2} flex w-14 justify-center text-7xl font-Epilogue font-black`}
      >
        I
      </h1>
      <div
        className={`flex bg-[#DA4E7A] ${styles.doc1} shadow-mission items-center rounded-xl sm:rounded-full px-12 py-3 w-full md:w-[40rem] md:h-28`}
      >
        <p className="font-Inter text-[#F8F6F299] text-sm sm:text-lg text-center">
          Menyediakan kesempatan bagi mahasiswa untuk mengembangkan keterampilan diri agar lebih
          unggul dalam kompetisi karir pasca kampus
        </p>
      </div>
    </div>
    <div className="flex flex-row space-x-10 items-center">
      <h1
        className={`${styles.s} ${styles.doc2} flex w-14 justify-center text-7xl font-Epilogue font-black`}
      >
        S
      </h1>
      <div
        className={`flex bg-[#DA4E7A] ${styles.doc1} shadow-mission items-center rounded-xl sm:rounded-full px-12 py-3 w-full md:w-[40rem] md:h-28`}
      >
        <p className="font-Inter text-[#F8F6F299] text-sm sm:text-lg text-center">
          Memberikan informasi terkait studi lanjut sebagai bahan pertimbangan mahasiswa pasca
          sarjana
        </p>
      </div>
    </div>
    <div className="flex flex-row space-x-10 items-center">
      <h1
        className={`${styles.i2} ${styles.doc2} flex w-14 justify-center text-7xl font-Epilogue font-black sm:-translate-y-4`}
      >
        I
      </h1>
      <div
        className={`flex bg-[#DA4E7A] ${styles.doc1} shadow-mission items-center rounded-xl sm:rounded-full px-12 py-3 w-full md:w-[40rem] md:h-34`}
      >
        <p className="font-Inter text-[#F8F6F299] text-sm sm:text-lg text-center">
          Mengadakan Job Fair dimana mahasiswa tahun terakhir dan alumni fresh graduate dapat
          mencari lowongan pekerjaan serta mahasiswa tahun pertama sampai ketiga lebih familiar
          terhadap dunia pekerjaan
        </p>
      </div>
    </div>
  </div>
))

CompanyMission.displayName = "CompanyMission"
export { CompanyMission }
