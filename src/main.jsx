import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeTab from './pages/TABS/Home.jsx'
import AboutTab from './pages/TABS/About.jsx'
import ContactTab from './pages/TABS/Contact.jsx'
import Login from './pages/TABS/Login.jsx'
// import LogIn from './loginpage/login'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '',
          element: <HomeTab />
        },
        {
          path: '/about',
          element: <AboutTab />
        },
        {
          path: '/contact',
          element: <ContactTab />
        },
      ],
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)