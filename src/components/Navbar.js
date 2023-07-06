import React from "react"
import Buttons from "./Buttons"

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="mx-auto w-[100vw] px-2 sm:px-6 lg:px-8 bg-gray-400 flex justify-between py-2 lg:py-3 sticky top-0 left-0">
      {" "}
      <Buttons label={"to top"} onClick={scrollToTop}></Buttons>
      {/* <Buttons label={"Sign In"}></Buttons>
      <Buttons label={"Register"} className="bg-zinc-900"></Buttons> */}
    </div>
  )
}

export default Navbar
