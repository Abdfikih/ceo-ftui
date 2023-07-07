import { FC, memo } from "react"
import { twMerge } from "tailwind-merge"

type CountdownProps = {
  className?: string

  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown: FC<CountdownProps> = memo(({ className, days, hours, minutes, seconds }) => (
  <div className={twMerge("flex flex-col items-stretch", className)}>
    <h2 className="flex justify-center items-center font-bold text-center">
      <span className="countdown">
        <span style={{ "--value": days } as any} />
      </span>{" "}
      :{" "}
      <span className="countdown">
        <span style={{ "--value": hours } as any} />
      </span>{" "}
      :{" "}
      <span className="countdown">
        <span style={{ "--value": minutes } as any} />
      </span>{" "}
      :{" "}
      <span className="countdown">
        <span style={{ "--value": seconds } as any} />
      </span>
    </h2>

    <p className="b2 flex justify-around items-center -mt-2">
      <span className="w-12">Hari</span>
      <span className="w-12">Jam</span>
      <span className="w-12">Menit</span>
      <span className="w-12">Detik</span>
    </p>
  </div>
))

Countdown.displayName = "Countdown"
export { Countdown }
