import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import QuizPage from './pages/QuizPage.jsx'
import Profile from './pages/Profile.jsx'
import PlayerContext from './context/PlayerContext.js'
import PlayerContextProvider from './context/PlayerContextProvider.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <div>OOpsiee!!!</div>
  },
  {
    path : '/quizpage',
    element: <QuizPage/>,
  },
  {
    path : '/profile',
    element : <Profile/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerContextProvider>
      <RouterProvider router={router}/>
    </PlayerContextProvider>
  </StrictMode>
)
