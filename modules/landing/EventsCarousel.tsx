import { FC, memo, useCallback, useEffect, useMemo, useState } from "react"

import { Countdown } from "@components"
import Image from "next/image"
import Link from "next/link"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { EVENTS } from "@constants"
import { ChevronRight } from "@icons"
import { calculateTimeDifference } from "@utils"
import Timeline from "components/timeline/Timeline"

const EventsCarousel: FC = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentEvent = useMemo(() => EVENTS[currentSlide], [currentSlide])

  const [timeDifference, setTimeDifference] = useState<number[] | null>(null)
  useEffect(() => {
    const calculateDifference = () => {
      const start = EVENTS[currentSlide].startTimestamp
      setTimeDifference(calculateTimeDifference(start))
    }

    calculateDifference()
    const interval = setInterval(calculateDifference, 1000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const [autoplay, setAutoplay] = useState(true)
  useEffect(() => {
    if (autoplay) return

    const timeout = setTimeout(() => setAutoplay(true), 5000)
    return () => clearTimeout(timeout)
  }, [autoplay])

  const CarouselItem = useCallback(
    ({ index, title, src }: { index: number; title: string; src: string }) => (
      <div className={`w-full aspect-video ${index === currentSlide && "my-8 shadow-blue"}`}>
        <Image
          className={`rounded-2xl transition-transform duration-200 ${
            index !== currentSlide && "scale-[0.9] blur-sm"
          }`}
          alt={title}
          src={src}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    ),
    [currentSlide]
  )

  const CarouselButton = useCallback(
    ({ index, title }: { index: number; title: string }) => (
      <button
        className={`btn btn-primary no-animation px-5 ${
          currentSlide === index ? "text-white bg-blue-ceo" : "btn-outline"
        } text-sm font-semibold normal-case rounded-full`}
        onClick={() => {
          setAutoplay(false)
          setCurrentSlide(index)
        }}
      >
        {title}
      </button>
    ),
    [currentSlide]
  )

  return (
    <div className="flex flex-col items-center py-4 h-fit text-center">
      <div className="container flex flex-col items-center">
        <h2>
          Jangan Sampai <span className="text-gradient">Ketinggalan</span>
        </h2>
        <p className="b1 mt-4">Ikuti berbagai rangkaian acara CEO dengan mendaftarkan dirimu!</p>

        <div className="z--10">
          {" "}
          <Timeline />
        </div>
      </div>

      <Carousel
        className="mt-16 -mb-8 w-full"
        autoPlay={autoplay}
        centerMode
        infiniteLoop
        interval={5000}
        onChange={(i) => setCurrentSlide(i)}
        selectedItem={currentSlide}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable
      >
        {EVENTS.map((e, index) => (
          <CarouselItem key={index} index={index} title={e.title} src={e.posterSrc} />
        ))}
      </Carousel>

      <div className="container flex flex-col items-center mt-12">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {EVENTS.map((e, index) => (
            <CarouselButton key={index} index={index} title={e.title} />
          ))}
        </div>

        <p className="b1 mt-8">{currentEvent.description}</p>

        <h4 className="mt-10">
          {timeDifference?.[0] ?? 0} hari lagi menuju {currentEvent.title}
        </h4>
        <Countdown
          days={timeDifference?.[0] ?? 0}
          hours={timeDifference?.[1] ?? 0}
          minutes={timeDifference?.[2] ?? 0}
          seconds={timeDifference?.[3] ?? 0}
        />

        <Link href={currentEvent.route} passHref>
          <a className="btn btn-primary gap-2 mt-8 normal-case">
            Pelajari Lebih Lanjut <ChevronRight className="w-4 h-4" />
          </a>
        </Link>
      </div>
    </div>
  )
})

EventsCarousel.displayName = "EventsCarousel"
export { EventsCarousel }
