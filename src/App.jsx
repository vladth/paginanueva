
import * as React from "react"
import * as ReactDom from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Hero from './components/Hero'
import Container from './components/Container'
import NavBar from './components/NavBar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  }
])

function App() {

  return (
    <>
      <Container>
        <NavBar />
        <Hero />
      </Container>
    </>
  )
}

export default App
