import Image from "next/image";

export default function UserInfo({
  userData
}) {

  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <div>
          <Image
            src={'/user-profile.png'}
            width={50}
            height={50}
            alt="imagem-de-usuario"
            className="border-2 border-white rounded-full shadow-sm"
          />
        </div>
        <div>
          <h2 className="font-semibold">
            {userData?.user.nome_usuario}
          </h2>
          <h2 className="text-sm text-center border rounded-full">
            {userData?.user.nome_grupo}
          </h2>
          <h3>

          </h3>
        </div>
      </div>
    </>
  )

}