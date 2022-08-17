import { useState, useEffect } from 'react'
import Banner from './Banner.js';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
    const [cart, updateCart] = useState(JSON.parse(localStorage.getItem('cart')))

    useEffect(()=>{
		localStorage.setItem('cart',JSON.stringify(cart))
	},[cart])
        return (<div>
            <Banner />
            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <Footer/>
        </div>)
}

export default App;
