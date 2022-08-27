import * as React from "react"
import "../styles/index.css"
import Hero from "../components/Hero/Hero"
import Navigator from "../components/Navigator/Navigator"
import Header from "../components/Header/Header"


const IndexPage = () => {
  return (
    <div className="root">
      <Header />
      <Hero />
      <Navigator />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
