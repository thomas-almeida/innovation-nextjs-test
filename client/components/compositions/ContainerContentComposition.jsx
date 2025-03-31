export default function ContainerContentComposition({ children }) {
  return (
    <>
      <div className="p-2 flex justify-center items-center">
        <div className="w-[80%] lg:w-[60%]">
          {children}
        </div>
      </div>
    </>
  )
}