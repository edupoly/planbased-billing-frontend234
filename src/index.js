import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BusinessLogin from './features/business/BusinessLogin';
import BusinessRegistration from './features/business/BusinessRegistration';
import BusinessDashboard from './features/business/BusinessDashboard';
import { store } from './app/store'
import { Provider } from 'react-redux'
import AddPlan from './features/business/AddPlan';
import AddCustomer from './features/business/AddCustomer';
import AddService from './features/business/AddService';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/businesslogin",
        element:<BusinessLogin></BusinessLogin>
      },
      {
        path:"/businessregistration",
        element:<BusinessRegistration></BusinessRegistration>
      },
      {
        path:"/businessdashboard",
        element:<BusinessDashboard></BusinessDashboard>
      },
      {
        path:"/addPlan",
        element:<AddPlan></AddPlan>
      },
      {
        path:"/addCustomer",
        element:<AddCustomer></AddCustomer>
      },
      {
        path:"/addService",
        element:<AddService></AddService>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
