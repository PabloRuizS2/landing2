import React from 'react'
import './CartWidget.css'
import ShoppingCartIcon from "../assets/img/cart.svg";

function CartWidget({number}) {
	return (
		<>
			<ShoppingCartIcon />
			<span>{number}</span>
		</>
	);
}

export default CartWidget;
