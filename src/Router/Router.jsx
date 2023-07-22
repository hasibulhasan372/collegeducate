import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges/Colleges";
import Login from "../pages/Register/Login";
import SignUp from "../pages/Register/SignUp";
import Admission from "../pages/Admission/Admission";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "colleges",
          element: <Colleges></Colleges>
        },
        {
          path: "login",
          element: <Login></Login>
        }
        ,
        {
          path: "signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "admission",
          element: <Admission></Admission>

        }
      ]
    },
  ]);

  export default router;