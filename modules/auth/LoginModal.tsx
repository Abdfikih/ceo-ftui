import { FC, memo, useCallback, useState } from "react"

import { auth } from "@utils"
import {
  AuthErrorCodes,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { useForm } from "react-hook-form"

import { useAuthModal } from "@contexts"

import toast from "react-hot-toast"

import { Modal } from "@components"
import { GoogleButton } from "./GoogleButton"

type LoginModalProps = {
  open: boolean
  onClose: () => void
}

type LoginForm = {
  email: string
  password: string
}

const LoginModal: FC<LoginModalProps> = memo(({ open, onClose }) => {
  const { showRegisterModal, onLoginSuccess } = useAuthModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [loading, setLoading] = useState(false)
  const emailLogin = handleSubmit((data) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        toast.success("Berhasil masuk")
        onLoginSuccess()
      })
      .catch((e) => {
        if (e.code === AuthErrorCodes.INVALID_EMAIL) {
          setError("email", { message: "Email tidak valid", type: "focus" })
        } else if (e.code === AuthErrorCodes.INVALID_PASSWORD) {
          setError("password", { message: "Password salah", type: "focus" })
        }
      })
      .finally(() => setLoading(false))
  })

  const googleLogin = useCallback(() => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Berhasil masuk")
        onLoginSuccess()
      })
      .catch(() => toast.error("Gagal masuk"))
  }, [onLoginSuccess])

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-stretch gap-4 py-4 px-12 text-center">
        <h4>Masuk</h4>

        <form className="flex flex-col items-stretch gap-2" onSubmit={emailLogin}>
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
            Masuk
          </button>
        </form>

        <h5 className="text-gray-dark">atau</h5>
        <GoogleButton className="w-full" login onClick={googleLogin} />

        <p className="b2 text-primary">
          Belum memiliki akun?{" "}
          <button className="font-bold" onClick={showRegisterModal}>
            Daftar
          </button>
        </p>
      </div>
    </Modal>
  )
})

LoginModal.displayName = "LoginModal"
export { LoginModal }
