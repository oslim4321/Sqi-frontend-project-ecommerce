import React, { useEffect } from 'react'

function DisplayErrorAlert({ type, msg, removeAlert }) {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 5000);
    return () => clearTimeout(timeout)
  }, [removeAlert])

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     removeAlert()
  //   })
  // }, [])
  function remov() {
    removeAlert()
  }

  return (
    <div onClick={remov} className='absolute top-5'>
      <div className='fixed z-50 flex flex-row bg-slate-400 h-10 w-[100%] rounded-[30px] md:w-[400px]'>
        <span className='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>{msg}</span>
        <div style={{ background: type }} className={`w-[10%] bg-${type}-400 rounded-r-2xl shadow-[0_0_20px_#ff444477]`}></div>
      </div>
    </div>
  )
}

export default DisplayErrorAlert