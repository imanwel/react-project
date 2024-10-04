import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authenticated from "../layout/Authenticated";
import UnAuthenticate from "../layout/Unauthenticated";
import CreateAccount from "../modules/authenticate/create-account/indx";
import Login from "../modules/authenticate/login";
import ForgotPassWOrd from "../modules/authenticate/forgot-password/email-input";
import NewPassWord from "../modules/authenticate/forgot-password/new-password";
import CodeInput from "../modules/authenticate/forgot-password/code-input";
import ContactInfo from "../modules/authenticate/contact-info";
// import Footer from "../layout/footer";

export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Authenticated />,
    },
    {
      path: "/auth",
      element: <UnAuthenticate />,
      children: [
        {
          index: true,
          element: <CreateAccount />,
        },
        {
          path: "contact-info",
          element: <ContactInfo />,
        },
        {
          path: "sign-in",
          element: <Login />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassWOrd />,
        },
        {
          path: "send-code",
          element: <CodeInput />,
        },
        {
          path: "new-password",
          element: <NewPassWord />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
