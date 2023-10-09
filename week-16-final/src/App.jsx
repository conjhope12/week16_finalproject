import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Title from './Components/Title'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Jedi from './Pages/Jedi'
import Sith from './Pages/Sith'
import Footer from './Components/Footer'
import Jediform from './Components/Jediform'

const Dashboard = () => {
  return (
    <div>
      <Title />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jedi",
        element: <Jedi />,
        element: <Jediform />,
      },
      {
        path: "/sith",
        element: <Sith />,
      },
    ],
  },
  {
    path: "/jedi",
    element: <Jedi />,
  },
  {
    path: "/sith",
    element: <Sith />,
  },
])

function App() {

  return (
  
      <div>
        <RouterProvider router = {router}/>
      </div>
    
  )
}

export default App
