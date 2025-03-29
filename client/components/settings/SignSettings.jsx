export default function SignSettings({

}) {
  return (
    <>
      <div className="flex justify-between items-center px-2 mt-4">
        <div className="flex justify-start items-center gap-2">
          <input
            type="checkbox"
            name="keep-logged"
            id="keep-logged"
            className="border bg-transparent cursor-pointer"
          />
          <label
            className="cursor-pointer"
          >
            Manter Logado
          </label>
        </div>
        <div>
          <a 
            href="#"
            className="hover:underline"
          >
            Esqueceu a Senha?
          </a>
        </div>
      </div>
    </>
  )
}