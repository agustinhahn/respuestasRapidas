import {createContext, useState} from 'react'

export const ContextCart = createContext(null)


export const CartContext = ({children}) =>{

const [modalVP, setModalVP] = useState(false)

    return (

        <ContextCart.Provider value={{ modalVP, setModalVP}}>
            {children}
        </ContextCart.Provider>

    )
}

export default CartContext