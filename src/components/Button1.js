import React from "react"

function Button1({ label, onClick }) {
  return (
    <button
      className="md:text-base text-xs font-mono font-bold px-2 hover:text-blue-200 hover:border-red-300 border border-transparent rounded-md m-[-1px] "
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button1
