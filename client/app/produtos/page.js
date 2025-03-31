'use client'
import Navbar from "@/components/ui/Navbar";
import useUserStore from "@/store/userStore";
import ProductGrid from "@/components/ui/ProductGrid";
import { useEffect, useState } from "react";
import { Reload } from "react-ionicons";

export default function Produtos() {

  const { user, _hasHydrated } = useUserStore()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    if (_hasHydrated) {
      setIsHydrated(true)
    }
  }, [_hasHydrated])

  if (!isHydrated) {
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
      <div>
        <Navbar userData={user} />
        <ProductGrid
          userData={user}
        />
      </div>
    </>
  )
}