import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import CookieNotice from "./CookieNotice"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
      <CookieNotice />
    </>
  )
}

export default Layout
