import { redirect } from "next/navigation"
import service from "@/service"

export default function LoginButton({
  isDisable,
  payload
}) {

  async function SignIn() {
    const response = await service.signIn(payload)
    redirect(response.data.status === 1 ? '/produtos' : '')
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <button
        className={
          `${isDisable ? `bg-slate-300 text-slate-400` : `bg-white`} 
          rounded-full p-4 text-black font-semibold w-[45%] cursor-pointer`
        }
        onClick={() => SignIn()}
      >
        Login
      </button>
    </div>
  )
}