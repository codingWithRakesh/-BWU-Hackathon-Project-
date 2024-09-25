import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import WebScreenshot from './component/webScreenshot.jsx'
import RandomUserData from './component/randomUserData.jsx'
import PdfToQr from './component/pdfToQr.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/webScreenshot',
        element: <WebScreenshot />
      },
      {
        path: '/randomUserData',
        element: <RandomUserData />
      },
      {
        path: '/pdfToQr',
        element: <PdfToQr />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
