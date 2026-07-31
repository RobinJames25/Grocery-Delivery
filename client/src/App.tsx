import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Login from '../grocery-assets/pages/Login'
import AppLayout from '../grocery-assets/pages/AppLayout'
import Home from '../grocery-assets/pages/Home'
import Products from '../grocery-assets/pages/Products'
import ProductPage from '../grocery-assets/pages/ProductPage'
import SearchResults from '../grocery-assets/pages/SearchResults'
import FlashDeals from '../grocery-assets/pages/FlashDeals'
import Checkout from '../grocery-assets/pages/Checkout'
import MyOrders from '../grocery-assets/pages/MyOrders'
import OrderTracking from '../grocery-assets/pages/OrderTracking'
import Addresses from '../grocery-assets/pages/Addresses'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <Toaster position='top-right' toastOptions={{ duration: 3000, style: {
        background: "#1B3022", color: "#fff", borderRadius: "12px", fontSize: "14px"
      }}}/>
      <Routes>
        {/* Auth pages -  No Navbar/Footer  */}
        <Route path='/login' element={<Login />}/>

        {/* Main pages - With Navbar/Footer  */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="products/:id" element={<ProductPage />}/>
          <Route path="search" element={<SearchResults />}/>
          <Route path="deals" element={<FlashDeals />}/>
          <Route element={<ProtectedRoute />}>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='orders' element={<MyOrders />}/>
            <Route path='orders/:id' element={<OrderTracking />}/>
            <Route path='addresses' element={<Addresses />}/>
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App