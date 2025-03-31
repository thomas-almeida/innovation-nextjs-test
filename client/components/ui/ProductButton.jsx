export default function ProductButton({
  text
}) {
  return (
    <div>
      <button className="p-1 my-2 bg-primary-500 w-full rounded-md text-lg font-semibold text-white cursor-pointer hover:bg-secondary-500">
        {text}
      </button>
    </div>
  )
}