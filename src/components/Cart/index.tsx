import { useState } from "react";
import IProduct from "../../models/Product";
import CartItem from "../CartItem";
import './style.css';

const products: IProduct[] = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(products)
  const handleAmountChange = (index: number, amount: number) => {
    console.log(index, amount)
    const newProducts = [...cartProducts]
    newProducts[index].amount = amount;
    setCartProducts(newProducts)
  }

  const count = cartProducts.map(p => p.amount).reduce((prev, cur) => prev+cur, 0)
  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {count}</span>
      </div>
      <div className="cart__items">
        {products.map((product, index) => (
          <CartItem product={product} key={product.name} onAmountChange={amount => handleAmountChange(index, amount)}/>
        ))}
      </div>
    </div>
  )
};

export default Cart;
