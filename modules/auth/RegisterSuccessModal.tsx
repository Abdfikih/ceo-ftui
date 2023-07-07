import { FC, memo } from "react"

import { Modal } from "@components"
import Link from "next/link"

type RegisterSuccessModalProps = {
  open: boolean
  onClose: () => void
}

const RegisterSuccessModal: FC<RegisterSuccessModalProps> = memo(({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-stretch py-4 px-12 text-center">
        <h4>Sukses Membuat Akun!</h4>
        <p className="b2 mt-2">Yuk lengkapi data diri kamu sebelum mengeksplorasi CEO 2022</p>

        <div className="flex justify-between items-center gap-6 mt-5 w-full">
          <button
            className="btn btn-primary btn-outline flex-1 normal-case border-2"
            onClick={onClose}
          >
            Kembali
          </button>

          <Link href="/profile/edit" passHref>
            <a className="btn btn-primary flex-1 normal-case">Lengkapi Profil</a>
          </Link>
        </div>
      </div>
    </Modal>
  )
})

RegisterSuccessModal.displayName = "RegisterSuccessModal"
export { RegisterSuccessModal }
