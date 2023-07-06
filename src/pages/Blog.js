import React, { useEffect, useState } from "react"
import BlogNav from "../components/BlogNav"
import BlogContent from "../components/BlogContent"

import { client } from "../components/Blogclient"

function Blog() {
  const [data, setData] = useState([])
  const fetchBlog = async () => {
    try {
      const response = await client.getEntries({
        content_type: "cryptoExchangeBlog2",
      })
      console.log(response.items)
      setData(response.items)
    } catch (err) {
      console.log("Error fetching blog", err)
    }
  }
  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <div className="font-mono ">
      <BlogNav></BlogNav>
      {data.map(
        (data, index) => (
          <BlogContent key={index} data={data} id={index} />
        )
        // console.log(data)
      )}
    </div>
  )
}

export default Blog
