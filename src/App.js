import { Homepage } from "./pages/Homepage";
import { Errorpage } from "./pages/Errorpage";
import { Explore} from "./pages/Explore";
import { Write } from "./pages/Write";
import { Login } from "./pages/Login";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Context } from "./context.js/Context";
import { useContext } from "react";


// ----------------------------------------------------

function App() {

  const {user} = useContext(Context);

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Homepage />,
      errorElement: <Errorpage />
    },
    {
      path: "/explore/:id",
      element: <Explore />,
      errorElement: <Errorpage />
    },
    {
      path: "/write",
      element: user ? <Write /> : <Login/>,
      errorElement: <Errorpage />
    },
    {
      path: "/login",
      element: user ? <Homepage/> : <Login />,
      errorElement: <Errorpage />
    }
  ]);



  return (

    <div className='font-poppins duration-700'>
  
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
