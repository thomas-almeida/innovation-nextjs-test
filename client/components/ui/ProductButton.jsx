export default function ProductButton({
  text
}) {
  return (
    <div>
      <button className="p-1 my-2 bg-[#8ec605] w-full rounded-md text-lg font-semibold text-white cursor-pointer hover:bg-[#72c605]">
        {text}
      </button>
    </div>
  )
}