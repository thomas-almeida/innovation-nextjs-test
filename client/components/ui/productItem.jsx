
import Image from "next/image"
import Pricing from "./Pricing"
import ProductButton from "./ProductButton"

export default function ProductItem({
  id,
  description,
  image,
  name,
  price,
}) {
  return (
    <div
      key={id}
      className="my-2 border rounded-md p-2 border-slate-100 hover:shadow-sm cursor-pointer relative"
    >
      <div className="relative text-right">
        <b className="text-blue-400 text-sm">Exclusivo!</b>
      </div>
      <div className="flex justify-center">
        <Image
          src={image}
          width={150}
          height={120}
          alt={description}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold overflow-clip text-ellipsis whitespace-nowrap">{name}</h3>
        <p className="overflow-clip text-ellipsis whitespace-pre-line line-clamp-2 text-sm my-2">
          {description}
        </p>
        <Pricing value={price} type={"list"} />
        <ProductButton text={"Confira"} />
      </div>
    </div>
  )
}