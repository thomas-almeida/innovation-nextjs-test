import { redirect } from "next/navigation"
import service from "@/service"
import { useState } from "react"

export default function LoginButton({
  isDisable,
  payload
}) {

  const [errorMessage, setErroMessage] = useState("")

  async function SignIn() {
    const response = await service.signIn(payload)

    if (response.data.status === 1) {
      redirect('/produtos')
    }

    setErroMessage(response.data.message)
  }

  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <button
        className={
          `${isDisable ? `bg-slate-300 text-slate-400` : `bg-white`} 
          rounded-full p-4 text-black font-semibold w-full lg:w-[45%] cursor-pointer`
        }
        onClick={() => SignIn()}
      >
        Login
      </button>
      <p className={errorMessage !== "" ? `mt-6 bg-red-500 p-1 rounded-full px-4` : `hidden`}>
        {errorMessage}
      </p>
    </div>
  )
}