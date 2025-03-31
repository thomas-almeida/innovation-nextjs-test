import Link from "next/link";
import { ChevronForwardOutline, Home } from "react-ionicons";

export default function Breadcrumb({
  productId,
  currentPage
}) {
  return (
    <>
      <div className="flex justify-start items-center gap-1">
        <Link href={'/produtos'}>
          <div className="flex justify-start items-center gap-1">
            <Home
              width="15px"
              heigth="15px"
            />
            <p className="">Página Inicial</p>
          </div>
        </Link>
        <ChevronForwardOutline
          width="20px"
          heigth="20px"
        />
        <Link href={`/produtos/${productId}`}>
          <p className="text-[#8ec605]">{currentPage}</p>
        </Link>
      </div>
    </>
  )
}