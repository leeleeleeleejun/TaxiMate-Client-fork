import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import Layout from "@/components/Layout";

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage/>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;