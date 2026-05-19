import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'

// ── Landing + Auth pages ──────────────────────────────────────────────────────
import LandingPage from '../pages/LandingPage'
import B2BLogin    from '../pages/auth/B2BLogin'
import B2CLogin    from '../pages/auth/B2CLogin'
import C2CLogin    from '../pages/auth/C2CLogin'

// ── Shared ────────────────────────────────────────────────────────────────────
import Profile from '../features/auth/pages/Profile'

// ── B2C ───────────────────────────────────────────────────────────────────────
import B2CLayout      from '../layouts/B2CLayout'
import Home           from '../features/b2c/pages/Home'
import ProductDetails from '../features/b2c/pages/ProductDetails'
import Cart           from '../features/b2c/pages/Cart'
import Checkout       from '../features/b2c/pages/Checkout'
import OrderHistory   from '../features/orders/pages/OrderHistory'
import OrderDetails   from '../features/orders/pages/OrderDetails'

// ── B2B ───────────────────────────────────────────────────────────────────────
import B2BLayout         from '../layouts/B2BLayout'
import B2BHome           from '../features/b2b/pages/B2BHome'
import B2BProductListing from '../features/b2b/pages/B2BProductListing'
import B2BProductDetail  from '../features/b2b/pages/B2BProductDetail'
import B2BRFQ            from '../features/b2b/pages/B2BRFQ'
import B2BDashboard      from '../features/b2b/pages/B2BDashboard'

// ── Static / Info pages (PUBLIC) ─────────────────────────────────────────────
import Aboutus        from '../pages/Aboutus'
import Blog           from '../pages/Blog'
import Features       from '../pages/Features'
import ContactUs      from '../pages/Contactus'
import Help           from '../pages/Help'
import FAQs           from '../pages/FAQS'
import TermsOfService from '../pages/Termsofservice'
import CookiePolicy   from '../pages/Cookiepolicy'
import PrivacyPolicy  from '../pages/Privacypolicy'
import Sitemap        from '../pages/Sitemap'

// ── C2C ───────────────────────────────────────────────────────────────────────
import C2CLayout        from '../layouts/C2CLayout'
import C2CHome          from '../features/c2c/pages/C2CHome'
import C2CListingDetail from '../features/c2c/pages/C2CListingDetail'
import C2CSellItem      from '../features/c2c/pages/C2CSellItem'
import C2CMyListings    from '../features/c2c/pages/C2CMyListings'
import C2CCart          from '../features/c2c/pages/C2CCart'
import C2CCheckout      from '../features/c2c/pages/C2CCheckout'
import C2COrderHistory  from '../features/c2c/pages/C2COrderHistory'
import C2COrderDetails  from '../features/c2c/pages/C2COrderDetails'

function App() {
  return (
    <Routes>
      {/* ── Landing page (public) ─────────────────────────────────────────── */}
      <Route path="/" element={<LandingPage />} />

      {/* ── Portal login pages (public) ───────────────────────────────────── */}
      <Route path="/b2b-login" element={<B2BLogin />} />
      <Route path="/b2c-login" element={<B2CLogin />} />
      <Route path="/c2c-login" element={<C2CLogin />} />

      {/* ── Static / Info pages (public — no auth needed) ─────────────────── */}
      <Route path="/about"          element={<Aboutus />} />
      <Route path="/blog"           element={<Blog />} />
      <Route path="/features"       element={<Features />} />
      <Route path="/contact"        element={<ContactUs />} />
      <Route path="/help"           element={<Help />} />
      <Route path="/faqs"           element={<FAQs />} />
      <Route path="/terms"          element={<TermsOfService />} />
      <Route path="/cookie-policy"  element={<CookiePolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sitemap"        element={<Sitemap />} />

      {/* ── B2C routes — BUYER only ───────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={['BUYER']} />}>
        <Route element={<B2CLayout />}>
          <Route path="/shop"               element={<Home />} />
          <Route path="/b2c"                element={<Home />} />
          <Route path="/product/:id"        element={<ProductDetails />} />
          <Route path="/cart"               element={<Cart />} />
          <Route path="/checkout"           element={<Checkout />} />
          <Route path="/profile"            element={<Profile />} />
          <Route path="/orders"             element={<OrderHistory />} />
          <Route path="/orders/:id"         element={<OrderDetails />} />
        </Route>
      </Route>

      {/* ── B2B routes — BUSINESS only ────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={['BUSINESS']} />}>
        <Route element={<B2BLayout />}>
          <Route path="/b2b"                element={<B2BHome />} />
          <Route path="/b2b/products"       element={<B2BProductListing />} />
          <Route path="/b2b/products/:id"   element={<B2BProductDetail />} />
          <Route path="/b2b/rfq"            element={<B2BRFQ />} />
          <Route path="/b2b/dashboard"      element={<B2BDashboard />} />
        </Route>
      </Route>

      {/* ── C2C routes — SELLER only ──────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={['SELLER']} />}>
        <Route element={<C2CLayout />}>
          <Route path="/c2c"                element={<C2CHome />} />
          <Route path="/c2c/listings/:id"   element={<C2CListingDetail />} />
          <Route path="/c2c/sell"           element={<C2CSellItem />} />
          <Route path="/c2c/my-listings"    element={<C2CMyListings />} />
          <Route path="/c2c/cart"           element={<C2CCart />} />
          <Route path="/c2c/checkout"       element={<C2CCheckout />} />
          <Route path="/c2c/orders"         element={<C2COrderHistory />} />
          <Route path="/c2c/orders/:id"     element={<C2COrderDetails />} />
        </Route>
      </Route>

      {/* ── Catch-all → landing page ──────────────────────────────────────── */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App