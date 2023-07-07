import { DetailedHTMLProps, FC, HTMLAttributes, memo, ReactNode } from "react"

import { twMerge } from "tailwind-merge"

import { Footer } from "./Footer"
import { Navbar, Sidebar } from "./navbar"

type PageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  className?: string
  navbarClassName?: string

  children?: ReactNode
}

const Page: FC<PageProps> = memo(({ className, navbarClassName, children, ...rest }) => (
  <div className="drawer">
    <input id="toggle" className="drawer-toggle" type="checkbox" />

    <div className="drawer-content flex flex-col" {...rest}>
      <Navbar
        className={twMerge("z-10 bg-transparent transition duration-300", navbarClassName)}
        mobileToggleId="toggle"
      />
      <div className={twMerge("min-h-screen", className)}>
        {children}
        <Footer />
      </div>
    </div>

    <div className="drawer-side select-none">
      <label htmlFor="toggle" className="drawer-overlay" />
      <Sidebar />
    </div>
  </div>
))

Page.displayName = "Page"
export { Page }
