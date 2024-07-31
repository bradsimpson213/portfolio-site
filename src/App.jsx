import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Navbar from "./components/Navbar"; 
import Biography from "./components/Biography";
import Portfolio from "./components/Portfolio";
import Instruction from "./components/Instruction";
import './App.css'



const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: '/portfolio-site/',
        element: <Biography />,
      },
      {
        path: '/portfolio-site/portfolio',
        element: <Portfolio />
      },
      {
        path: '/portfolio-site/instruction',
        element: <Instruction />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }
    ]
  },
]);



function App() {
  return (
    <>
      <RouterProvider router={ router } />  
    </>
  )
}
export default App
