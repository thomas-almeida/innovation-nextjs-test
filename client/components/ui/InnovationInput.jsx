import Image from "next/image"

export default function InnovationInput({
  icon,
  type,
  placeholder
}) {
  return (
    <>
      <div className="flex justify-start gap-3 border px-6 p-4 rounded-full bg-white my-4">
        <Image
          src={icon}
          alt={placeholder}
          width={24}
          height={24}
        />
        <input
          type={type}
          placeholder={placeholder}
          className="text-black outline-none w-full"
        />
      </div>
    </>
  )
}