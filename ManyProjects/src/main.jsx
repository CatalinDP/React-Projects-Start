import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppToDo from './apps/AppToDo.jsx'
import AppContactList from './apps/AppContactList.jsx'
import AppShoppingCart from './apps/AppShoppingCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppToDo />
    <hr></hr>
    <AppContactList />
    <hr></hr>
    <AppShoppingCart />
  </StrictMode>,
)
