import { FC, memo } from "react"

const CompanyProfile: FC = memo(() => (
  <div className="container flex flex-col items-center py-4 h-fit text-center">
    <h2>Persiapkan Kariermu Bersama CEO!</h2>
    <p className="b1 mt-5">
      CEO adalah program kerja BEM FTUI 2023 yang bertujuan membekali dan memfasilitasi persiapan
      mahasiswa, khususnya Fakultas Teknik UI, terjun ke dunia kerja melalui serangkaian seminar,{" "}
      <i>workshop</i>, dan Job Fair.
    </p>

    <div className="overflow-hidden mt-16 p-3 w-full lg:w-4/5 aspect-video border-4 border-blue-ceo rounded-2xl">
      <iframe
        className="rounded-2xl"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Teaser CEO FTUI 2022"
        src="https://www.youtube.com/embed/9YExswed6YU"
        allow="clipboard-write; encrypted-media; gyroscope"
      />
    </div>
  </div>
))

CompanyProfile.displayName = "CompanyProfile"
export { CompanyProfile }
