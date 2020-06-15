import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "ply-coasters.myshopify.com",
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
})

const defaultValues = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  cart: [],
  client,
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const isBrowser = typeof window !== "undefined"

  const toggleCartOpen = () => setCartOpen(!isCartOpen)

  useEffect(() => {
    initializeCheckout()
  }, [])

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (error) {}
  }

  const initializeCheckout = async () => {
    try {
      // Check if id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        // If it exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId)
        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        // If it does not exist, create new checkout
        newCheckout = await getNewId()
      }
      // console.log("client.checkout: ", client.checkout)
      // Set checkout to state
      setCheckout(newCheckout)
    } catch (e) {}
  }

  const addProductToCart = async variantId => {
    try {
      setLoading(true)
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      // Buy Now Button Code
      // window.open(newCheckout.webUrl, "_blank")
      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  const removeProductFromCart = async variantId => {
    try {
      setLoading(true)
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        variantId,
      ])
      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addProductToCart,
        removeProductFromCart,
        checkout,
        toggleCartOpen,
        isCartOpen,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
