'use client'
import Navbar from "@/components/ui/Navbar";
import useUserStore from "@/store/userStore";
import ProductGrid from "@/components/ui/ProductGrid";

export default function Produtos() {

  const { user } = useUserStore()

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