import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Market from "../pages/Market"
import Blog from "../pages/Blog"

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/market" />} />

          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routers
