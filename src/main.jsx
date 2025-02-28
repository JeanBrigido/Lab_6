import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "@asgardeo/auth-react";

createRoot(document.getElementById('root')).render(
<AuthProvider
  config={ {
      signInRedirectURL: "http://localhost:5173/",
      signOutRedirectURL: "http://localhost:5173/",
      clientID: "D9AGamUA9EbNLMkKUWLGAM4Hjc8a",
      baseUrl: "https://api.asgardeo.io/t/fullstack372",
      scope: [ "openid","profile" ]
  } }
  >
  {   <StrictMode>
      <App />
    </StrictMode> }
</AuthProvider>
)
