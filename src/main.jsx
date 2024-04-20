import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//trae la etiqueta root para renderizar la pag
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*llama al componente App */}
    <App />
  </React.StrictMode>,
)
