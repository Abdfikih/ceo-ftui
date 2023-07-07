import { FC, memo, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type ModalProps = {
  className?: string

  open: boolean
  onClose: () => void

  disableMobileBottom?: boolean
  disableOverlayClick?: boolean
}

const Modal: FC<PropsWithChildren<ModalProps>> = memo(
  ({
    className,
    open,
    onClose,
    disableMobileBottom = false,
    disableOverlayClick = false,
    children,
  }) => (
    <div
      className={`modal md:overflow-auto md:py-12 ${open && "modal-open "} ${
        !disableMobileBottom ? "modal-bottom md:modal-middle" : "overflow-auto py-12"
      } ${!disableOverlayClick && "cursor-pointer"}`}
      onClick={() => !disableOverlayClick && onClose()}
    >
      <div
        className={twMerge(
          "modal-box relative md:overflow-y-visible md:m-auto md:h-fit md:max-h-max cursor-default",
          disableMobileBottom && "overflow-y-visible m-auto h-fit max-h-max",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
)

Modal.displayName = "Modal"
export { Modal }
