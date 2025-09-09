export const cartInitialState = JSON.parse(window.localStorage.getItem('shoppingCart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = (state) => {
    window.localStorage.setItem('shoppingCart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                //Usando structuredClone
                // const newState = structuredClone(state)
                // newState[productInCartIndex].quantity += 1

                //Usando el .map()
                // const newState = state.map(item => {
                //     if (item.id === id) {
                //         return {
                //             ...item, quantity: item.quantity + 1
                //         }
                //     }
                //     return item
                // })

                //Usando el spead operator y slice
                //Este podría ser el más rápido
                const newState = [
                    ...state.slice(0, productInCartIndex),
                    {...state[productInCartIndex], quantity: state[productInCartIndex].quantity +1},
                    ...state.slice(productInCartIndex + 1)
                ]
                updateLocalStorage(newState)
                return newState
            }

            const newState = [...state, {
                ...actionPayload,
                quantity: 1
            }]
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            const newState = state.filter(item => item.id != id)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage([])
            return []
        }
    }
    return state
}