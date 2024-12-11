"use client"
import { FaArrowLeft } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function BackButton() {
    "use client"
  const router = useRouter()
  
  const handleBack = () => {
  
    router.back()
  }

  return (
    <button onClick={handleBack} className="fixed m-2 ">
      <FaArrowLeft size={30} />
    </button>
  )
}
