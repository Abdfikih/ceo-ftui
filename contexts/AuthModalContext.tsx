import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

import { LoginModal, RegisterModal, RegisterSuccessModal } from "@modules"

type AuthModalContextProps = {
  showRegisterModal: () => void
  onRegisterSuccess: () => void

  showLoginModal: () => void
  onLoginSuccess: () => void
}

const AuthModalContext = createContext<AuthModalContextProps>({
  showRegisterModal: () => {},
  onRegisterSuccess: () => {},

  showLoginModal: () => {},
  onLoginSuccess: () => {},
})

const AuthModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false)
  const [registerSuccessModalOpen, setRegisterSuccessModalOpen] = useState(false)

  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const [state] = useState<AuthModalContextProps>({
    showRegisterModal: () => {
      setLoginModalOpen(false)
      setRegisterModalOpen(true)
    },
    onRegisterSuccess: () => {
      setLoginModalOpen(false)
      setRegisterModalOpen(false)
      setRegisterSuccessModalOpen(true)
    },

    showLoginModal: () => {
      setRegisterModalOpen(false)
      setLoginModalOpen(true)
    },
    onLoginSuccess: () => {
      setLoginModalOpen(false)
      setRegisterModalOpen(false)
    },
  })

  return (
    <AuthModalContext.Provider value={state}>
      <RegisterModal open={registerModalOpen} onClose={() => setRegisterModalOpen(false)} />
      <RegisterSuccessModal
        open={registerSuccessModalOpen}
        onClose={() => setRegisterSuccessModalOpen(false)}
      />

      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />

      {children}
    </AuthModalContext.Provider>
  )
}

const useAuthModal = () => useContext(AuthModalContext)

export { AuthModalProvider, useAuthModal }
