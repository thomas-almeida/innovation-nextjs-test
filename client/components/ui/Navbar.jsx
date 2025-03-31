import Image from "next/image";
import ContainerContentComposition from "../compositions/ContainerContentComposition";
import UserInfo from "../settings/UserInfo";
import Link from "next/link";

export default function Navbar({
  userData
}) {
  return (
    <>
      <div className="bg-[#8ec605] p-2">
        <ContainerContentComposition>
          <div className="flex justify-between items-center">
            <Link
              href={'/produtos'}
            >
              <Image
                src={'/logo-white.png'}
                width={130}
                height={100}
                alt="innovation-brindes-logo"
              />
            </Link>
            <div className="text-white">
              <UserInfo userData={userData} />
            </div>
          </div>
        </ContainerContentComposition>
      </div>
    </>
  )
}