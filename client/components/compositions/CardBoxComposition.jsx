
export default function CardBoxComposition({ children }) {
  return (
    <>
      <div className="bg-[#80bc04] p-10 py-14 rounded-md flex justify-center items-center">
        <div className="lg:w-[80%] text-white">
          {children}
        </div>
      </div>
    </>
  )
}