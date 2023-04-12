const onGetCVClic = () => { 
  window.open('https://drive.google.com/file/d/1P41Ddm9dvporBRdnakfS6EmnQRjG4OIh/view?usp=share_link', '_blank')
}

export const Buttons = () => {
  return (
    <>
      <button
        className="w-20 border-2 border-sky-500 bg-transparent hover:bg-sky-500 hover:text-white p-2 rounded-md text-sky-500 mx-3 min-w-fit		"
        type="button"
        onClick={onGetCVClic} 
      >
        Get CV
      </button>
      <button
        className="w-20 border-2 border-emerald-500 bg-transparent text-emerald-500 hover:bg-emerald-400 hover:text-white p-2 rounded-md mx-3 min-w-fit		"
      >
        Email
      </button>
    </>
  )
}