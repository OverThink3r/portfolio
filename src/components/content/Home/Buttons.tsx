import { useEffect, useState } from "react"

export const Buttons = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const onGetCVClic = () => { 
    window.open('https://drive.google.com/file/d/1n26Y9oH6XnHuJD_zBnuWufqKL7BW4bq1/view?usp=sharing', '_blank')
  }
  const copyMyMail = async () => {
    setEmailCopied(true)
    await navigator.clipboard.writeText('vlozaprado@gmail.com')
    setTimeout(()=> {
      setEmailCopied(false)
    }, 1000)
  }
  
  return (
    <>
      <button
        className="w-20 border-2 border-sky-500 bg-transparent hover:bg-sky-500 hover:text-white p-2 rounded-md text-sky-500 mx-3 min-w-fit"
        type="button"
        onClick={onGetCVClic} 
      >
        Get my CV
      </button>
      <button
        type="button"
        className="w-20 border-2 border-emerald-500 bg-transparent text-emerald-500 hover:bg-emerald-400 hover:text-white p-2 rounded-md mx-3 min-w-fit"
        onClick={copyMyMail}
      >
        Copy my Email
      </button>
      { emailCopied && <span className="text-emerald-500">Copied!</span>}
    </>
  )
}