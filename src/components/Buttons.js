import React from "react"

const Buttons = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-600 px-3 py-1 rounded-md text-white text-[8px] m-2"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Buttons
