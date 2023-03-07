import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import { StateContextProvider } from './Context/StateContext'
import { Provider } from "react-redux";
import { store } from "./features/store"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    {/* <StateContextProvider store={store}><App /></StateContextProvider>                                                 */} */}
    <Provider store={store}><App /></Provider>

  </BrowserRouter>
)

