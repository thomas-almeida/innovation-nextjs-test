'use client'

import ContainerContentComposition from '@/components/compositions/ContainerContentComposition'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Navbar from '@/components/ui/Navbar'
import Pricing from '@/components/ui/Pricing'
import ProductButton from '@/components/ui/ProductButton'
import service from '@/service'
import useUserStore from '@/store/userStore'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { use, useEffect, useState } from 'react'
import { Reload } from 'react-ionicons'

export default function ProductPage({ params }) {
  const { productId } = use(params)
  const { user, _hasHydrated } = useUserStore()
  const [productData, setProductData] = useState(null)

  const mockArr = [0, 1, 2, 3]

  useEffect(() => {

    if (_hasHydrated && user?.token) {
      const getProductById = async () => {
        
        if (!user?.token) {
          redirect('/')
        }

        try {
          const response = await service.getProductById(productId, user.token)
          setProductData(response.data[0])
        } catch (error) {
          console.error("Erro ao buscar produto:", error)
        }

      }

      getProductById()
    }
  }, [_hasHydrated, user?.token, productId])

  if (!productData) {
    return (
      <div className='flex justify-center items-center h-svh'>
        <Reload
          width="20px"
          heigth="20px"
          rotate
        />
      </div>
    )
  }

  return (
    <>
      <Navbar userData={user} />
      <main>
        <ContainerContentComposition>
          <div>
            <Breadcrumb
              productId={productId}
              currentPage={productData.nome}
            />
          </div>
          <div className='py-10 flex justify-between items-center gap-6'>
            <div>
              <div className='flex justify-center border border-slate-100 my-2 rounded-md shadow-sm cursor-pointer'>
                <Image
                  src={productData?.imagem}
                  width={300}
                  height={300}
                  alt={productData.descricao}
                />
              </div>
              <div className=''>
                <div className='grid grid-cols-4 gap-4'>
                  {
                    mockArr.map((index) => (
                      <div
                        className='shadow-sm px-2 rounded-md hover:border-slate-300 cursor-pointer'
                        key={index}
                      >
                        <Image
                          src={productData?.imagem}
                          width={120}
                          height={100}
                          alt={productData.descricao}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='w-[70%]'>
              <div className=''>
                <h1 className='text-2xl font-semibold'>{productData.nome}</h1>
                <div className='my-4'>
                  <div className='flex justify-start items-center gap-2'>
                    <Pricing
                      value={productData.preco}
                      style={"font-semibold text-4xl"}
                    />
                    <p>unidade</p>
                  </div>
                  <div className='w-full'>
                    <h4 className='flex w-[60%] justify-center items-center gap-2 px-2 border border-slate-200 rounded-full'>
                      <p>Total (Min. 5) </p>
                      <Pricing value={parseFloat(productData.preco * 5)} />
                    </h4>
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-semibold text-xl'>Descrição do Produto</h4>
                  <p className='py-2'>
                    {productData.descricao}
                  </p>
                </div>
                <div>
                  <ProductButton
                    text={"Comprar Via PIX"}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerContentComposition>
      </main>
    </>
  )
}