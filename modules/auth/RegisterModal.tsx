import { Modal } from "@components"
import { useAuthModal } from "@contexts"
import { auth } from "@utils"
import {
  AuthErrorCodes,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { FC, memo, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
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
  const [isNameClicked, setNameClicked] = useState(false)
  const [isEmailClicked, setEmailClicked] = useState(false)
  const [isPasswordClicked, setPasswordClicked] = useState(false)

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

  const handleNameClick = () => {
    setNameClicked(true)
  }

  const handleEmailClick = () => {
    setEmailClicked(true)
  }

  const handlePasswordClick = () => {
    setPasswordClicked(true)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-stretch gap-4 py-4 px-12 text-center">
        <h4>Daftar Akun</h4>

        <form className="flex flex-col items-stretch gap-2" onSubmit={emailRegister}>
          <div className={`form-control ${isNameClicked ? "input-clicked" : ""}`}>
            <label className="label">
              <span className="label-text">Nama Lengkap</span>
              <span className="label-text-alt text-error">{errors.name?.message}</span>
            </label>
            <input
              className={`input border-blue-ceo input-secondary ${
                errors.name && "input-error"
              } input-bordered w-full`}
              type="text"
              placeholder="John Doe"
              {...register("name", { required: true })}
              onClick={handleNameClick}
            />
          </div>

          <div className={`form-control ${isEmailClicked ? "input-clicked" : ""}`}>
            <label className="label">
              <span className="label-text">Email</span>
              <span className="label-text-alt text-error">{errors.email?.message}</span>
            </label>
            <input
              className={`input border-blue-ceo input-secondary ${
                errors.email && "input-error"
              } input-bordered w-full`}
              type="email"
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
              onClick={handleEmailClick}
            />
          </div>

          <div className={`form-control w-full ${isPasswordClicked ? "input-clicked" : ""}`}>
            <label className="label">
              <span className="label-text">Password</span>
              <span className="label-text-alt text-error">{errors.password?.message}</span>
            </label>
            <input
              className={`input border-blue-ceo input-secondary ${
                errors.password && "input-error"
              } input-bordered w-full`}
              type="password"
              placeholder="password..."
              {...register("password", { required: true })}
              onClick={handlePasswordClick}
            />
          </div>

          <button
            className={`btn bg-blue-ceo btn-secondary hover:text-blue-ceo ${
              loading && "loading"
            } mt-4 w-full normal-case`}
            type="submit"
          >
            Daftar
          </button>
        </form>

        <h5 className="text-blue-ceo">atau</h5>
        <GoogleButton className="w-full hover:bg-yellow-ceo" onClick={googleRegister} />

        <p className="b2 text-primary">
          Sudah memiliki akun?{" "}
          <button className="font-bold hover:text-yellow-ceo" onClick={showLoginModal}>
            Masuk
          </button>
        </p>
      </div>
    </Modal>
  )
})

RegisterModal.displayName = "RegisterModal"
export { RegisterModal }
