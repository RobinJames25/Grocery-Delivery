import { Outlet } from "react-router-dom"
import Banner from "../../src/components/Banner"
import Navbar from "../../src/components/Navbar"
import Footer from "../../src/components/Footer"
import CartSidebar from "../../src/components/CartSidebar"

const AppLayout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
    </>
  )
}

export default AppLayout