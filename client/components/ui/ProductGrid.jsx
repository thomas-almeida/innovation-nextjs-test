'use client'

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import service from "@/service"
import ProductItem from "./productItem"
import ContainerContentComposition from "../compositions/ContainerContentComposition"
import FilterBar from "./FilterBar"
import Link from "next/link"

export default function ProductGrid({
  userData
}) {

  const [products, setProducts] = useState([])
  const [filterValue, setFilterValue] = useState({})

  useEffect(() => {

    async function getUserData(payload) {
   
      if (!userData?.token) {
        redirect('/')
      }

      try {
        const response = await service.getProducts(payload, userData?.token)
        setProducts(response.data)
      } catch (error) {
        console.error(error)
      }

    }

    getUserData(filterValue)

  }, [filterValue])

  return (
    <>
      <ContainerContentComposition>
        <FilterBar
          setSearchValue={setFilterValue}
        />
        <div className="lg:grid md:grid lg:grid-cols-4 lg:gap-3 md:grid-cols-2 md:gap-2 justify-center items-center">
          {
            products?.map((product) => (
              <Link
                href={`/produtos/${product.codigo}`}
                key={product.codigo}
              >
                <ProductItem
                  key={product.codigo}
                  id={product.codigo}
                  image={product.imagem}
                  name={product.nome}
                  description={product.descricao}
                  price={product.preco}
                />
              </Link>
            ))
          }
        </div>
      </ContainerContentComposition>
    </>

  );
}
