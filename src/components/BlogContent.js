import React from "react"
import { AiOutlineDownCircle } from "react-icons/ai"

function BlogContent({ data, id }) {
  const blogtitle = data.fields.title
  const blogbody = data.fields.content
  // const blogtime = new Date(data.fields.timeCreated).toLocaleString()

  const blogtime = new Date(data.sys.createdAt).toLocaleString()
  const blogtitleimage = data.fields.image

  const showContent = () => {
    const parent = document.getElementById(id)
    const element = parent.querySelector(".blog-content")
    console.log(element)
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden")
    } else {
      element.classList.add("hidden")
    }
  }

  return (
    <div className="sm:mx-[4rem] sm:my-6 mx-8 my-3" id={id}>
      <div className="flex relative ">
        <span className="sm:text-xl  text-sm font-bold sm:my-3 max-w-[80%]">
          {blogtitle}{" "}
        </span>
        <span
          className="md:mt-4 mt-[4px] absolute right-0"
          id={id}
          onClick={(id) => {
            showContent()
          }}
        >
          <AiOutlineDownCircle />
        </span>
      </div>
      <div className="md:text-xs text-[9px]  md:font-bold">{blogtime}</div>

      <div className="hidden blog-content">
        {blogtitleimage && (
          <img src={blogtitleimage} alt="img" className=" w-[60vw] " />
        )}

        <div className="my-3 sm:text-sm text-[8px]">{blogbody}</div>
      </div>
    </div>
  )
}

export default BlogContent
