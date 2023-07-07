import { FC, memo, useCallback, useState } from "react"

import { auth } from "@utils"
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { useForm } from "react-hook-form"

import { useAuthModal } from "@contexts"

import toast from "react-hot-toast"

import { Modal } from "@components"
import { GoogleButton } from "./GoogleButton"

type RegisterModalProps = {
  open: boolean
  onClose: () => void
}

type RegisterForm = {
  name: string
  email: string
  password: string
}

const RegisterModal: FC<RegisterModalProps> = memo(({ open, onClose }) => {
  const { showLoginModal, onRegisterSuccess } = useAuthModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const [loading, setLoading] = useState(false)
  const emailRegister = handleSubmit((data) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((credential) => {
        updateProfile(credential.user, { displayName: data.name })
        onRegisterSuccess()
      })
      .catch((e) => {
        if (e.code === AuthErrorCodes.EMAIL_EXISTS) {
          setError("email", { message: "Email sudah terdaftar", type: "focus" })
        } else if (e.code === AuthErrorCodes.INVALID_EMAIL) {
          setError("email", { message: "Email tidak valid", type: "focus" })
        } else if (e.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("password", { message: "Password terlalu lemah", type: "focus" })
        }
      })
      .finally(() => setLoading(false))
  })

  const googleRegister = useCallback(() => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(() => onRegisterSuccess())
      .catch(() => toast.error("Gagal daftar"))
  }, [onRegisterSuccess])

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-stretch gap-4 py-4 px-12 text-center">
        <h4>Daftar Akun</h4>

        <form className="flex flex-col items-stretch gap-2" onSubmit={emailRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nama Lengkap</span>
              <span className="label-text-alt text-error">{errors.name?.message}</span>
            </label>
            <input
              className={`input input-primary ${
                errors.name && "input-error"
              } input-bordered w-full`}
              type="text"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
              <span className="label-text-alt text-error">{errors.email?.message}</span>
            </label>
            <input
              className={`input input-primary ${
                errors.email && "input-error"
              } input-bordered w-full`}
              type="email"
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
              <span className="label-text-alt text-error">{errors.password?.message}</span>
            </label>
            <input
              className={`input input-primary ${
                errors.password && "input-error"
              } input-bordered w-full`}
              type="password"
              placeholder="password..."
              {...register("password", { required: true })}
            />
          </div>

          <button
            className={`btn btn-primary ${loading && "loading"} mt-4 w-full normal-case`}
            type="submit"
          >
            Daftar
          </button>
        </form>

        <h5 className="text-gray-dark">atau</h5>
        <GoogleButton className="w-full" onClick={googleRegister} />

        <p className="b2 text-primary">
          Sudah memiliki akun?{" "}
          <button className="font-bold" onClick={showLoginModal}>
            Masuk
          </button>
        </p>
      </div>
    </Modal>
  )
})

RegisterModal.displayName = "RegisterModal"
export { RegisterModal }
