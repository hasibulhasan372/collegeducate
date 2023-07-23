import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges/Colleges";
import Login from "../pages/Register/Login";
import SignUp from "../pages/Register/SignUp";
import Admission from "../pages/Admission/Admission";
import CollegeDetails from "../components/Shared/CollegeDetails";
import AdmissionForm from "../components/Form/AdmissionForm";
import MyCollege from "../pages/MyCollege/MyCollege";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";

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
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "admission",
          element: <Admission></Admission>

        },
        {
          path: "details/:id",
          element: <CollegeDetails></CollegeDetails>
        },
        {
          path: "admissionForm/:id",
          element: <PrivateRouter><AdmissionForm></AdmissionForm></PrivateRouter>

        },
        {
          path: "myCollege",
          element: <PrivateRouter><MyCollege></MyCollege></PrivateRouter>
        },
        {
          path: "profile",
          element: <Profile></Profile>
        },
        {
          path: "update",
          element: <UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);

  export default router;