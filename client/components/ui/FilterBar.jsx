import SearchInput from "./SearchInput";

export default function FilterBar({
  setSearchValue
}){
  return (
    <>
      <div className="p-1 py-2">
          <div className="flex justify-start items-center gap-4">
            <SearchInput 
              setSearchValue={setSearchValue}
              placeholder={"Pesquisar por Nome ou Código"}
            />
          </div>
      </div>
    </>
  )
}