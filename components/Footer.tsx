import { FC, memo } from "react"

import { twMerge } from "tailwind-merge"

import Image from "next/image"
import Link from "next/link"

type FooterProps = {
  className?: string
}

const SocialMediaButton: FC<{
  title: string
  href: string
  iconSrc: string
  width: string
  height: string
}> = ({ title, href, iconSrc, width, height }) => (
  <a title={title} href={href} target="_blank" rel="noreferrer">
    <Image alt={title} src={iconSrc} width={width} height={height} layout="fixed" />
  </a>
)

const Footer: FC<FooterProps> = memo(({ className }) => (
  <div className={twMerge("footer mt-auto py-6 px-4 bg-gray-neutral select-none", className)}>
    <div className="container flex flex-col items-stretch gap-4">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-y-4 gap-x-8">
        <div className="flex justify-evenly lg:justify-start gap-x-8 w-full">
          <div className="flex flex-col">
            <h5 className="text-blue-ceo">Events</h5>

            <Link href="/grand-opening" passHref>
              <a>Grand Opening</a>
            </Link>

            <Link href="/workshop" passHref>
              <a>Workshops</a>
            </Link>

            <Link href="/jobfair" passHref>
              <a>Job Fair</a>
            </Link>
          </div>

          <div className="flex flex-col">
            <h5 className="text-blue-ceo">Partnership</h5>

            <Link href="/partnership/jobfair" passHref>
              <a>Job Fair</a>
            </Link>

            <Link href="/partnership/sponsor" passHref>
              <a>Sponsor</a>
            </Link>

            <Link href="/partnership/media-partner" passHref>
              <a>Media Partner</a>
            </Link>
          </div>
        </div>

        <div className="flex justify-evenly md:ml-36 justify-items-center lg:justify-start gap-x-12 w-full">
          <Image alt="" src="/logo_foot.png" width={90} height={80} layout="fixed" />
        </div>

        <div className="flex-shrink-0 flex flex-col">
          <h5 className="text-blue-ceo">Find us on Social Media!</h5>
          <div className="flex justify-center items-center gap-x-2">
            <SocialMediaButton
              title="Email"
              href="mailto:ceoftui@gmail.com"
              iconSrc="/icons/email.svg"
              width="20"
              height="20"
            />

            <SocialMediaButton
              title="Instagram"
              href="https://www.instagram.com/ceoftui/"
              iconSrc="/icons/instagram.svg"
              width="16"
              height="16"
            />

            <SocialMediaButton
              title="TikTok"
              href="https://www.tiktok.com/@ceoftui?_t=8eOBRimn3iS&_r=1"
              iconSrc="/icons/tiktok.svg"
              width="16"
              height="16"
            />

            <SocialMediaButton
              title="LinkedIn"
              href="https://www.linkedin.com/company/ceo-ftui2022/"
              iconSrc="/icons/linkedin.svg"
              width="16"
              height="16"
            />

            <SocialMediaButton
              title="YouTube"
              href="https://youtube.com/@ceoftui2786"
              iconSrc="/icons/youtube.svg"
              width="17"
              height="17"
            />
          </div>
        </div>
      </div>

      <p className="place-self-center lg:place-self-end">CEO 2023 © All rights reserved</p>
    </div>
  </div>
))

Footer.displayName = "Footer"
export { Footer }
