import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Root element where the React app will be mounted
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error('Root element not found')
}
