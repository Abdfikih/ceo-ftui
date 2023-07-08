import { FC, memo } from "react"

import Image from "next/image"
import styles from "./LandingHero.module.css"

import { ChevronDown } from "@icons"

const LandingHero: FC = memo(() => (
  <div className="overflow-hidden relative grid grid-cols-12 grid-rows-6 min-h-screen select-none">
    <div className="container col-span-full row-start-3 row-span-full flex flex-col items-center">
      <h1 className="text-salem-ceo font-bold">CEO 2023</h1>
      <h4 className="text-black font-medium">Centers of Engineers Occupation</h4>

      <div className={`mt-12 relative w-full h-[4.5rem] ${styles.subtitle}`}>
        <h2 className="text-gradient leading-none">Discover Opportunities</h2>
        <h2 className="text-gradient leading-none">Connect With Your Future</h2>
      </div>

      <ChevronDown className="mt-12 md:mt-4 lg:mt-8 animate-bounce" />
    </div>

    {/* Decorations */}
    <div
      className={[
        "   col-start-1    col-span-5    row-start-2 row-span-1",
        "md:col-start-2 md:col-span-4                          ",
        "lg:col-start-1               lg:row-start-4           ",
        "my-auto px-2 lg:px-20",
      ].join(" ")}
    >
      <div className={`${styles.doc1} relative w-full aspect-[7/4]`}>
        <Image alt="" src="/images/landing-doc-1.png" layout="fill" />
      </div>
    </div>

    <div
      className={[
        "   col-start-2               row-start-5 row-span-2",
        "md:col-start-3                                     ",
        "lg:col-start-4 lg:col-span-2                       ",
        "my-auto lg:scale-75",
      ].join(" ")}
    >
      <div className={`${styles.doc2} relative w-28 md:w-44 lg:w-full aspect-square`}>
        <Image alt="" src="/images/landing-doc-2.png" layout="fill" />
      </div>
    </div>

    <div
      className={[
        "   col-start-4               row-start-5 row-span-2",
        "md:col-start-5 md:col-span-2                       ",
        "my-auto lg:scale-75",
      ].join(" ")}
    >
      <div className={`${styles.bulb} relative w-24 md:w-full aspect-square`}>
        <Image alt="" src="/images/landing-decor-bulb.png" layout="fill" />
      </div>
    </div>

    <div
      className={[
        "   col-start-7    col-span-6    row-start-4    row-span-3",
        "md:col-start-7 md:col-span-5 md:row-start-4 md:row-span-2",
        "lg:col-start-9 lg:col-span-4",
        "my-auto px-2 lg:px-20",
      ].join(" ")}
    >
      <div className={`${styles.doc3} relative w-full aspect-[7/4]`}>
        <Image alt="" src="/images/landing-doc-3.png" layout="fill" />
      </div>
    </div>

    <div
      className={[
        "   col-start-10    col-span-2 row-start-2 row-span-2",
        "md:col-start-9  md:col-span-2                       ",
        "lg:col-start-11 lg:col-span-2                       ",
        "my-auto lg:scale-75",
      ].join(" ")}
    >
      <div className={`${styles.loupe} relative w-24 md:w-32 lg:w-full aspect-square`}>
        <Image alt="" src="/images/landing-decor-loupe.png" layout="fill" />
      </div>
    </div>

    {/* Gradients */}
    <div className="absolute -z-10 top-0 left-0 scale-x-[3] xl:scale-x-[5] -translate-y-[65%] xl:-translate-y-[60%] -translate-x-1/2">
      <Image alt="" src="/gradients/blue.svg" width={360} height={360} layout="fixed" />
    </div>

    <div className="absolute -z-10 top-0 left-1/2 scale-x-[3] xl:scale-x-[5] -translate-y-[65%] xl:-translate-y-[60%] -translate-x-1/2">
      <Image alt="" src="/gradients/green.svg" width={360} height={360} layout="fixed" />
    </div>

    <div className="absolute -z-10 top-0 right-0 scale-x-[3] xl:scale-x-[5] -translate-y-[65%] xl:-translate-y-[60%] translate-x-1/2">
      <Image alt="" src="/gradients/yellow.svg" width={360} height={360} layout="fixed" />
    </div>

    <div
      className={[
        "relative -z-10 aspect-square",
        "   col-start-5    col-span-2    row-start-1              ",
        "md:col-start-5 md:col-span-8     row-start-1              ",
        "lg:col-start-5 lg:col-span-4  lg:row-start-1 lg:row-span-1",
        "mt-[-100px]",
      ].join(" ")}
    >
      <img alt="" src="/gradients/yellow_2.svg" className="w-full opacity-50" />
    </div>

    <div
      className={[
        "relative -z-10 aspect-square",
        "   col-start-1    col-span-2    row-start-3              ",
        "md:col-start-1 md:col-span-8     row-start-3              ",
        "lg:col-start-1 lg:col-span-4  lg:row-start-3 lg:row-span-1",
      ].join(" ")}
    >
      <img alt="" src="/gradients/salem_2.svg" className="w-full opacity-50" />
    </div>
    <div className="relative -z-10 ml-64 col-start-8 col-span-8 row-start-2 row-span-4 aspect-square md:col-start-8 md:col-span-8 lg:col-start-8 lg:col-span-8 lg:row-start-2 lg:row-span-1">
      <img alt="" src="/gradients/blue_2.svg" className="w-full opacity-50" />
    </div>
  </div>
))

LandingHero.displayName = "LandingHero"
export { LandingHero }
