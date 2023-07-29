import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react"

import { auth } from "@utils"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

import { useAuthModal } from "@contexts"

import toast from "react-hot-toast"

import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

import { Bars, ChevronDown, ChevronRight, Cog, Leave, UserCircle } from "@icons"

type NavbarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  className?: string
  mobileToggleId?: string
}

const Navbar: FC<NavbarProps> = memo(({ className, mobileToggleId, ...rest }) => {
  const [user, loading] = useAuthState(auth)
  const { showLoginModal } = useAuthModal()

  return (
    <div
      className={twMerge("navbar bg-white-ceo sticky top-0 shadow-navbar select-none z-50")}
      {...rest}
    >
      <div className="container">
        <Link href="/" passHref>
          <Image alt="" src="/logo.png" width={150} height={40} layout="fixed" />
        </Link>

        <div className="hidden lg:flex flex-none justify-end items-center gap-10 ml-auto">
          <Link href="/grand-opening" passHref>
            <a className="hover:text-blue-ceo">Grand Opening</a>
          </Link>

          <Link href="/notfound" passHref>
            <a className="hover:text-blue-ceo">Company Visit</a>
          </Link>

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="group flex items-center gap-2 cursor-pointer hover:text-blue-ceo"
            >
              Workshop
              <ChevronDown className="w-3 h-3 group-focus:rotate-180 duration-200" />
            </label>

            <div
              tabIndex={0}
              className="dropdown-content flex flex-col gap-4 mt-2 py-4 px-6 w-max bg-white-ceo rounded-lg shadow-dropdown"
            >
              {/* <Link href="/workshop#cv" passHref> */}
              <Link href="/notfound" passHref>
                <a className="flex justify-start items-center gap-3 font-normal normal-case hover:text-blue-ceo">
                  <Image
                    alt=""
                    src="/icons/workshop-cv.svg"
                    width={32}
                    height={32}
                    layout="fixed"
                    className="hover:blue-ceo"
                  />
                  CV and Interview Workshop
                </a>
              </Link>

              {/* <Link href="/workshop#pm" passHref> */}
              <Link href="/notfound" passHref>
                <a className="flex justify-start items-center gap-3 font-normal normal-case hover:text-blue-ceo">
                  <Image
                    alt=""
                    src="/icons/workshop-pm.svg"
                    width={32}
                    height={32}
                    layout="fixed"
                    className="text-blue-ceo"
                  />
                  Project Management Workshop
                </a>
              </Link>
            </div>
          </div>

          {/* <Link href="/jobfair" passHref> */}
          <Link href="/notfound" passHref>
            <a className="hover:text-blue-ceo">Job Fair</a>
          </Link>

          {/* <Link href="/partnership" passHref> */}
          <Link href="/notfound" passHref>
            <a className="hover:text-blue-ceo">Partnership</a>
          </Link>

          {!loading ? (
            !user ? (
              <button
                className="btn btn-sm btn-primary gap-2 py-2.5 pl-4 h-fit normal-case hover:bg-yellow-ceo hover:text-blue-ceo hover:border-blue-ceo"
                onClick={showLoginModal}
              >
                Login <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="group flex items-center gap-2 cursor-pointer hover:text-blue-ceo"
                >
                  <UserCircle className="w-6 h-6" />
                  {user?.displayName ?? user?.email}
                  <ChevronDown className="w-3 h-3 group-focus:rotate-180 duration-200" />
                </label>

                <div
                  tabIndex={0}
                  className="dropdown-content flex flex-col gap-4 mt-2 py-4 pl-6 pr-8 w-max bg-white rounded-lg shadow-dropdown"
                >
                  <Link href="/profile" passHref>
                    <a className="flex justify-start items-center gap-3 font-normal normal-case hover:text-blue-ceo">
                      <Cog className="w-6 h-6" /> Data Diri
                    </a>
                  </Link>

                  <button
                    className="flex justify-start items-center gap-3 text-red font-normal normal-case hover:animate-bounce"
                    onClick={() =>
                      signOut(auth).then(() => toast.success("Successfully Logged Out!"))
                    }
                  >
                    <Leave /> Logout
                  </button>
                </div>
              </div>
            )
          ) : null}
        </div>

        <div className="group lg:hidden flex-none ml-auto">
          <label htmlFor={mobileToggleId} className="btn btn-ghost btn-circle">
            <Bars className="w-6 h-6" />
          </label>
        </div>
      </div>
    </div>
  )
})

Navbar.displayName = "Navbar"
export { Navbar }
