import React from 'react'
import './CartWidget.css'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

function CartWidget({number}) {
	return (
		<>
			<ShoppingCartIcon />
			<span>{number}</span>
		</>
	);
}

export default CartWidget;
