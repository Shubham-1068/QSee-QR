import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Scanner from "./Components/Scanner"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Generator from "./Components/Generator"

function App() {

  const router = createBrowserRouter([

    { path: '/', element: <><Navbar /><Body /><Footer /></> },

    { path: '/generator', element: <><Navbar /><Generator /></> },

    { path: '/scanner', element: <><Navbar /><Scanner /></> },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
