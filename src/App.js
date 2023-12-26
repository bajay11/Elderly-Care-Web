
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register'
import AboutUs from './components/aboutus/AboutUs';
import ErrorPage from './components/ErrorPage';

import UserProfile from './components/userProfile/UserProfile';
import HealthCard from './components/healthCard/HealthCard';

function App() {
  const Router=createBrowserRouter([{
    path:"/",
    element:<RootLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/aboutus",
        element:<AboutUs />
      },
      {
        path:"/user-profile",
        element:<UserProfile/>,
        children:[
          {
            path:"healthCard",
            element:<HealthCard/>
          }
        ]
      }

    ]
  }])
  
  
  
  
  
  return (
      <RouterProvider router={Router} />
  );
}

export default App;
