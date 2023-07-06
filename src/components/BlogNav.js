import React from "react"

import Button1 from "./Button1"
import { BiArrowFromTop } from "react-icons/bi"
import { CiBeerMugFull } from "react-icons/ci"

function BlogNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="mx-auto m w-[100vw] px-2 sm:px-6 lg:px-8 bg-gray-400 flex justify-between py-2 lg:py-3 sticky top-0 left-0">
      {" "}
      {/* <Buttons label={"to top"} onClick={scrollToTop}></Buttons> */}
      {/* <Buttons label={"Sign In"}></Buttons>
      <Buttons label={"Register"} className="bg-zinc-900"></Buttons> */}
      <div className="w-[50vw] flex justify-between">
        <p className="md:text-2xl text-base font-bold flex text-blue-600 hover:text-red-600  mr-4">
          <span className="mt-1">
            <CiBeerMugFull />
          </span>
          Logo
        </p>
        <Button1 label={"Home"} onClick={scrollToTop}></Button1>
        <Button1 label={"Podcast"}></Button1>
        <Button1 label={"Food"}></Button1>
        <Button1 label={"Sport"}></Button1>
      </div>
      <span className="mt-1">
        <BiArrowFromTop />
      </span>
    </div>
  )
}

export default BlogNav
