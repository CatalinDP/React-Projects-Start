import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer () {

  const { cart } = useCart()
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      { 
        <div>
          <h4>Prueba técnica de React ⚛️ － <span>Cat</span></h4>
          <h5>Shopping Cart con useContext & useReducer</h5>
        </div>
      }
    </footer>
  )
}