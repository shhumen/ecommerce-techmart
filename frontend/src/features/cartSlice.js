import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item?.id === action.payload?.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQty += 1
                toast.info(`increased ${state.cartItems[itemIndex].name.substring(0, 25)} cart quantity`,
                    {
                        position: "bottom-right",
                        autoClose: 2000,
                        theme: "dark"
                    })
            } else {
                const tempProduct = {...action.payload, cartQty: 1}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload?.name.substring(0, 25)} added to cart`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "dark"
                })
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }


        },
        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = newCartItems
            toast.error(`${action.payload.name.substring(0, 25)} removed from cart`, {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        decreaseCart(state, action) {
            const indexOfItem = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[indexOfItem].cartQty > 1) {
                state.cartItems[indexOfItem].cartQty -= 1
                toast.info(`Decreased ${action.payload.name.substring(0, 25)} cart quantity`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "dark"
                })
            } else if (state.cartItems[indexOfItem].cartQty <= 0) return 1
            else {
                const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = newCartItems
                toast.error(`${action.payload.name.substring(0, 25)} removed from cart`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "dark"
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart(state) {
            state.cartItems = []
            toast.error(`Cart cleaned `, {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark"
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state) {
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const price = cartItem.price?.formatted
                    const cartQty = cartItem.cartQty
                    const itemTotal = price * cartQty

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQty

                    return cartTotal
                }, {
                    total: 0,
                    quantity: 0,
                })
            state.cartTotalAmount = total
            state.cartTotalQty = quantity
        }
    }
})


export const {addToCart, removeFromCart, decreaseCart, clearCart, getTotals} = cartSlice.actions
export default cartSlice.reducer