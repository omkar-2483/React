import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import Profile from './component/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<> <Navbar /><Home /> </>
    },
    {
      path: "/login",
      element: <> <Navbar /><Login /> </>
    },
    {
      path: "/about",
      element : <> <Navbar /><About /> </>
    },
    {
      path: "/profile/:username",
      element: <><Navbar /> <Profile/></>
    }
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
