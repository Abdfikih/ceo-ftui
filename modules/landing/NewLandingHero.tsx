import { FC, memo } from "react"

import Image from "next/image"
import styles from "./NewLandingHero.module.css"

const NewLandingHero: FC = memo(() => (
  <div className="relative overflow-x-clip">
    <div className="flex flex-col justify-center mx-auto">
      <div className="container flex flex-col items-center lg:mt-96 sm:mt-52 mt-48 xl:mb-44 sm:mb-12 mb-8">
        <h1 className="text-salem-ceo lg:font-extrabold font-bold font-Epilogue lg:text-8xl text-7xl">
          CEO 2023
        </h1>
        <h4 className="text-black font-Inter font-semibold xl:text-4xl md:text-3xl sm:text-2xl">
          Centers of Engineers Occupation
        </h4>
        <div className="font-semibold sm:text-center text-left mt-6 lg:text-4xl text-3xl">
          <span className={`text-gradient`}>
            Discover Opportunities<br></br>
          </span>
          <span className={`text-gradient2`}>Connect with your Future</span>
        </div>
      </div>
    </div>
    <div
      className={`
			overflow-hidden
			absolute m-auto 
			xl:-top-32 md:-top-12 sm:top-0 top-10
			left-0 right-60 
			md:w-4/12 w-6/12 
			aspect-square -z-10 
			md:opacity-50 opacity-30
			${styles.doc1}`}
    >
      <Image src={`/blobs/yellow_blob_top.svg`} layout="fill"></Image>
    </div>
    <div
      className={`
			overflow-hidden
			absolute top-96 
			-left-12
			md:w-5/12 w-7/12 
			aspect-[5/4] -z-10 
			md:opacity-50 sm:opacity-40 opacity-10
			${styles.doc2}`}
    >
      <Image src={`/blobs/pink_top.svg`} layout="fill"></Image>
    </div>
    <div
      className={`
			overflow-hidden
			absolute 
			top-32 
			md:-right-48  -right-24
			md:w-7/12 w-8/12
			aspect-square -z-10 
			md:opacity-50 opacity-30
			${styles.doc3}`}
    >
      <Image src={`/blobs/blue_top.svg`} layout="fill"></Image>
    </div>
  </div>
))

NewLandingHero.displayName = "NewLandingHero"
export { NewLandingHero }
