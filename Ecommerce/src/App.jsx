import { useState } from "react"
import { Products } from "./components/products"
import { products as initialProducts} from './mocks/products.json'
import { Header } from "./components/Header"


function App() {
  const[products] = useState(initialProducts)

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  //Entender mejor!
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
    <main>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}></Products>
    </main>
    </>
  )
}

export default App
