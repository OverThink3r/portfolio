import { useState } from "react"
import {FaCheckCircle} from "react-icons/fa"
export const Buttons = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const onGetCVClick = () => { 
    window.open('https://drive.google.com/file/d/1n3Cf0uBAxZKrGi9ks7Zu_K03iJ7YehMG/view?usp=sharing', '_blank')
  }
  const onCopyEmail = async () => {
    setEmailCopied(true)
    await navigator.clipboard.writeText('vlozaprado@gmail.com')
    setTimeout(()=> {
      setEmailCopied(false)
    }, 1000)
  }
  
  return (
    <>
      <button
        className="block text-sm md:text-lg border-2 border-sky-500 bg-transparent hover:bg-sky-500 hover:text-white p-2 rounded-md text-sky-500 mx-3 min-w-fit"
        type="button"
        onClick={onGetCVClick} 
      >
        Get my CV
      </button>
      <button
        type="button"
        className="block text-sm md:text-lg border-2 border-emerald-500 bg-transparent text-emerald-500 hover:bg-emerald-400 hover:text-white p-2 rounded-md mx-3 min-w-fit"
        onClick={onCopyEmail}
      >
        Copy my Email
      </button>
      { emailCopied && <FaCheckCircle className="text-emerald-400 font-md" />}
    </>
  )
}