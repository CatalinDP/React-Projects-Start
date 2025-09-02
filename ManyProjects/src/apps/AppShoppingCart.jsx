import { useState } from "react"

function AppShoppingCart() {
    const [items, setItems] = useState([
        { id: 1, nombre: "Pan", precio: 1.20 },
        { id: 2, nombre: "Leche", precio: 0.95 },
        { id: 3, nombre: "Huevos (docena)", precio: 2.50 },
        { id: 4, nombre: "Arroz (1kg)", precio: 1.80 },
        { id: 5, nombre: "Pasta (500g)", precio: 1.10 },
        { id: 6, nombre: "Queso", precio: 3.75 },
        { id: 7, nombre: "Manzanas (kg)", precio: 2.20 },
        { id: 8, nombre: "Pollo (kg)", precio: 5.90 },
        { id: 9, nombre: "Café (250g)", precio: 3.40 },
        { id: 10, nombre: "Chocolate", precio: 2.00 }
    ])

    const [cart, setCart] = useState(() => {
        const cartFromStorage = window.localStorage.getItem('cart')
        return JSON.parse(cartFromStorage) ?? []
    })

    const clickHandle = (index) => {
        
        setCart(cart => {
            const i = cart.findIndex((obj) => obj.id === items[index].id)
            if (i !== -1) {
                const newCart = [...cart]
                newCart[i] = { ...newCart[i], cantidad: newCart[i].cantidad + 1 };
                return newCart
            }
            return [...cart, {...items[index], cantidad: 1}]
        })
        //window.localStorage.setItem('cart', JSON.stringify(cart))
    }
    

const delFromCart = (id) => {
    setCart(cart =>
        cart.map(item =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
            .filter(item => item.cantidad > 0)
    )
    //window.localStorage.setItem('cart', JSON.stringify(cart))
}

let total = 0

return (
    <main>
        <h1>Shopping cart</h1>
        <section>
            <h1>Items</h1>
            {
                items.map((item, index) => {
                    return (
                        <p key={item.id}>{item.nombre}: <strong>{item.precio}€</strong> <button type="button" onClick={() => clickHandle(index)}>Add to cart</button></p>
                    )
                })
            }
        </section>
        <section>
            <h1>Items del carrito</h1>
            {
                cart.map((item, index) => {
                    total += (item.precio * item.cantidad);
                    return (
                        <p key={index + Math.random()}>{item.nombre} --- cantidad: {item.cantidad}: <strong>{item.precio}€</strong> <button type="button" onClick={() => delFromCart(item.id)}>Borrar del carrito</button></p>
                    )
                })
            }
            <p>Precio total: {total.toFixed(2)}€</p>
        </section>
    </main>
)
}

export default AppShoppingCart