import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import TopNavbar from "./components/TopNavbar"

function Layout() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
