import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu';

function AppLayout(){
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/Menu/:id',
        element:<RestaurantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
     {/* <App />
    </Router> */}
  </React.StrictMode>
);

