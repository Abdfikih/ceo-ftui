import { FC, memo } from "react"

import { auth } from "@utils"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

import { useAuthModal } from "@contexts"

import toast from "react-hot-toast"

import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

import { ChevronDown, Cog, Leave, UserCircle } from "@icons"

type SidebarProps = {
  className?: string
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [user, loading] = useAuthState(auth)
  const { showLoginModal } = useAuthModal()

  return (
    <div
      className={twMerge(
        "overflow-y-auto flex flex-col items-start gap-4 p-4 w-3/4 bg-white-ceo",
        className
      )}
    >
      <Link href="/" passHref>
        <Image alt="" src="/logo.png" width={150} height={40} layout="fixed" />
      </Link>
      <hr />

      <Link href="/grand-opening" passHref>
        <a>Grand Opening</a>
      </Link>

      <button
        className="group flex flex-col gap-4"
        onBlur={(e) => e.currentTarget.contains(e.relatedTarget) && e.target?.focus()}
      >
        <div className="flex items-center gap-2">
          Workshop
          <ChevronDown className="w-3 h-3 group-focus:rotate-180 duration-200" />
        </div>

        <Link href="/workshop#cv" passHref>
          <a className="hidden group-focus:flex justify-start items-center gap-3 font-normal normal-case">
            <Image alt="" src="/icons/workshop-cv.svg" width={32} height={32} layout="fixed" />
            CV and Interview Workshop
          </a>
        </Link>

        <Link href="/workshop#pm" passHref>
          <a className="hidden group-focus:flex justify-start items-center gap-3 font-normal text-left normal-case">
            <Image alt="" src="/icons/workshop-pm.svg" width={32} height={32} layout="fixed" />
            Project Management Workshop
          </a>
        </Link>
      </button>

      <Link href="/jobfair" passHref>
        <a>Job Fair</a>
      </Link>

      <Link href="/partnership" passHref>
        <a>Partnership</a>
      </Link>

      {!loading ? (
        !user ? (
          <button
            className="btn btn-sm btn-primary gap-2 mt-auto py-2.5 w-full h-fit normal-case"
            onClick={showLoginModal}
          >
            Masuk
          </button>
        ) : (
          <>
            <hr className="w-full border-black" />
            <div className="dropdown dropdown-start">
              <label tabIndex={0} className="group flex items-center gap-2 cursor-pointer">
                <UserCircle className="w-6 h-6" />
                {user?.displayName ?? user?.email}
              </label>

              <div
                tabIndex={0}
                className="dropdown-content flex flex-col gap-4 mt-2 py-4 pl-6 pr-8 w-max bg-white rounded-lg shadow-dropdown"
              >
                <Link href="/profile" passHref>
                  <a className="flex justify-start items-center gap-3 font-normal normal-case">
                    <Cog className="w-6 h-6" /> Data Diri
                  </a>
                </Link>

                <button
                  className="flex justify-start items-center gap-3 text-red font-normal normal-case"
                  onClick={() => signOut(auth).then(() => toast.success("Berhasil keluar"))}
                >
                  <Leave /> Keluar
                </button>
              </div>
            </div>
          </>
        )
      ) : null}
    </div>
  )
})

Sidebar.displayName = "Sidebar"
export { Sidebar }
