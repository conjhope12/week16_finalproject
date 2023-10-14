import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Jedi from './Pages/Jedi'
import Sith from './Pages/Sith'
import Footer from './Components/Footer'
import Jediform from './Components/Jediform'
import Sithform from './Components/Sithform';

// This little arrow function allowed me to add the components that I will be using for every page.

// Components Navbar, Alertbtn, Footer, Cardsss, and Title were all made with basic React-Bootstrap, JSX, CSS, and embedded HTML.

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

// The components listed below are the links that will be embedded into the Navbar. This will allow me to navaget through out all the pages by clicking on the links.

// I decided to use a different method to attache some child components to their parents.
//>> For example, I attached the Jediform to it parent in the App.jsx, rather than Jedi.jsx.
//>> The Jedi.jsx and Sith.jsx were used as placeholders basically. 

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
        element: <Jediform />
      },
      {
        path: "/sith",
        element: <Sith />,
        element: <Sithform />
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
