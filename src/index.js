import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
// import LoginScreen from './components/LoginScreen/LoginScreen'
import Router from './Router/Router'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Router />
    </Provider>
)
