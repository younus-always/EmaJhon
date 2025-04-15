import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { AuthLayout } from "../layout/AuthLayout";
import { Home } from "../page/Home";
import { ErrorPage } from "../page/ErrorPage";

export const router = createBrowserRouter([
      {
            path: '/',
            errorElement: <ErrorPage />,
            element: <AppLayout />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/auth',
                        element: <AuthLayout />,
                        children: [
                              {
                                    path: 'login',
                                    element: <Login />
                              },
                              {
                                    path: 'register',
                                    element: <Register />
                              }
                        ]
                  }
            ]
      }
])