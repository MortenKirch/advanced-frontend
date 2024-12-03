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
    <button onClick={handleBack}>
      <FaArrowLeft size={24} />
    </button>
  )
}
